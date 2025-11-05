# Database Updates Summary - November 2025

## 🎯 Overview

Two critical database updates have been implemented to support new form features on the landing pages.

---

## ✅ Changes Made

### 1. Phone Field Added to B2B/Industry Form
- **Table:** `b2b_leads`
- **New Column:** `phone` (text, required)
- **Reason:** B2B/Industry customers prefer phone contact over email
- **Impact:** Better lead quality and faster response times

### 2. Collective Leads Table Created
- **Table:** `collective_leads` (NEW)
- **Purpose:** Capture leads from collective cultivation landing page
- **Fields:** organization_name, whatsapp, email, plant_count, source
- **Impact:** Enable collective cultivation pilot program signups

---

## 📁 Files Updated

### Frontend Components
- ✅ `src/react-app/components/B2BLeadForm.tsx` - Added phone field to form
- ✅ `src/react-app/components/CollectiveLeadForm.tsx` - Already had whatsapp field

### Translations
- ✅ `src/react-app/locales/pt.json` - Added phonePlaceholder
- ✅ `src/react-app/locales/en.json` - Added phonePlaceholder
- ✅ `src/react-app/locales/es.json` - Added phonePlaceholder

### Database Setup Files
- ✅ `supabase-setup.sql` - Updated with phone field and collective_leads table
- ✅ `add-phone-and-collective-migration.sql` - NEW migration for existing databases
- ✅ `add-collective-leads-table.sql` - NEW migration for collective table only
- ✅ `DATABASE_UPDATE_GUIDE.md` - NEW comprehensive guide

---

## 🗄️ Database Schema Changes

### B2B_LEADS Table (Updated)

**Before:**
```sql
CREATE TABLE public.b2b_leads (
    id uuid PRIMARY KEY,
    name text,
    email text,
    company text,
    message text,
    source text DEFAULT 'landing',
    created_at timestamp,
    updated_at timestamp
);
```

**After:**
```sql
CREATE TABLE public.b2b_leads (
    id uuid PRIMARY KEY,
    name text,
    email text,
    phone text,              -- ← NEW FIELD
    company text,
    message text,
    source text DEFAULT 'landing',
    created_at timestamp,
    updated_at timestamp
);
```

**New Index:**
- `idx_b2b_leads_phone` - For fast phone lookups

---

### COLLECTIVE_LEADS Table (New)

```sql
CREATE TABLE public.collective_leads (
    id uuid PRIMARY KEY,
    organization_name text NOT NULL,
    whatsapp text NOT NULL,
    email text NOT NULL,
    plant_count text NOT NULL,
    source text DEFAULT 'collective_landing' NOT NULL,
    created_at timestamp NOT NULL,
    updated_at timestamp NOT NULL
);
```

**Indexes:**
- `idx_collective_leads_email`
- `idx_collective_leads_organization`
- `idx_collective_leads_created_at`
- `idx_collective_leads_source`

**RLS Policies:**
- Anonymous users can INSERT (submit forms)
- Authenticated users can SELECT (read leads)

---

## 🚀 Deployment Steps

### For Existing Databases (RECOMMENDED):

1. **Open Supabase SQL Editor**
   - Go to: https://supabase.com/dashboard/project/YOUR_PROJECT/sql

2. **Run Migration Script**
   - Open file: `add-phone-and-collective-migration.sql`
   - Copy all contents
   - Paste into SQL Editor
   - Click "Run"
   - Wait ~30 seconds

3. **Verify Changes**
   ```sql
   -- Check phone field exists
   SELECT column_name FROM information_schema.columns 
   WHERE table_name = 'b2b_leads' AND column_name = 'phone';
   
   -- Check collective_leads table exists
   SELECT tablename FROM pg_tables WHERE tablename = 'collective_leads';
   ```

4. **Test Forms**
   - Test B2B form: `/b2b` (should have phone field)
   - Test Collective form: `/collective` (should work without 404)

---

### For Fresh Database Setup:

1. **Run Complete Setup**
   - Open file: `supabase-setup.sql`
   - Run entire file in Supabase SQL Editor
   - Wait 2-3 minutes

2. **Verify All Tables**
   ```sql
   SELECT tablename FROM pg_tables 
   WHERE tablename IN ('beta_signups', 'b2b_leads', 'collective_leads');
   ```

---

## 🧪 Testing Checklist

### B2B/Industry Form Test
- [ ] Navigate to `/b2b` or `/industry`
- [ ] Verify phone field is visible and required
- [ ] Fill all fields: name, email, **phone**, company, message
- [ ] Submit form
- [ ] Check success message appears
- [ ] Verify lead in database:
  ```sql
  SELECT * FROM b2b_leads ORDER BY created_at DESC LIMIT 1;
  ```
- [ ] Confirm phone field is populated

### Collective Form Test
- [ ] Navigate to `/collective`
- [ ] Verify form is visible
- [ ] Fill all fields: organization_name, whatsapp, plant_count, email
- [ ] Submit form
- [ ] Check success message appears
- [ ] Verify lead in database:
  ```sql
  SELECT * FROM collective_leads ORDER BY created_at DESC LIMIT 1;
  ```
