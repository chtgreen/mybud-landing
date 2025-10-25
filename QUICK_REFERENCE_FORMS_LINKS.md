# 🚀 Quick Reference: Forms & Links

## ✅ Status: ALL WORKING

---

## 📋 FORMS

### B2B Lead Form
- **Location**: `/pt/b2b`, `/en/b2b`, `/es/b2b`
- **Table**: `b2b_leads` (Supabase)
- **Fields**: name, email, company, message (optional)
- **Fallback**: `comercial@mybud.app`

### Beta Signup Form
- **Location**: Modal on B2C pages (`/pt`, `/en`, `/es`)
- **Table**: `beta_signups` (Supabase)
- **Fields**: email
- **Trigger**: Click any CTA button

---

## 🔗 LINKS

### Shopify Store (Priority Access)
- **URL**: `https://store.mybud.app`
- **UTM**: `?utm_source=lp&utm_medium=modal&utm_campaign=kit_bud`
- **Trigger**: Click "Priority Access" in beta modal

### App Store Links (Coming Soon)
- **iOS**: Placeholder (update when published)
- **Android**: Placeholder (update when published)
- **Component**: `src/react-app/components/ComingSoon.tsx`

---

## 🧪 QUICK TEST

```bash
# Run automated tests
node test-forms-and-links.js
```

**Expected**: 30 tests pass ✅

---

## 📊 ANALYTICS EVENTS

| Event | Where |
|-------|-------|
| `b2b_lead_submitted` | B2B form success |
| `free_waitlist_signup_completed` | Beta signup success |
| `priority_access_clicked` | Shop link click |
| `app_store_interest` | App store badge click |

---

## 🔧 CONFIG

**Supabase**: Configured in `wrangler.json`
- `VITE_SUPABASE_URL` ✅
- `VITE_SUPABASE_ANON_KEY` ✅

**Tables**:
- `b2b_leads` ✅
- `beta_signups` ✅

---

## 📝 TODO WHEN APP PUBLISHES

Update in `src/react-app/components/ComingSoon.tsx`:

```tsx
// iOS (line ~26)
href="https://apps.apple.com/app/mybud/YOUR_APP_ID"

// Android (line ~44)
href="https://play.google.com/store/apps/details?id=com.mybud.app"
```

---

**Last Verified**: 2025-10-21 ✅


