# 🧪 Manual Testing Checklist

Use this checklist to manually verify all forms and links are working in your browser.

---

## 🌐 B2C Landing Page Testing

### Test 1: Beta Signup Form (Free Access)
- [ ] Navigate to: `http://localhost:5173/pt` (or your domain)
- [ ] Click the hero CTA button ("Get your KIT" / "Pegue seu KIT")
- [ ] Modal should open with two options ✅
- [ ] On the RIGHT side, enter your email in "Free Beta Access"
- [ ] Click "Join Waitlist" button
- [ ] Should see success message: "Email registered successfully!" ✅
- [ ] Check PostHog for `free_waitlist_signup_completed` event
- [ ] Check Supabase `beta_signups` table for new entry

**Expected Result**: Email saved to database, success message shown

---

### Test 2: Priority Access (Shop Link)
- [ ] Navigate to: `http://localhost:5173/pt`
- [ ] Click the hero CTA button
- [ ] Modal opens
- [ ] On the LEFT side, click "Priority Access" / "Comprar Kit" button
- [ ] New tab should open to `https://store.mybud.app` ✅
- [ ] Verify URL contains UTM parameters:
  - `?utm_source=lp&utm_medium=modal&utm_campaign=kit_bud`
- [ ] Shopify store should load correctly ✅
- [ ] Check PostHog for `priority_access_clicked` event

**Expected Result**: Shopify store opens in new tab with tracking parameters

---

### Test 3: Multi-language B2C
- [ ] Test in English: `http://localhost:5173/en`
- [ ] Test in Spanish: `http://localhost:5173/es`
- [ ] Test in Portuguese: `http://localhost:5173/pt`
- [ ] Verify modal opens on all languages ✅
- [ ] Verify form works on all languages ✅

**Expected Result**: All languages work identically

---

## 🏢 B2B Landing Page Testing

### Test 4: B2B Lead Form
- [ ] Navigate to: `http://localhost:5173/pt/b2b`
- [ ] Scroll to contact form section
- [ ] Fill in required fields:
  - Name: "Test User"
  - Email: "test@example.com"
  - Company: "Test Company"
- [ ] Optionally add a message
- [ ] Click submit button
- [ ] Should see success message ✅
- [ ] Check PostHog for `b2b_lead_submitted` event
- [ ] Check Supabase `b2b_leads` table for new entry

**Expected Result**: Lead saved to database, success message shown

---

### Test 5: B2B Email Fallback
- [ ] Temporarily disconnect from internet or disable Supabase
- [ ] Fill in B2B form and submit
- [ ] Should see error message
- [ ] Should automatically open email client to `comercial@mybud.app` ✅

**Expected Result**: Falls back to email if submission fails

---

### Test 6: Multi-language B2B
- [ ] Test in English: `http://localhost:5173/en/b2b`
- [ ] Test in Spanish: `http://localhost:5173/es/b2b`
- [ ] Test in Portuguese: `http://localhost:5173/pt/b2b`
- [ ] Verify form works on all languages ✅

**Expected Result**: All languages work identically

---

## 🔗 Link Testing

### Test 7: Hero Secondary CTA (B2C)
- [ ] Navigate to B2C page
- [ ] Click secondary CTA button (if visible)
- [ ] Should scroll to features section smoothly ✅

**Expected Result**: Smooth scroll to features

---

### Test 8: Hero Secondary CTA (B2B)
- [ ] Navigate to B2B page
- [ ] If "media kit" button exists, click it
- [ ] Should open email client to `comercial@mybud.app` ✅

**Expected Result**: Email client opens

---

## 📱 App Store Links (Coming Soon)

### Test 9: App Store Interest Tracking
- [ ] **Note**: App Store links are intentional placeholders
- [ ] Navigate to page with `ComingSoon` component (if visible)
- [ ] Click iOS "App Store" badge
- [ ] Should NOT navigate (href="#")
- [ ] Check PostHog for `app_store_interest` event with `platform: 'ios'`
- [ ] Click Android "Google Play" badge
- [ ] Should NOT navigate (href="#")
- [ ] Check PostHog for `app_store_interest` event with `platform: 'android'`

**Expected Result**: Interest tracked but no navigation (intentional)

---

## 📊 Analytics Verification

### PostHog Events to Check:
1. **B2C Beta Signup**:
   - Event: `free_waitlist_signup_completed`
   - Properties: email, source, channel