- [ ] Confirm all fields are populated

---

## 📊 Analytics Tracking

### B2B Form Submission
**Tracked with phone data:**
```javascript
trackFormSubmission('B2B Lead Form', {
  email,
  phone,        // ← NEW
  company,
  name,
  has_message: Boolean(message),
  source: 'landing_final_cta',
  conversion_type: 'b2b_lead',
  form_type: 'b2b_partnership'
}, true);
```

### Collective Form Submission
**Already tracking:**
```javascript
trackFormSubmission('Collective Lead Form', {
  email,
  organization_name,
  whatsapp,
  plant_count,
  source: 'collective_final_cta',
  conversion_type: 'collective_pilot_lead',
  form_type: 'collective_pilot'
}, true);
```

---

## 🔍 Monitoring Queries

### Daily Lead Summary
```sql
-- B2B leads with phone numbers
SELECT 
    DATE(created_at) as date,
    COUNT(*) as total_leads,
    COUNT(phone) as leads_with_phone,
    ROUND(COUNT(phone)::numeric / COUNT(*)::numeric * 100, 2) as phone_rate
FROM b2b_leads
GROUP BY DATE(created_at)
ORDER BY date DESC
LIMIT 30;

-- Collective leads by plant count
SELECT 
    plant_count,
    COUNT(*) as total,
    ROUND(COUNT(*)::numeric / SUM(COUNT(*)) OVER () * 100, 2) as percentage
FROM collective_leads
GROUP BY plant_count
ORDER BY total DESC;
```

### Recent Leads (All Forms)
```sql
-- Last 10 leads from all sources
SELECT 'B2B' as type, name as identifier, email, phone, created_at FROM b2b_leads
UNION ALL
SELECT 'Collective' as type, organization_name, email, whatsapp as phone, created_at FROM collective_leads
UNION ALL
SELECT 'Beta' as type, full_name, email, instagram as phone, created_at FROM beta_signups
ORDER BY created_at DESC
LIMIT 10;
```

---

## 🐛 Common Issues & Solutions

### Issue: "column phone does not exist"
**Solution:** Run the migration script `add-phone-and-collective-migration.sql`

### Issue: "table collective_leads does not exist"
**Solution:** Run the migration script `add-phone-and-collective-migration.sql`

### Issue: Form submits but phone is NULL in database
**Solution:** 
- Check frontend form is using latest version
- Verify phone field is in the insert statement
- Check browser console for JavaScript errors

### Issue: RLS policy error "new row violates row-level security"
**Solution:** 
```sql
-- Fix RLS policies
DROP POLICY IF EXISTS "Allow anonymous inserts on b2b_leads" ON public.b2b_leads;
CREATE POLICY "Allow anonymous inserts on b2b_leads"
ON public.b2b_leads FOR INSERT TO anon WITH CHECK (true);

DROP POLICY IF EXISTS "Allow anonymous inserts on collective_leads" ON public.collective_leads;
CREATE POLICY "Allow anonymous inserts on collective_leads"
ON public.collective_leads FOR INSERT TO anon WITH CHECK (true);
```

---

## 📝 Rollback (If Needed)

### Remove phone field from b2b_leads:
```sql
ALTER TABLE public.b2b_leads DROP COLUMN IF EXISTS phone;
DROP INDEX IF EXISTS idx_b2b_leads_phone;
```

### Remove collective_leads table:
```sql
DROP TABLE IF EXISTS public.collective_leads CASCADE;
```

**Note:** Only rollback if absolutely necessary. These changes are designed to improve lead quality.

---

## 🎯 Success Metrics

After deployment, monitor:

1. **Form Completion Rate**
   - B2B form with phone field (target: >80% completion)
   - Collective form (target: >70% completion)

2. **Phone Capture Rate**
   - % of B2B leads with phone numbers (target: 100%)

3. **Lead Quality**
   - Time to first contact (should improve with phone numbers)
   - Conversion rate from lead to customer

4. **Error Rate**
   - 404 errors on /collective (should be 0%)
   - Form submission errors (should be <1%)

---

## 📞 Support

If you encounter issues:

1. Check `DATABASE_UPDATE_GUIDE.md` for detailed troubleshooting
2. Review `COMO_USAR_SETUP_SQL.md` for general database setup
3. Check Supabase logs for specific error messages
4. Verify RLS policies are configured correctly

---

## 🎉 Summary

**What Changed:**
- ✅ B2B form now captures phone numbers
- ✅ Collective form now works (table created)
- ✅ All translations updated (PT, EN, ES)
- ✅ Database schema updated with proper indexes and RLS

**Action Required:**
- ✅ Run migration script: `add-phone-and-collective-migration.sql`
- ✅ Test both forms
- ✅ Monitor leads in database
- ✅ Verify analytics tracking

**Time to Deploy:** ~5 minutes
**Risk Level:** Low (backward compatible, no data loss)

---

**Last Updated:** November 5, 2025
**Version:** 2.0

