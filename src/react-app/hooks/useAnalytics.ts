import { useEffect, useRef, useCallback } from 'react';
import posthog from 'posthog-js';

interface AnalyticsConfig {
  sectionName: string;
  trackScroll?: boolean;
  trackTimeSpent?: boolean;
  scrollThresholds?: number[];
}

type AnalyticsEventProperties = Record<string, unknown>;

export const useAnalytics = (config: AnalyticsConfig) => {
  const startTimeRef = useRef<number | undefined>(undefined);
  const scrollThresholdsReached = useRef<Set<number>>(new Set());
  const isVisible = useRef(false);
  const lastScrollPosition = useRef(0);
  const readingStartTime = useRef<number | undefined>(undefined);
  
  const trackEvent = useCallback(
    (eventName: string, properties: AnalyticsEventProperties = {}) => {
      if (typeof posthog !== 'undefined') {
        posthog.capture(eventName, {
          section: config.sectionName,
          timestamp: Date.now(),
          ...properties
        });
      }
    },
    [config.sectionName]
  );

  const trackTimeSpent = useCallback(() => {
    if (startTimeRef.current) {
      const timeSpent = Date.now() - startTimeRef.current;
      trackEvent('section_time_spent', {
        duration_ms: timeSpent,
        duration_seconds: Math.round(timeSpent / 1000)
      });
    }
  }, [trackEvent]);

  const trackScrollProgress = useCallback((element: Element) => {
    const rect = element.getBoundingClientRect();
    const elementHeight = rect.height;
    const viewportHeight = window.innerHeight;
    
    // Calculate how much of the element is visible
    const visibleTop = Math.max(0, -rect.top);
    const visibleBottom = Math.min(elementHeight, viewportHeight - rect.top);
    const visibleHeight = Math.max(0, visibleBottom - visibleTop);
    const visibilityPercentage = Math.round((visibleHeight / elementHeight) * 100);
    
    // Track scroll thresholds
    if (config.scrollThresholds) {
      config.scrollThresholds.forEach(threshold => {
        if (visibilityPercentage >= threshold && !scrollThresholdsReached.current.has(threshold)) {
          scrollThresholdsReached.current.add(threshold);
          trackEvent('scroll_threshold_reached', {
            threshold_percentage: threshold,
            current_visibility: visibilityPercentage
          });
        }
      });
    }

    // Track reading behavior
    const currentScrollY = window.scrollY;
    const scrollDirection = currentScrollY > lastScrollPosition.current ? 'down' : 'up';
    lastScrollPosition.current = currentScrollY;

    // If user is actively scrolling down and reading
    if (scrollDirection === 'down' && visibilityPercentage > 50) {
      if (!readingStartTime.current) {
        readingStartTime.current = Date.now();
        trackEvent('reading_started', {
          visibility_percentage: visibilityPercentage
        });
      }
    }

    // If user scrolled away, calculate reading time
    if (visibilityPercentage < 20 && readingStartTime.current) {
      const readingTime = Date.now() - readingStartTime.current;
      trackEvent('reading_completed', {
        reading_time_ms: readingTime,
        reading_time_seconds: Math.round(readingTime / 1000)
      });
      readingStartTime.current = undefined;
    }
    
    return visibilityPercentage;
  }, [config.scrollThresholds, trackEvent]);

  const setupIntersectionObserver = useCallback((element: Element) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible.current) {
            // Section became visible
            isVisible.current = true;
            startTimeRef.current = Date.now();
            trackEvent('section_viewed', {
              intersection_ratio: entry.intersectionRatio,
              viewport_height: window.innerHeight,
              element_height: entry.boundingClientRect.height
            });
          } else if (!entry.isIntersecting && isVisible.current) {
            // Section left viewport
            isVisible.current = false;
            if (config.trackTimeSpent) {
              trackTimeSpent();
            }
          }
        });
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1.0],
        rootMargin: '0px'
      }
    );

    observer.observe(element);
    return observer;
  }, [config.trackTimeSpent, trackEvent, trackTimeSpent]);

  const setupScrollTracking = useCallback((element: Element) => {
    const handleScroll = () => {
      if (isVisible.current && config.trackScroll) {
        trackScrollProgress(element);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [config.trackScroll, trackScrollProgress]);

  const trackInteraction = useCallback(
    (interactionType: string, details: AnalyticsEventProperties = {}) => {
      const timeOnSection = startTimeRef.current ? Date.now() - startTimeRef.current : 0;

      trackEvent('user_interaction', {
        interaction_type: interactionType,
        time_before_interaction_ms: timeOnSection,
        time_before_interaction_seconds: Math.round(timeOnSection / 1000),
        scroll_thresholds_reached: Array.from(scrollThresholdsReached.current),
        ...details
      });
    },
    [trackEvent]
  );

  const setupTracking = useCallback((element: Element | null) => {
    if (!element) return;

    const cleanupFunctions: (() => void)[] = [];

    // Setup intersection observer
    const intersectionObserver = setupIntersectionObserver(element);
    cleanupFunctions.push(() => intersectionObserver.disconnect());

    // Setup scroll tracking
    if (config.trackScroll) {
      const cleanupScroll = setupScrollTracking(element);
      cleanupFunctions.push(cleanupScroll);
    }

    // Cleanup function
    return () => {
      cleanupFunctions.forEach(cleanup => cleanup());
      
      // Final time tracking when component unmounts
      if (config.trackTimeSpent && isVisible.current) {
        trackTimeSpent();
      }
    };
  }, [config.trackScroll, config.trackTimeSpent, setupIntersectionObserver, setupScrollTracking, trackTimeSpent]);

  // Track page visibility changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && isVisible.current) {
        trackEvent('page_hidden_while_viewing', {
          time_spent_before_hidden: startTimeRef.current ? Date.now() - startTimeRef.current : 0
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [trackEvent]);

  return {
    setupTracking,
    trackInteraction,
    trackEvent
  };
}; 
