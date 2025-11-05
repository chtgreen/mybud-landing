-- ============================================================================
-- FIX: PERMISSÕES DO SCHEMA PUBLIC
-- ============================================================================
-- O problema é que o role "anon" não tem permissão no schema public
-- ============================================================================

-- 1. Dar permissão de USAGE no schema public para anon
GRANT USAGE ON SCHEMA public TO anon;
GRANT USAGE ON SCHEMA public TO authenticated;

-- 2. Dar permissão de INSERT nas tabelas para anon
GRANT INSERT ON public.beta_signups TO anon;
GRANT INSERT ON public.b2b_leads TO anon;

-- 3. Dar permissão de SELECT nas tabelas para authenticated
GRANT SELECT ON public.beta_signups TO authenticated;
GRANT SELECT ON public.b2b_leads TO authenticated;

-- 4. Garantir que RLS está habilitado
ALTER TABLE public.beta_signups ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.b2b_leads ENABLE ROW LEVEL SECURITY;

-- 5. Garantir que as políticas RLS existem (não vai dar erro se já existirem)
DO $$
BEGIN
    -- Política para beta_signups INSERT
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'beta_signups' 
        AND policyname = 'Allow anonymous inserts on beta_signups'
    ) THEN
        CREATE POLICY "Allow anonymous inserts on beta_signups"
        ON public.beta_signups FOR INSERT TO anon WITH CHECK (true);
    END IF;

    -- Política para b2b_leads INSERT
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'b2b_leads' 
        AND policyname = 'Allow anonymous inserts on b2b_leads'
    ) THEN
        CREATE POLICY "Allow anonymous inserts on b2b_leads"
        ON public.b2b_leads FOR INSERT TO anon WITH CHECK (true);
    END IF;

    -- Política para beta_signups SELECT
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'beta_signups' 
        AND policyname = 'Allow authenticated read on beta_signups'
    ) THEN
        CREATE POLICY "Allow authenticated read on beta_signups"
        ON public.beta_signups FOR SELECT TO authenticated USING (true);
    END IF;

    -- Política para b2b_leads SELECT
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'b2b_leads' 
        AND policyname = 'Allow authenticated read on b2b_leads'
    ) THEN
        CREATE POLICY "Allow authenticated read on b2b_leads"
        ON public.b2b_leads FOR SELECT TO authenticated USING (true);
    END IF;
END $$;

-- ============================================================================
-- VERIFICAÇÃO FINAL
-- ============================================================================

-- Ver permissões do schema
SELECT 
    'SCHEMA PERMISSIONS' as tipo,
    nspname as schema_name,
    pg_catalog.has_schema_privilege('anon', nspname, 'USAGE') as anon_has_usage,
    pg_catalog.has_schema_privilege('authenticated', nspname, 'USAGE') as auth_has_usage
FROM pg_namespace
WHERE nspname = 'public';

-- Ver permissões das tabelas
SELECT 
    'TABLE PERMISSIONS' as tipo,
    tablename,
    pg_catalog.has_table_privilege('anon', schemaname||'.'||tablename, 'INSERT') as anon_can_insert,
    pg_catalog.has_table_privilege('authenticated', schemaname||'.'||tablename, 'SELECT') as auth_can_select
FROM pg_tables
WHERE schemaname = 'public' 
AND tablename IN ('beta_signups', 'b2b_leads');

-- Ver políticas RLS
SELECT 
    'RLS POLICIES' as tipo,
    tablename,
    policyname,
    roles::text
FROM pg_policies
WHERE schemaname = 'public'
AND tablename IN ('beta_signups', 'b2b_leads')
ORDER BY tablename, policyname;

-- ============================================================================
-- RESULTADO ESPERADO:
-- ============================================================================
-- 
-- SCHEMA PERMISSIONS:
-- public | true | true
--
-- TABLE PERMISSIONS:
-- beta_signups | true | true
-- b2b_leads    | true | true
--
-- RLS POLICIES:
-- 4 políticas listadas
--
-- ============================================================================





