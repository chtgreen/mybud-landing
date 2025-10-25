-- ============================================================================
-- GRANT FINAL - PERMISSÕES DIRETAS NAS TABELAS
-- ============================================================================

-- Dar ALL permissions para anon e authenticated (simplificar)
GRANT ALL ON public.beta_signups TO anon, authenticated;
GRANT ALL ON public.b2b_leads TO anon, authenticated;

-- Também dar permissão nas sequences (IDs)
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated;

-- Verificar que funcionou
SELECT 
    tablename,
    has_table_privilege('anon', 'public.'||tablename, 'INSERT') as anon_insert,
    has_table_privilege('anon', 'public.'||tablename, 'SELECT') as anon_select,
    has_table_privilege('authenticated', 'public.'||tablename, 'INSERT') as auth_insert,
    has_table_privilege('authenticated', 'public.'||tablename, 'SELECT') as auth_select
FROM pg_tables
WHERE schemaname = 'public' 
AND tablename IN ('beta_signups', 'b2b_leads');