2. **B2C Priority Access**:
   - Event: `priority_access_clicked`
   - Properties: source, choice, destination

3. **B2B Lead**:
   - Event: `b2b_lead_submitted`
   - Properties: email, company, has_message, source

4. **App Store Interest**:
   - Event: `app_store_interest`
   - Properties: platform (ios/android)

### How to Check:
1. Open PostHog dashboard
2. Go to "Events" or "Live Events"
3. Filter by event name
4. Verify properties are captured correctly

---

## 🗄️ Database Verification

### Supabase Tables to Check:

1. **beta_signups**:
   - [ ] Email exists
   - [ ] Created_at timestamp is correct
   - [ ] Instagram field is empty (as expected)

2. **b2b_leads**:
   - [ ] Name, email, company are filled
   - [ ] Message is optional (may be null)
   - [ ] Source is "landing"
   - [ ] Created_at timestamp is correct

### How to Check:
1. Open Supabase dashboard
2. Go to "Table Editor"
3. Select the table
4. Verify latest entries match your tests

---

## 🔒 Security Testing

### Test 10: External Links Security
- [ ] Right-click shop link → "Open in new tab"
- [ ] Verify it opens in NEW tab (not same tab) ✅
- [ ] Check page source for `noopener,noreferrer` ✅

**Expected Result**: Links are secure

---

### Test 11: Form Validation
- [ ] Try submitting B2B form with empty fields
- [ ] Should see validation errors ✅
- [ ] Try submitting invalid email format
- [ ] Should see validation error ✅

**Expected Result**: Forms validate input

---

## 🎨 Visual Testing

### Test 12: Modal Appearance
- [ ] Modal opens smoothly with animation ✅
- [ ] Modal can be closed by clicking X ✅
- [ ] Modal can be closed by clicking backdrop ✅
- [ ] Modal can be closed by pressing ESC key ✅

**Expected Result**: Modal works perfectly

---

### Test 13: Responsive Testing
- [ ] Test on mobile device or resize browser to mobile size
- [ ] Forms should be fully functional on mobile ✅
- [ ] Modal should be responsive ✅
- [ ] Buttons should be easily clickable ✅

**Expected Result**: Fully responsive

---

## 📋 Quick Test Sequence (5 minutes)

For a quick verification, do these in order:

1. ✅ Open `http://localhost:5173/pt`
2. ✅ Click hero CTA → Modal opens
3. ✅ Enter email → Submit → Success
4. ✅ Click hero CTA again
5. ✅ Click "Priority Access" → Shopify opens
6. ✅ Open `http://localhost:5173/pt/b2b`
7. ✅ Fill B2B form → Submit → Success
8. ✅ Check PostHog for 3 events
9. ✅ Check Supabase for 2 new entries

**Total Time**: ~5 minutes  
**Expected**: All tests pass ✅

---

## 🐛 Troubleshooting

### If Beta Signup Fails:
1. Check Supabase credentials in `wrangler.json`
2. Check network tab for API errors
3. Verify `beta_signups` table exists
4. Check RLS policies allow INSERT

### If B2B Lead Form Fails:
1. Check Supabase credentials
2. Verify `b2b_leads` table exists
3. Should fallback to email automatically
4. Check browser console for errors

### If Shop Link Doesn't Open:
1. Check popup blocker settings
2. Verify URL in browser console
3. Test directly: `https://store.mybud.app`

### If Analytics Not Tracking:
1. Check PostHog is initialized
2. Check browser console for PostHog errors
3. Verify events in network tab
4. Check PostHog dashboard settings

---

## ✅ Test Results Template

Copy this to track your test results:

```
Date: _______________
Tester: _______________

B2C Tests:
[ ] Beta signup form - PASS / FAIL
[ ] Priority access link - PASS / FAIL
[ ] Multi-language - PASS / FAIL

B2B Tests:
[ ] Lead form - PASS / FAIL
[ ] Email fallback - PASS / FAIL
[ ] Multi-language - PASS / FAIL

Links:
[ ] Shop link - PASS / FAIL
[ ] App store badges - PASS / FAIL (should be placeholders)

Analytics:
[ ] Events tracked - PASS / FAIL

Database:
[ ] Beta signups saved - PASS / FAIL
[ ] B2B leads saved - PASS / FAIL

Overall Status: PASS / FAIL
Notes: _________________________________
```

---

**Created**: 2025-10-21  
**Last Updated**: 2025-10-21

