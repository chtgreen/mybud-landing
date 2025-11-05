-- ============================================================================
-- FIX RLS PERMISSIONS - 401 UNAUTHORIZED ERROR
-- ============================================================================
-- This fixes the "401 Unauthorized" error when submitting forms
-- The issue: RLS policies exist but anon role doesn't have table access
-- ============================================================================

-- ============================================================================
-- 1. GRANT TABLE ACCESS TO ANON ROLE
-- ============================================================================

-- Grant INSERT permission to anon role on b2b_leads
GRANT INSERT ON public.b2b_leads TO anon;

-- Grant INSERT permission to anon role on collective_leads
GRANT INSERT ON public.collective_leads TO anon;

-- Grant INSERT permission to anon role on beta_signups
GRANT INSERT ON public.beta_signups TO anon;

-- Note: No sequence grants needed - tables use UUID (gen_random_uuid())

-- ============================================================================
-- 2. VERIFY PERMISSIONS
-- ============================================================================

-- Check table permissions for anon role
SELECT 
    table_name,
    privilege_type
FROM information_schema.table_privileges
WHERE grantee = 'anon'
AND table_schema = 'public'
AND table_name IN ('b2b_leads', 'collective_leads', 'beta_signups')
ORDER BY table_name, privilege_type;

-- Check RLS policies
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd
FROM pg_policies
WHERE tablename IN ('b2b_leads', 'collective_leads', 'beta_signups')
ORDER BY tablename, policyname;

-- ============================================================================
-- ✅ PERMISSIONS FIXED!
-- ============================================================================

-- Now try submitting the forms again. They should work!

