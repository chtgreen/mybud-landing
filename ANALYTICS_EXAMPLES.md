# Analytics Integration Examples

This guide shows you how to integrate analytics tracking into your React components.

## Import the Analytics Functions

```typescript
import { trackCTAClick, trackFormSubmission, trackButtonClick } from '@/lib/analytics';
```

## Example 1: Track CTA Button Clicks

### Hero Component Example

```typescript
// src/react-app/components/Hero.tsx
import { trackCTAClick } from '../lib/analytics';

const Hero: FC<HeroProps> = ({ onCTAClick }) => {
  const handleCTAClick = () => {
    // Track the CTA click
    trackCTAClick({
      ctaName: 'Join Beta',
      ctaLocation: 'Hero Section',
      ctaType: 'button',
      ctaText: t('hero.primaryCta'),
      customProperties: {
        page: window.location.pathname,
        theme: 'emerald'
      }
    });
    
    // Call the original handler
    onCTAClick();
  };

  return (
    <button
      className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold bg-[#eb4c80] text-white hover:bg-[#d13a6a] transition-colors border-0"
      onClick={handleCTAClick}
    >
      <span>{t('hero.primaryCta')}</span>
    </button>
  );
};
```

## Example 2: Track Form Submissions

### Beta Signup Form Example

```typescript
// src/react-app/components/BetaSignup.tsx
import { trackFormSubmission, identifyUser } from '../lib/analytics';

const BetaSignup: FC = () => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get('email') as string;
    
    try {
      // Your form submission logic
      const response = await submitToSupabase(email);
      
      // Track successful submission
      trackFormSubmission('Beta Signup Form', {
        email: email,
        source: 'homepage',
        timestamp: Date.now()
      }, true);
      
      // Identify the user
      identifyUser(email, {
        email: email,
        signup_source: 'landing_page',
        signup_date: new Date().toISOString()
      });
      
    } catch (error) {
      // Track failed submission
      trackFormSubmission('Beta Signup Form', {
        email: email,
        error: error.message
      }, false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" required />
      <button type="submit">Join Beta</button>
    </form>
  );
};
```

## Example 3: Track Navigation Links

### Footer Links Example

```typescript
// src/react-app/components/Footer.tsx
import { trackLinkClick } from '../lib/analytics';

const Footer: FC = () => {
  const handleLinkClick = (linkText: string, linkUrl: string) => {
    trackLinkClick(linkText, linkUrl, 'Footer Navigation');
  };

  return (
    <footer>
      <a 
        href="/privacy" 
        onClick={() => handleLinkClick('Privacy Policy', '/privacy')}
      >
        Privacy Policy
      </a>
      <a 
        href="/terms" 
        onClick={() => handleLinkClick('Terms of Service', '/terms')}
      >
        Terms of Service
      </a>
    </footer>
  );
};
```

## Example 4: Track Video Interactions

### Video Demo Component Example

```typescript
// src/react-app/components/VideoDemo.tsx
import { trackVideoInteraction } from '../lib/analytics';

const VideoDemo: FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasTrackedHalfway, setHasTrackedHalfway] = useState(false);

  const handlePlay = () => {
    trackVideoInteraction('play', 'Product Demo Video');
  };

  const handlePause = () => {
    const progress = videoRef.current 
      ? Math.round((videoRef.current.currentTime / videoRef.current.duration) * 100)
      : 0;
    trackVideoInteraction('pause', 'Product Demo Video', progress);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    
    const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    
    // Track 50% completion once
    if (progress >= 50 && !hasTrackedHalfway) {
      trackVideoInteraction('progress', 'Product Demo Video', 50);
      setHasTrackedHalfway(true);
    }
  };

  const handleEnded = () => {
    trackVideoInteraction('complete', 'Product Demo Video', 100);
  };

  return (
    <video
      ref={videoRef}
      onPlay={handlePlay}
      onPause={handlePause}
      onTimeUpdate={handleTimeUpdate}
      onEnded={handleEnded}
      controls
    >
      <source src="/demo-video.mp4" type="video/mp4" />
    </video>
  );
};
```

## Example 5: Track Section Views

### Using the useAnalytics Hook

```typescript
// src/react-app/components/FeaturesSection.tsx
import { useAnalytics } from '../hooks/useAnalytics';

const FeaturesSection: FC = () => {
  const { setupTracking, trackInteraction } = useAnalytics({
    sectionName: 'Features Section',
    trackScroll: true,
    trackTimeSpent: true,
    scrollThresholds: [25, 50, 75, 100]
  });

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    return setupTracking(sectionRef.current);
  }, [setupTracking]);

  const handleFeatureClick = (featureName: string) => {
    trackInteraction('feature_clicked', {
      feature_name: featureName
    });
  };

  return (
    <section ref={sectionRef}>
      <button onClick={() => handleFeatureClick('Plant Timeline')}>
        Learn More
      </button>
    </section>
  );
};
```

## Example 6: Track Custom Events

### Track Feature Usage

```typescript
// src/react-app/components/AppShowcase.tsx
import { trackCustomEvent } from '../lib/analytics';

const AppShowcase: FC = () => {
  const handleFeatureExplore = (featureName: string) => {
    trackCustomEvent('feature_explored', {
      feature_name: featureName,
      section: 'App Showcase',
      timestamp: Date.now()
    });
  };

  const handleTabChange = (tabName: string) => {
    trackCustomEvent('tab_changed', {
      tab_name: tabName,
      section: 'App Showcase'
    });
  };

  return (
    <div>
      <button onClick={() => handleFeatureExplore('Plant Timeline')}>
        Explore Timeline
      </button>
    </div>
  );
};
```

