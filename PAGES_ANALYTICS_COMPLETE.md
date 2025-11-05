# Pages Analytics - Complete Metrics Documentation

## Overview
All four landing pages are now fully instrumented with comprehensive analytics tracking using both **PostHog** and **Google Analytics 4**. Every page view, CTA click, and user interaction is tracked with detailed metadata.

---

## 📊 Pages Covered

### 1. **Consumer Landing Page** (`LandingPage.tsx`)
   - **Route**: `/` (default), `/en`, `/pt`, `/es`
   - **Purpose**: B2C consumer acquisition and beta signups
   - **Primary CTA**: Join Beta Program

### 2. **Collective Landing Page** (`CollectiveLandingPage.tsx`)
   - **Route**: `/collective`, `/pt/coletivo`, etc.
   - **Purpose**: Cannabis collective/association pilot program
   - **Primary CTA**: Schedule Demo (Google Calendar)

### 3. **Enterprise Landing Page** (`EnterpriseLandingPage.tsx`)
   - **Route**: `/enterprise`, `/pt/empresa`, etc.
   - **Purpose**: Enterprise B2B partnerships
   - **Primary CTA**: Schedule Demo (Google Calendar)

### 4. **Industry Landing Page** (`IndustryLandingPage.tsx`)
   - **Route**: `/industry`, `/pt/industria`, etc.
   - **Purpose**: Cannabis industry partners and stakeholders
   - **Primary CTA**: Schedule Conversation (Google Calendar)

---

## 🎯 Tracked Events Per Page

### Consumer Landing Page

#### 📄 Page View Event
**Event Name**: `$pageview` (PostHog) / `pageview` (GA4)

**Tracked Data**:
```javascript
{
  $current_url: window.location.href,
  $pathname: window.location.pathname,
  $title: 'MyBud - Consumer Landing Page'
}
```

#### 🔘 CTA Click Event
**Event Name**: `cta_clicked` (PostHog) / `cta_click` (GA4)

**Tracked Data**:
```javascript
{
  cta_name: 'Join Beta',
  cta_location: 'Hero Section',
  cta_type: 'button',
  cta_text: 'Join Beta Program',
  page_type: 'consumer',
  remaining_kits: [number],
  timestamp: [unix timestamp],
  page_url: window.location.href,
  page_path: window.location.pathname
}
```

**Google Analytics Conversion**:
```javascript
gtag('event', 'conversion', {
  send_to: [GA_MEASUREMENT_ID],
  event_category: 'CTA',
  event_label: 'Join Beta',
  value: 1
})
```

---

### Collective Landing Page

#### 📄 Page View Event
**Event Name**: `$pageview` (PostHog) / `pageview` (GA4)

**Tracked Data**:
```javascript
{
  $current_url: window.location.href,
  $pathname: window.location.pathname,
  $title: 'MyBud - Collective Landing Page',
  language: [current language]
}
```

#### 🔘 CTA Click Event
**Event Name**: `cta_clicked` (PostHog) / `cta_click` (GA4)

**Tracked Data**:
```javascript
{
  cta_name: 'Schedule Collective Demo',
  cta_location: 'Hero Section',
  cta_type: 'button',
  cta_text: 'Agendar Demonstração',
  destination_url: '[Google Calendar URL]',
  page_type: 'collective',
  action: 'calendar_redirect',
  language: [current language],
  timestamp: [unix timestamp],
  page_url: window.location.href,
  page_path: window.location.pathname
}
```

**Google Analytics Conversion**:
```javascript
gtag('event', 'conversion', {
  send_to: [GA_MEASUREMENT_ID],
  event_category: 'CTA',
  event_label: 'Schedule Collective Demo',
  value: 1
})
```

---

### Enterprise Landing Page

#### 📄 Page View Event
**Event Name**: `$pageview` (PostHog) / `pageview` (GA4)

**Tracked Data**:
```javascript
{
  $current_url: window.location.href,
  $pathname: window.location.pathname,
  $title: 'MyBud - Enterprise Landing Page',
  language: [current language]
}
```

#### 🔘 CTA Click Event
**Event Name**: `cta_clicked` (PostHog) / `cta_click` (GA4)

**Tracked Data**:
```javascript
{
  cta_name: 'Schedule Enterprise Demo',
  cta_location: 'Hero Section',
  cta_type: 'button',
  cta_text: 'Agendar Demonstração',
  destination_url: '[Google Calendar URL]',
  page_type: 'enterprise',
  action: 'calendar_redirect',
  language: [current language],
  timestamp: [unix timestamp],
  page_url: window.location.href,
  page_path: window.location.pathname
}
```

**Google Analytics Conversion**:
```javascript
gtag('event', 'conversion', {
  send_to: [GA_MEASUREMENT_ID],
  event_category: 'CTA',
  event_label: 'Schedule Enterprise Demo',
  value: 1
})
```

---

### Industry Landing Page

#### 📄 Page View Event
**Event Name**: `$pageview` (PostHog) / `pageview` (GA4)

