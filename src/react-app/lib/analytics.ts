import posthog from 'posthog-js';
import ReactGA from 'react-ga4';

interface CTATrackingParams {
  ctaName: string;
  ctaLocation: string;
  ctaType?: 'button' | 'link' | 'form' | 'banner';
  ctaText?: string;
  destinationUrl?: string;
  customProperties?: Record<string, unknown>;
}

/**
 * Track CTA clicks in both PostHog and Google Analytics
 */
export const trackCTAClick = ({
  ctaName,
  ctaLocation,
  ctaType = 'button',
  ctaText,
  destinationUrl,
  customProperties = {}
}: CTATrackingParams) => {
  const eventData = {
    cta_name: ctaName,
    cta_location: ctaLocation,
    cta_type: ctaType,
    cta_text: ctaText,
    destination_url: destinationUrl,
    timestamp: Date.now(),
    page_url: window.location.href,
    page_path: window.location.pathname,
    ...customProperties
  };

  // Track in PostHog
  if (typeof posthog !== 'undefined') {
    posthog.capture('cta_clicked', eventData);
  }

  // Track in Google Analytics
  if (import.meta.env.VITE_GA_MEASUREMENT_ID) {
    ReactGA.event('cta_click', {
      event_category: 'CTA',
      event_label: ctaName,
      cta_location: ctaLocation,
      cta_type: ctaType,
      cta_text: ctaText,
      destination_url: destinationUrl,
      ...customProperties
    });
  }

  // Also track as conversion event in GA4
  if (import.meta.env.VITE_GA_MEASUREMENT_ID) {
    ReactGA.gtag('event', 'conversion', {
      send_to: import.meta.env.VITE_GA_MEASUREMENT_ID,
      event_category: 'CTA',
      event_label: ctaName,
      value: customProperties.value || 1,
    });
  }
};

/**
 * Track form submissions
 */
export const trackFormSubmission = (
  formName: string,
  formData?: Record<string, unknown>,
  success: boolean = true
) => {
  const eventData = {
    form_name: formName,
    form_success: success,
    timestamp: Date.now(),
    page_url: window.location.href,
    ...formData
  };

  // Track in PostHog
  if (typeof posthog !== 'undefined') {
    posthog.capture(success ? 'form_submitted' : 'form_submission_failed', eventData);
  }

  // Track in Google Analytics
  if (import.meta.env.VITE_GA_MEASUREMENT_ID) {
    ReactGA.event(success ? 'form_submit' : 'form_failed', {
      event_category: 'Form',
      event_label: formName,
      ...eventData
    });
  }
};

/**
 * Track page views
 */
export const trackPageView = (pagePath?: string, pageTitle?: string) => {
  const path = pagePath || window.location.pathname + window.location.search;
  const title = pageTitle || document.title;

  // Track in PostHog
  if (typeof posthog !== 'undefined') {
    posthog.capture('$pageview', {
      $current_url: window.location.href,
      $pathname: path,
      $title: title
    });
  }

  // Track in Google Analytics
  if (import.meta.env.VITE_GA_MEASUREMENT_ID) {
    ReactGA.send({ 
      hitType: "pageview", 
      page: path,
      title: title
    });
  }
};

/**
 * Track custom events
 */
export const trackCustomEvent = (
  eventName: string,
  properties?: Record<string, unknown>
) => {
  const eventData = {
    timestamp: Date.now(),
    page_url: window.location.href,
    ...properties
  };

  // Track in PostHog
  if (typeof posthog !== 'undefined') {
    posthog.capture(eventName, eventData);
  }

  // Track in Google Analytics
  if (import.meta.env.VITE_GA_MEASUREMENT_ID) {
    ReactGA.event(eventName, {
      event_category: 'Custom',
      ...eventData
    });
  }
};

/**
 * Identify user (for when they provide information)
 */
export const identifyUser = (
  userId: string,
  userProperties?: Record<string, unknown>
) => {
  // Identify in PostHog
  if (typeof posthog !== 'undefined') {
    posthog.identify(userId, userProperties);
  }

  // Set user properties in Google Analytics
  if (import.meta.env.VITE_GA_MEASUREMENT_ID) {
    ReactGA.gtag('set', 'user_properties', userProperties);
  }
};

/**
 * Track video interactions
 */
export const trackVideoInteraction = (
  action: 'play' | 'pause' | 'complete' | 'progress',
  videoName: string,
  progress?: number
) => {
  const eventData = {
    video_name: videoName,
    video_action: action,
    video_progress: progress,
    timestamp: Date.now()
  };

  // Track in PostHog
  if (typeof posthog !== 'undefined') {
    posthog.capture('video_interaction', eventData);
  }

  // Track in Google Analytics
  if (import.meta.env.VITE_GA_MEASUREMENT_ID) {
    ReactGA.event(`video_${action}`, {
      event_category: 'Video',
      event_label: videoName,
      value: progress,
      ...eventData
    });
  }
};

/**
 * Track button clicks (generic)
 */
export const trackButtonClick = (
  buttonName: string,
  buttonLocation: string,
  customProperties?: Record<string, unknown>
) => {
  trackCTAClick({
    ctaName: buttonName,
    ctaLocation: buttonLocation,
    ctaType: 'button',
    customProperties
  });
};

/**
 * Track link clicks
 */
export const trackLinkClick = (
  linkText: string,
  linkUrl: string,
  linkLocation: string
) => {
  trackCTAClick({
    ctaName: linkText,
    ctaLocation: linkLocation,
    ctaType: 'link',
    ctaText: linkText,
    destinationUrl: linkUrl
  });
};
