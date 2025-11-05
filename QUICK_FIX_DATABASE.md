# 🚨 QUICK FIX - Database Update

## Problem
- ❌ Collective form returns 404 error
- ❌ B2B form missing phone field

## Solution (2 minutes)

### Step 1: Open Supabase
Go to: https://supabase.com/dashboard/project/YOUR_PROJECT/sql

### Step 2: Run This Script
Open and run: **`add-phone-and-collective-migration.sql`**

### Step 3: Test
- Test B2B form: http://localhost:5173/b2b
- Test Collective form: http://localhost:5173/collective

## Done! ✅

Both forms should now work perfectly.

---

## What It Does
- ✅ Adds `phone` field to `b2b_leads` table
- ✅ Creates `collective_leads` table
- ✅ Sets up all permissions and indexes
- ✅ Keeps your existing data safe

---

## Need More Help?
See: `DATABASE_UPDATE_GUIDE.md`