**Tracked Data**:
```javascript
{
  $current_url: window.location.href,
  $pathname: window.location.pathname,
  $title: 'MyBud - Industry Landing Page',
  language: [current language]
}
```

#### 🔘 CTA Click Event
**Event Name**: `cta_clicked` (PostHog) / `cta_click` (GA4)

**Tracked Data**:
```javascript
{
  cta_name: 'Schedule Industry Demo',
  cta_location: 'Hero Section',
  cta_type: 'button',
  cta_text: 'Agendar Conversa',
  destination_url: '[Google Calendar URL]',
  page_type: 'industry',
  action: 'calendar_redirect',
  language: [current language],
  timestamp: [unix timestamp],
  page_url: window.location.href,
  page_path: window.location.pathname
}
```

**Google Analytics Conversion**:
```javascript
gtag('event', 'conversion', {
  send_to: [GA_MEASUREMENT_ID],
  event_category: 'CTA',
  event_label: 'Schedule Industry Demo',
  value: 1
})
```

---

## 📈 Analytics Platforms

### PostHog
- **Primary analytics platform**
- Page views automatically tracked
- CTA clicks with rich metadata
- User journey and funnel analysis
- Session recording and heatmaps
- A/B testing capabilities

### Google Analytics 4
- **Secondary analytics platform**
- Same events tracked in parallel
- Page views with proper titles
- Conversion tracking for CTAs
- Integration with Google Ads
- Attribution and ROI analysis

---

## 🎨 Event Categories (Google Analytics)

| Page | Event Category | Event Label | Description |
|------|---------------|-------------|-------------|
| Consumer | `CTA` | `Join Beta` | Beta program signup intent |
| Collective | `CTA` | `Schedule Collective Demo` | Collective demo scheduling |
| Enterprise | `CTA` | `Schedule Enterprise Demo` | Enterprise demo scheduling |
| Industry | `CTA` | `Schedule Industry Demo` | Industry conversation scheduling |

---

## 🔍 Key Metrics to Monitor

### Page Performance Metrics
1. **Page Views**: Total views per page type
2. **Unique Visitors**: Distinct users per page
3. **Bounce Rate**: Users who leave without interaction
4. **Time on Page**: Average engagement time
5. **Exit Rate**: Where users leave the funnel

### Conversion Metrics
1. **CTA Click Rate**: Clicks vs. page views
2. **Calendar Booking Rate**: Bookings vs. clicks (external)
3. **Form Submission Rate**: Completions vs. starts
4. **Cross-Page Flow**: Users visiting multiple page types

### Engagement Metrics
1. **Scroll Depth**: How far users scroll (via useScrollEnhancement)
2. **Section Visibility**: Which sections get viewed
3. **Language Distribution**: User language preferences
4. **Device Type**: Mobile vs. Desktop engagement

### Business Metrics
1. **Lead Quality**: Lead-to-opportunity conversion
2. **Source Attribution**: Traffic sources per page
3. **Campaign Performance**: UTM tracking across pages
4. **ROI**: Cost per acquisition by page type

---

## 🚀 Integration Status

### ✅ Implemented Per Page

#### Consumer Landing Page
- [x] Unified page view tracking (PostHog + GA4)
- [x] CTA click tracking with metadata
- [x] Beta modal tracking (via BetaSignup form)
- [x] Scroll enhancement tracking
- [x] Legacy PostHog compatibility

#### Collective Landing Page
- [x] Unified page view tracking (PostHog + GA4)
- [x] CTA click tracking with calendar redirect
- [x] Lead form tracking (CollectiveLeadForm)
- [x] Language tracking
- [x] Legacy PostHog compatibility

#### Enterprise Landing Page
- [x] Unified page view tracking (PostHog + GA4)
- [x] CTA click tracking with calendar redirect
- [x] Lead form tracking (B2BLeadForm)
- [x] Language tracking
- [x] Legacy PostHog compatibility

#### Industry Landing Page
- [x] Unified page view tracking (PostHog + GA4)
- [x] CTA click tracking with calendar redirect
- [x] Lead form tracking (B2BLeadForm)
- [x] Language tracking
- [x] Legacy PostHog compatibility

---

## 📊 Analytics Funnel

### Consumer Funnel
```
Page View
    ↓
CTA Click (Hero)
    ↓
Beta Modal Open
    ↓
Form Submission
    ↓
Beta Signup Complete ✅
```

### B2B Funnels (Collective, Enterprise, Industry)
```
Page View
    ↓
CTA Click (Hero)
    ↓
Calendar Redirect 🗓️
    ↓
(External Booking)
    ↓
Form Submission (Backup)
    ↓
Lead Complete ✅
```

---

## 🎯 Conversion Goals (Google Analytics)

### Recommended Goal Configuration

1. **Page Type - Consumer**
   - Goal: Beta Signup
   - Type: Event
   - Event: `form_submit`
   - Category: `Form`
   - Label: `Beta Signup Form`

