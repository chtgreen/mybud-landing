# Analytics Setup Guide

This project uses **Google Analytics 4 (GA4)** and **PostHog** for comprehensive analytics tracking.

## Environment Variables

You need to configure the following environment variables:

### Google Analytics
```bash
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```
- Get your Measurement ID from Google Analytics 4
- Format: `G-XXXXXXXXXX`
- Find it in: Google Analytics → Admin → Data Streams → Your Stream

### PostHog
```bash
VITE_POSTHOG_KEY=phc_xxxxxxxxxxxxx
VITE_POSTHOG_HOST=https://app.posthog.com
```

### Supabase
```bash
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Stripe
```bash
VITE_STRIPE_PAYMENT_LINK=https://buy.stripe.com/xxxxx
```

## Setup Instructions

### 1. Local Development

Create a `.env` file in the root directory:

```bash
# Copy and edit with your values
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_POSTHOG_KEY=phc_xxxxxxxxxxxxx
VITE_POSTHOG_HOST=https://app.posthog.com
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
VITE_STRIPE_PAYMENT_LINK=
```

### 2. Cloudflare Workers Deployment

Update the `wrangler.json` file with your production values:

```json
{
  "vars": {
    "VITE_GA_MEASUREMENT_ID": "G-XXXXXXXXXX",
    "VITE_POSTHOG_KEY": "phc_xxxxxxxxxxxxx",
    "VITE_POSTHOG_HOST": "https://app.posthog.com",
    "VITE_SUPABASE_URL": "https://xxxxx.supabase.co",
    "VITE_SUPABASE_ANON_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "VITE_STRIPE_PAYMENT_LINK": "https://buy.stripe.com/xxxxx"
  }
}
```

### 3. Deploy via CLI

```bash
# Build the project
npm run build

# Deploy to Cloudflare Workers
npm run deploy
```

Or use Wrangler directly:

```bash
# Deploy with environment variables
wrangler deploy

# Deploy to a specific environment
wrangler deploy --env production
```

## Analytics Features

### CTA Tracking

Use the `trackCTAClick` function to track call-to-action clicks:

```typescript
import { trackCTAClick } from '@/lib/analytics';

// Track a button click
trackCTAClick({
  ctaName: 'Join Beta',
  ctaLocation: 'Hero Section',
  ctaType: 'button',
  ctaText: 'Join the Beta',
  destinationUrl: '/signup'
});
```

### Form Tracking

```typescript
import { trackFormSubmission } from '@/lib/analytics';

// Track form submission
trackFormSubmission('Beta Signup Form', {
  email: 'user@example.com',
  source: 'homepage'
}, true); // success = true
```

### Custom Events

```typescript
import { trackCustomEvent } from '@/lib/analytics';

// Track any custom event
trackCustomEvent('feature_explored', {
  feature_name: 'Plant Timeline',
  time_spent: 30
});
```

### Page Views

```typescript
import { trackPageView } from '@/lib/analytics';

// Track page view
trackPageView('/pricing', 'Pricing Page');
```

### User Identification

```typescript
import { identifyUser } from '@/lib/analytics';

// Identify a user after signup
identifyUser('user-123', {
  email: 'user@example.com',
  plan: 'free',
  signup_date: new Date().toISOString()
});
```

### Video Interactions

```typescript
import { trackVideoInteraction } from '@/lib/analytics';

// Track video play
trackVideoInteraction('play', 'Product Demo Video');

// Track video progress
trackVideoInteraction('progress', 'Product Demo Video', 50); // 50%

// Track video completion
trackVideoInteraction('complete', 'Product Demo Video', 100);
```

## Available Analytics Functions

All functions are available in `src/react-app/lib/analytics.ts`:

- `trackCTAClick()` - Track CTA button/link clicks
- `trackFormSubmission()` - Track form submissions
- `trackPageView()` - Track page views
- `trackCustomEvent()` - Track custom events
- `identifyUser()` - Identify users
- `trackVideoInteraction()` - Track video plays/pauses/completions
- `trackButtonClick()` - Generic button click tracking
- `trackLinkClick()` - Track link clicks

## Verification

### Verify Google Analytics

1. Go to Google Analytics → Reports → Realtime
2. Visit your website
3. Check that events are appearing in real-time

### Verify PostHog

1. Go to PostHog → Activity
2. Visit your website
3. Check that events are being captured

## Troubleshooting

### Analytics not tracking?

1. Check browser console for errors
2. Verify environment variables are set correctly
3. Ensure ad blockers are disabled during testing
4. Check that the GA Measurement ID is correct (format: G-XXXXXXXXXX)

### Events not appearing in GA4?

- It can take 24-48 hours for some events to appear in standard reports
- Check Realtime reports for immediate feedback
- Verify the event structure matches GA4 requirements

## Best Practices

1. **Always track CTAs** - Track all buttons, links, and forms
2. **Use descriptive names** - Make event names clear and searchable
3. **Include context** - Add location/section information to events
4. **Test in dev** - Verify tracking before deploying
5. **Monitor regularly** - Check analytics dashboards weekly
6. **Respect privacy** - Don't track PII without consent

## CLI Commands

```bash
# Install dependencies
npm install

# Run locally (with .env file)
npm run dev

# Build for production
npm run build

# Deploy to Cloudflare Workers
npm run deploy

# Deploy with wrangler
wrangler deploy

# Tail logs
wrangler tail

# Check deployment without deploying
npm run check
```

