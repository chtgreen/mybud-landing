# Database Update Guide - Critical Updates

## ⚠️ Action Required

The landing page now requires TWO critical database updates:

1. **NEW: Phone field** in B2B/Industry form (`b2b_leads` table)
2. **NEW: Collective Leads table** for collective cultivation form

You need to update your Supabase database to fix errors you're seeing.

---

## 🚨 Errors You Might See

### Collective Form Error:
```
POST https://xtgypohwmdpavazjmhcz.supabase.co/rest/v1/collective_leads 404 (Not Found)
```
This happens because the `collective_leads` table doesn't exist yet.

### B2B/Industry Form Error:
```
column "phone" of relation "b2b_leads" does not exist
```
This happens because the `phone` field was added to the B2B form but doesn't exist in the database yet.

---

## 📋 Three Options to Fix This

### Option 1: Fresh Database Setup (Recommended for new projects)

If you're setting up the database for the first time, use the complete setup file:

1. Go to your [Supabase SQL Editor](https://supabase.com/dashboard/project/_/sql)
2. Open the file: `supabase-setup.sql`
3. Copy all contents and paste into Supabase SQL Editor
4. Click "Run" button
5. Wait 2-3 minutes for completion

This will create ALL tables with latest schema:
- ✅ `beta_signups` (B2C newsletter/beta signups)
- ✅ `b2b_leads` (B2B commercial contacts) **← NOW WITH PHONE FIELD**
- ✅ `collective_leads` (Collective cultivation leads) **← NEW TABLE**

---

### Option 2: Complete Migration (Recommended for existing databases) ⭐

If you already have database tables, use this migration to update everything:

1. Go to your [Supabase SQL Editor](https://supabase.com/dashboard/project/_/sql)
2. Open the file: `add-phone-and-collective-migration.sql`
3. Copy all contents and paste into Supabase SQL Editor
4. Click "Run" button
5. Wait ~30 seconds for completion

This will:
- ✅ Add `phone` field to existing `b2b_leads` table
- ✅ Create `collective_leads` table with all necessary configurations
- ✅ Create all indexes and RLS policies
- ✅ Keep your existing data intact

---

### Option 3: Individual Migrations (If you only need one specific update)

#### Only need collective_leads table?
Use file: `add-collective-leads-table.sql`

#### Only need phone field in b2b_leads?
Run this SQL directly:
```sql
ALTER TABLE public.b2b_leads ADD COLUMN IF NOT EXISTS phone text;
CREATE INDEX IF NOT EXISTS idx_b2b_leads_phone ON public.b2b_leads(phone);
```

---

## 🔍 What Gets Updated/Created

### 1. B2B_LEADS Table Updates

**New Field:**
- `phone` - Contact phone/WhatsApp (text, required in form)

**New Index:**
- `idx_b2b_leads_phone` - For fast phone lookups

### 2. COLLECTIVE_LEADS Table (New)

**Fields:**
- `id` - Unique UUID (auto-generated)
- `organization_name` - Name of the collective/association (required)
- `whatsapp` - Contact WhatsApp number (required)
- `email` - Contact email (required)
- `plant_count` - Number of plants ("50-100", "100-200", etc.) (required)
- `source` - Tracking source (default: "collective_landing")
- `created_at` - Timestamp of creation
- `updated_at` - Timestamp of last update (auto-updated)

**Security:**
- ✅ Row Level Security (RLS) enabled
- ✅ Anonymous users can INSERT (submit forms)
- ✅ Authenticated users can SELECT (read data)

**Performance:**
- ✅ Indexed on: email, organization_name, created_at, source

---

## ✅ Verification

After running the SQL script, you should see:

1. **Table created** - Check in Supabase Table Editor
2. **Policies active** - Check in Authentication → Policies
3. **Test data** - 2 test records inserted automatically

### Quick Test Query

Run this in Supabase SQL Editor to verify:

```sql
SELECT * FROM public.collective_leads ORDER BY created_at DESC;
```

You should see 2 test records.

---

## 🧪 Test the Forms

After database setup, test both forms:

### Test B2B/Industry Form:
1. Go to: `/b2b` or `/pt/b2b` or `/industry`
2. Scroll to the contact form at the bottom
3. Fill out all fields (including the **NEW** phone field):
   - Nome
   - E-mail corporativo
   - **Telefone / WhatsApp** ← NEW!
   - Empresa
   - Mensagem (opcional)
4. Click "Agendar conversa"
5. You should see: "Recebido! Em até 1 dia útil alguém do time Mybud entra em contato."

### Test Collective Form:
1. Go to: `/collective` or `/pt/collective`
2. Scroll to the "Quero Participar" form at the bottom
3. Fill out all fields:
   - Nome da Organização
   - WhatsApp
   - Quantidade de Plantas
   - Email
4. Click "Quero Participar do Programa Piloto"
5. You should see: "Recebido! Em até 1 dia útil alguém do time Mybud entra em contato."

---

## 🐛 Troubleshooting

### Still getting 404 error?

1. **Check table exists**:
   ```sql
   SELECT tablename FROM pg_tables WHERE tablename = 'collective_leads';
   ```
   Should return 1 row.

2. **Check RLS policies**:
   ```sql
   SELECT policyname FROM pg_policies WHERE tablename = 'collective_leads';
   ```
   Should return 2 policies:
   - "Allow anonymous inserts on collective_leads"
   - "Allow authenticated read on collective_leads"

3. **Check Supabase API URL**: Make sure your `.env.local` has the correct `VITE_SUPABASE_URL`

### Permission denied error?

This means RLS is blocking the insert. Run:

```sql
-- Fix RLS policies
DROP POLICY IF EXISTS "Allow anonymous inserts on collective_leads" ON public.collective_leads;
CREATE POLICY "Allow anonymous inserts on collective_leads"
ON public.collective_leads
FOR INSERT
TO anon
WITH CHECK (true);
```

---

## 📊 View Your Leads

After users start submitting forms:

### View B2B leads (with phone):
```sql
SELECT 
    name,
    email,
    phone,
    company,
    message,
    source,
    created_at
FROM public.b2b_leads
ORDER BY created_at DESC;
```

### View Collective leads:
```sql
SELECT 
    organization_name,
    email,
    whatsapp,
    plant_count,
    source,
    created_at
FROM public.collective_leads
ORDER BY created_at DESC;
```

---

## 🔗 Related Files

- `supabase-setup.sql` - Complete database setup (all tables, latest schema)
- `add-phone-and-collective-migration.sql` - Migration script (phone + collective) **← RECOMMENDED**
- `add-collective-leads-table.sql` - Migration script (collective_leads only)
- `src/react-app/components/B2BLeadForm.tsx` - B2B form component (now with phone)
- `src/react-app/components/CollectiveLeadForm.tsx` - Collective form component
- `COMO_USAR_SETUP_SQL.md` - General database setup guide

---

## ✨ Summary

**Quick Fix for Existing Databases:**
1. Open Supabase SQL Editor
2. Run `add-phone-and-collective-migration.sql` **← RECOMMENDED**
3. Verify with test queries
4. Test both forms on the website

**Fresh Setup:**
1. Run `supabase-setup.sql` for complete setup

**Time Required:** 2-5 minutes

**Impact:** 
- ✅ Enables phone capture in B2B/Industry form
- ✅ Fixes 404 error on collective form
- ✅ Enables collective lead capture

---

**Need help?** Check `COMO_USAR_SETUP_SQL.md` for detailed Supabase setup instructions.