## Example 7: Track Download/Install

### Track App Download

```typescript
// src/react-app/components/DownloadSection.tsx
import { trackCTAClick } from '../lib/analytics';

const DownloadSection: FC = () => {
  const handleDownloadClick = (platform: 'ios' | 'android') => {
    trackCTAClick({
      ctaName: `Download ${platform}`,
      ctaLocation: 'Download Section',
      ctaType: 'button',
      destinationUrl: platform === 'ios' ? 'app-store-url' : 'play-store-url',
      customProperties: {
        platform: platform,
        action: 'download_app'
      }
    });
  };

  return (
    <div>
      <button onClick={() => handleDownloadClick('ios')}>
        Download for iOS
      </button>
      <button onClick={() => handleDownloadClick('android')}>
        Download for Android
      </button>
    </div>
  );
};
```

## Example 8: Track Theme Changes

### Theme Selector Example

```typescript
// src/react-app/components/ThemeSelector.tsx
import { trackCustomEvent } from '../lib/analytics';

const ThemeSelector: FC = () => {
  const handleThemeChange = (theme: string) => {
    trackCustomEvent('theme_changed', {
      theme_name: theme,
      section: 'Hero Section',
      timestamp: Date.now()
    });
    
    // Apply theme change
    setCurrentTheme(theme);
  };

  return (
    <div>
      {themes.map(theme => (
        <button 
          key={theme} 
          onClick={() => handleThemeChange(theme)}
        >
          {theme}
        </button>
      ))}
    </div>
  );
};
```

## Best Practices

### 1. Track Early in the Flow
```typescript
// ✅ Good: Track before navigation
const handleCTAClick = () => {
  trackCTAClick({...});
  window.location.href = '/signup';
};

// ❌ Bad: Track after navigation (might not fire)
const handleCTAClick = () => {
  window.location.href = '/signup';
  trackCTAClick({...}); // May not execute
};
```

### 2. Use Descriptive Names
```typescript
// ✅ Good: Clear, descriptive
trackCTAClick({
  ctaName: 'Beta Signup - Hero Section',
  ctaLocation: 'Hero Section - Above Fold'
});

// ❌ Bad: Vague
trackCTAClick({
  ctaName: 'Button',
  ctaLocation: 'Page'
});
```

### 3. Include Context
```typescript
// ✅ Good: Rich context
trackCTAClick({
  ctaName: 'Join Beta',
  ctaLocation: 'Hero Section',
  customProperties: {
    theme: currentTheme,
    language: currentLanguage,
    viewport_width: window.innerWidth,
    scroll_position: window.scrollY
  }
});
```

### 4. Handle Errors Gracefully
```typescript
// ✅ Good: Don't let tracking break your app
const handleSubmit = async () => {
  try {
    await submitForm();
    trackFormSubmission('Contact Form', {}, true);
  } catch (error) {
    trackFormSubmission('Contact Form', { error: error.message }, false);
    // Show error to user
  }
};
```

## Quick Reference

| Action | Function | Use Case |
|--------|----------|----------|
| Button Click | `trackCTAClick()` | Primary CTAs, Sign ups, Downloads |
| Form Submit | `trackFormSubmission()` | Contact forms, Beta signups, Surveys |
| Link Click | `trackLinkClick()` | Navigation, External links |
| Video Play | `trackVideoInteraction()` | Demo videos, Tutorials |
| Custom Event | `trackCustomEvent()` | Feature usage, Theme changes |
| User ID | `identifyUser()` | After signup, Login |
| Page View | `trackPageView()` | Route changes, Modal opens |

## Testing Your Analytics

### 1. Development Testing
```typescript
// Add this to see what's being tracked
if (import.meta.env.DEV) {
  console.log('Analytics Event:', eventName, eventData);
}
```

### 2. Check Browser Console
- Open DevTools → Console
- Look for PostHog and GA4 events
- Verify event properties are correct

### 3. Real-time Reports
- **Google Analytics**: Admin → Realtime → Events
- **PostHog**: Activity → Live Events

### 4. Use Debug Mode
```typescript
// Enable GA4 debug mode
ReactGA.gtag('set', 'debug_mode', true);
```

## Common Patterns

### Pattern 1: Track + Navigate
```typescript
const handleCTAClick = () => {
  trackCTAClick({...});
  navigate('/signup');
};
```

### Pattern 2: Track + Modal
```typescript
const openModal = () => {
  trackCustomEvent('modal_opened', { modal_name: 'Beta Signup' });
  setModalOpen(true);
};
```

### Pattern 3: Track + External Link
```typescript
const openExternalLink = (url: string) => {
  trackLinkClick('External Resource', url, 'Resources Section');
  window.open(url, '_blank');
};
```

## Need Help?

- See [ANALYTICS_SETUP.md](./ANALYTICS_SETUP.md) for setup instructions
- Check [Google Analytics Documentation](https://developers.google.com/analytics/devguides/collection/ga4)
- Check [PostHog Documentation](https://posthog.com/docs)