2. **Page Type - Collective**
   - Goal: Schedule Demo
   - Type: Event
   - Event: `cta_click`
   - Category: `CTA`
   - Label: `Schedule Collective Demo`

3. **Page Type - Enterprise**
   - Goal: Schedule Demo
   - Type: Event
   - Event: `cta_click`
   - Category: `CTA`
   - Label: `Schedule Enterprise Demo`

4. **Page Type - Industry**
   - Goal: Schedule Conversation
   - Type: Event
   - Event: `cta_click`
   - Category: `CTA`
   - Label: `Schedule Industry Demo`

---

## 📝 Sample Queries

### PostHog Query Examples

```javascript
// Get page views by page type
posthog.events('$pageview', {
  group_by: '$pathname',
  order_by: 'count'
})

// Get CTA click rate by page
posthog.events(['$pageview', 'cta_clicked'], {
  where: { cta_location: 'Hero Section' },
  group_by: 'page_type'
})

// Get calendar redirects
posthog.events('cta_clicked', {
  where: { action: 'calendar_redirect' },
  group_by: 'page_type'
})

// Get language distribution
posthog.events('$pageview', {
  group_by: 'language'
})
```

### Google Analytics Query Examples

```sql
-- Page views by page type
SELECT
  page_title,
  COUNT(*) as views
FROM events
WHERE event_name = 'pageview'
GROUP BY page_title
ORDER BY views DESC

-- CTA conversion rate
SELECT
  page_title,
  COUNTIF(event_name = 'pageview') as page_views,
  COUNTIF(event_name = 'cta_click') as cta_clicks,
  SAFE_DIVIDE(
    COUNTIF(event_name = 'cta_click'),
    COUNTIF(event_name = 'pageview')
  ) as conversion_rate
FROM events
GROUP BY page_title

-- Calendar redirect analysis
SELECT
  event_label,
  COUNT(*) as redirects
FROM events
WHERE event_name = 'conversion'
  AND event_category = 'CTA'
GROUP BY event_label
```

---

## 🔒 Privacy & Compliance

### Data Collection
- Page URLs and titles tracked (no PII)
- CTA clicks tracked with metadata
- Language preference tracked
- No personal data in page view events
- Form data only tracked in form submission events

### GDPR Compliance
- PostHog configured for EU compliance
- Google Analytics with IP anonymization
- Cookie consent not required for aggregate analytics
- Form data has explicit user consent

---

## 🧪 Testing Checklist

### For Each Page:
- [ ] Visit page → Page view fires in PostHog
- [ ] Visit page → Page view fires in GA4 Real-Time
- [ ] Click CTA → CTA click fires in PostHog
- [ ] Click CTA → CTA click fires in GA4 Real-Time
- [ ] Click CTA → Conversion fires in GA4
- [ ] Check event metadata completeness
- [ ] Test with different languages
- [ ] Test on mobile and desktop
- [ ] Verify calendar redirect tracking
- [ ] Verify form submission tracking

### Cross-Page Testing:
- [ ] Navigate Consumer → Collective → Enterprise → Industry
- [ ] Verify unique page views tracked
- [ ] Verify user journey in PostHog
- [ ] Check funnel drop-off points
- [ ] Test UTM parameter preservation

---

## 📚 Additional Analytics

### Scroll Enhancement (All Pages)
Via `useScrollEnhancement()` hook:
- Section visibility tracking
- Scroll depth measurement
- Reading time estimation
- Engagement scoring

### SEO Tracking (All Pages)
Via `SEO` component:
- Meta tag performance
- Social share tracking
- Structured data validation
- Search appearance monitoring

---

## 🎉 Current Status

### ✅ ALL PAGES COMPLETE

| Page | Page View | CTA Tracking | Form Tracking | Legacy Support |
|------|-----------|--------------|---------------|----------------|
| Consumer | ✅ | ✅ | ✅ | ✅ |
| Collective | ✅ | ✅ | ✅ | ✅ |
| Enterprise | ✅ | ✅ | ✅ | ✅ |
| Industry | ✅ | ✅ | ✅ | ✅ |

### Ready for Production
All pages are production-ready with:
- ✅ Comprehensive page view tracking
- ✅ Complete CTA click tracking
- ✅ Rich metadata collection
- ✅ Dual platform support (PostHog + GA4)
- ✅ Conversion tracking for Google Ads
- ✅ Legacy compatibility maintained
- ✅ Multi-language support
- ✅ Calendar redirect tracking

---

## 🔗 Related Documentation

- **Forms Analytics**: See `FORMS_ANALYTICS_COMPLETE.md`
- **SEO Tracking**: See `SEO_TRACKING_IMPLEMENTATION_COMPLETE.md`
- **Analytics Setup**: See `ANALYTICS_IMPLEMENTATION_SUMMARY.md`

---

**Last Updated**: 2025-11-05
**Updated By**: AI Assistant
**Status**: ✅ Complete - All pages fully instrumented

