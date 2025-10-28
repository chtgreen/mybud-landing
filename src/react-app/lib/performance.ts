/**
 * Core Web Vitals Performance Monitoring
 * Tracks key performance metrics for SEO and UX optimization
 */

import { trackCustomEvent } from './analytics';

interface PerformanceMetric {
  name: string;
  value: number;
  rating?: 'good' | 'needs-improvement' | 'poor';
  delta?: number;
  id?: string;
  navigationType?: string;
}

/**
 * Get performance rating based on Core Web Vitals thresholds
 */
function getRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  switch (name) {
    case 'LCP': // Largest Contentful Paint
      if (value <= 2500) return 'good';
      if (value <= 4000) return 'needs-improvement';
      return 'poor';
    
    case 'FID': // First Input Delay
      if (value <= 100) return 'good';
      if (value <= 300) return 'needs-improvement';
      return 'poor';
    
    case 'CLS': // Cumulative Layout Shift
      if (value <= 0.1) return 'good';
      if (value <= 0.25) return 'needs-improvement';
      return 'poor';
    
    case 'FCP': // First Contentful Paint
      if (value <= 1800) return 'good';
      if (value <= 3000) return 'needs-improvement';
      return 'poor';
    
    case 'TTFB': // Time to First Byte
      if (value <= 800) return 'good';
      if (value <= 1800) return 'needs-improvement';
      return 'poor';
    
    case 'INP': // Interaction to Next Paint
      if (value <= 200) return 'good';
      if (value <= 500) return 'needs-improvement';
      return 'poor';
    
    default:
      return 'good';
  }
}

/**
 * Track Web Vitals metric with analytics
 */
export function reportWebVitals(metric: PerformanceMetric) {
  const rating = metric.rating || getRating(metric.name, metric.value);
  
  // Track in analytics (GA4 + PostHog)
  trackCustomEvent('web_vitals', {
    metric_name: metric.name,
    metric_value: Math.round(metric.value),
    metric_rating: rating,
    metric_delta: metric.delta ? Math.round(metric.delta) : undefined,
    metric_id: metric.id,
    navigation_type: metric.navigationType,
    page_url: window.location.href,
    page_path: window.location.pathname,
    timestamp: Date.now()
  });

  // Log to console in development
  if (import.meta.env.DEV) {
    console.log(`[Web Vitals] ${metric.name}:`, {
      value: Math.round(metric.value),
      rating,
      delta: metric.delta ? Math.round(metric.delta) : undefined
    });
  }
}

/**
 * Observe Largest Contentful Paint (LCP)
 */
function observeLCP() {
  if (!('PerformanceObserver' in window)) return;

  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as any;
      
      if (lastEntry) {
        reportWebVitals({
          name: 'LCP',
          value: lastEntry.renderTime || lastEntry.loadTime,
          rating: getRating('LCP', lastEntry.renderTime || lastEntry.loadTime)
        });
      }
    });
    
    observer.observe({ type: 'largest-contentful-paint', buffered: true });
  } catch (error) {
    console.warn('LCP observation failed:', error);
  }
}

/**
 * Observe First Input Delay (FID)
 */
function observeFID() {
  if (!('PerformanceObserver' in window)) return;

  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        reportWebVitals({
          name: 'FID',
          value: entry.processingStart - entry.startTime,
          rating: getRating('FID', entry.processingStart - entry.startTime)
        });
      });
    });
    
    observer.observe({ type: 'first-input', buffered: true });
  } catch (error) {
    console.warn('FID observation failed:', error);
  }
}

/**
 * Observe Cumulative Layout Shift (CLS)
 */
function observeCLS() {
  if (!('PerformanceObserver' in window)) return;

  let clsValue = 0;
  let clsEntries: any[] = [];

  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          clsEntries.push(entry);
        }
      });

      reportWebVitals({
        name: 'CLS',
        value: clsValue,
        rating: getRating('CLS', clsValue)
      });
    });
    
    observer.observe({ type: 'layout-shift', buffered: true });
  } catch (error) {
    console.warn('CLS observation failed:', error);
  }
}

/**
 * Observe First Contentful Paint (FCP)
 */
function observeFCP() {
  if (!('PerformanceObserver' in window)) return;

  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (entry.name === 'first-contentful-paint') {
          reportWebVitals({
            name: 'FCP',
            value: entry.startTime,
            rating: getRating('FCP', entry.startTime)
          });
        }
      });
    });
    
    observer.observe({ type: 'paint', buffered: true });
  } catch (error) {
    console.warn('FCP observation failed:', error);
  }
}

/**
 * Measure Time to First Byte (TTFB)
 */
function measureTTFB() {
  try {
    const navTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    if (navTiming) {
      const ttfb = navTiming.responseStart - navTiming.requestStart;
      
      reportWebVitals({
        name: 'TTFB',
        value: ttfb,
        rating: getRating('TTFB', ttfb)
      });
    }
  } catch (error) {
    console.warn('TTFB measurement failed:', error);
  }
}

/**
 * Initialize Core Web Vitals monitoring
 * Call this once when the app starts
 */
export function initWebVitals() {
  // Only run in browser
  if (typeof window === 'undefined') return;

  // Wait for page to be fully loaded
  if (document.readyState === 'complete') {
    startMonitoring();
  } else {
    window.addEventListener('load', startMonitoring);
  }
}

function startMonitoring() {
  // Observe Core Web Vitals
  observeLCP();
  observeFID();
  observeCLS();
  observeFCP();
  measureTTFB();

  // Track page load time
  const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
  trackCustomEvent('page_performance', {
    load_time: loadTime,
    dom_content_loaded: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart,
    page_url: window.location.href,
    page_path: window.location.pathname
  });
}

/**
 * Track custom performance marks
 */
export function trackPerformanceMark(markName: string) {
  try {
    performance.mark(markName);
    
    trackCustomEvent('performance_mark', {
      mark_name: markName,
      timestamp: performance.now(),
      page_url: window.location.href
    });
  } catch (error) {
    console.warn('Performance mark failed:', error);
  }
}

/**
 * Measure time between two performance marks
 */
export function measurePerformance(measureName: string, startMark: string, endMark: string) {
  try {
    performance.measure(measureName, startMark, endMark);
    const measure = performance.getEntriesByName(measureName)[0];
    
    if (measure) {
      trackCustomEvent('performance_measure', {
        measure_name: measureName,
        duration: Math.round(measure.duration),
        start_mark: startMark,
        end_mark: endMark,
        page_url: window.location.href
      });
    }
  } catch (error) {
    console.warn('Performance measurement failed:', error);
  }
}

/**
 * Track JavaScript errors for debugging
 */
export function initErrorTracking() {
  if (typeof window === 'undefined') return;

  window.addEventListener('error', (event) => {
    trackCustomEvent('javascript_error', {
      message: event.message,
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno,
      error_type: 'runtime_error',
      stack: event.error?.stack?.substring(0, 500), // Limit stack trace length
      page_url: window.location.href
    });
  });

  window.addEventListener('unhandledrejection', (event) => {
    trackCustomEvent('javascript_error', {
      message: event.reason?.message || 'Unhandled Promise Rejection',
      error_type: 'unhandled_rejection',
      reason: String(event.reason).substring(0, 500),
      page_url: window.location.href
    });
  });
}

export default {
  reportWebVitals,
  initWebVitals,
  trackPerformanceMark,
  measurePerformance,
  initErrorTracking
};

