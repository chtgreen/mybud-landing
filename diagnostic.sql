-- ============================================================================
-- DIAGNÓSTICO COMPLETO DO SUPABASE
-- ============================================================================
-- Execute este script no Supabase SQL Editor para ver o que está configurado
-- ============================================================================

-- 1. Verificar se as tabelas existem
SELECT 
    'TABELAS' as tipo,
    schemaname,
    tablename,
    tableowner,
    CASE 
        WHEN tablename IN ('beta_signups', 'b2b_leads') THEN '✅'
        ELSE '❌'
    END as status
FROM pg_tables
WHERE schemaname = 'public'
AND tablename IN ('beta_signups', 'b2b_leads')
ORDER BY tablename;

-- 2. Verificar se RLS está habilitado
SELECT 
    'RLS STATUS' as tipo,
    schemaname,
    tablename,
    CASE 
        WHEN rowsecurity = true THEN '✅ HABILITADO'
        ELSE '❌ DESABILITADO'
    END as rls_status
FROM pg_tables
WHERE schemaname = 'public'
AND tablename IN ('beta_signups', 'b2b_leads')
ORDER BY tablename;

-- 3. Verificar políticas RLS existentes
SELECT 
    'POLÍTICAS RLS' as tipo,
    schemaname,
    tablename,
    policyname,
    CASE 
        WHEN roles::text LIKE '%anon%' THEN '✅ ANON'
        WHEN roles::text LIKE '%authenticated%' THEN '✅ AUTH'
        ELSE '❌ ' || roles::text
    END as roles,
    cmd as comando,
    CASE 
        WHEN with_check = 'true' THEN '✅ PERMITE'
        ELSE '⚠️ ' || with_check
    END as permissao
FROM pg_policies
WHERE schemaname = 'public'
AND tablename IN ('beta_signups', 'b2b_leads')
ORDER BY tablename, policyname;

-- 4. Contar políticas por tabela
SELECT 
    'CONTAGEM POLÍTICAS' as tipo,
    tablename,
    COUNT(*) as total_politicas
FROM pg_policies
WHERE schemaname = 'public'
AND tablename IN ('beta_signups', 'b2b_leads')
GROUP BY tablename
ORDER BY tablename;

-- 5. Verificar índices
SELECT 
    'ÍNDICES' as tipo,
    schemaname,
    tablename,
    indexname
FROM pg_indexes
WHERE schemaname = 'public'
AND tablename IN ('beta_signups', 'b2b_leads')
ORDER BY tablename, indexname;

-- 6. Ver estrutura das tabelas
SELECT 
    'ESTRUTURA beta_signups' as tipo,
    column_name,
    data_type,
    is_nullable,
    column_default
FROM information_schema.columns
WHERE table_schema = 'public'
AND table_name = 'beta_signups'
ORDER BY ordinal_position;

SELECT 
    'ESTRUTURA b2b_leads' as tipo,
    column_name,
    data_type,
    is_nullable,
    column_default
FROM information_schema.columns
WHERE table_schema = 'public'
AND table_name = 'b2b_leads'
ORDER BY ordinal_position;

-- ============================================================================
-- INTERPRETAÇÃO DOS RESULTADOS:
-- ============================================================================
-- 
-- ✅ O QUE DEVE APARECER:
-- - 2 tabelas: beta_signups e b2b_leads
-- - RLS HABILITADO nas duas tabelas
-- - 2 políticas para beta_signups (1 INSERT anon, 1 SELECT authenticated)
-- - 2 políticas para b2b_leads (1 INSERT anon, 1 SELECT authenticated)
-- - Vários índices em cada tabela
-- 
-- ❌ SE ALGO ESTIVER FALTANDO:
-- - Execute o script supabase-setup.sql novamente
-- - Verifique se você tem permissões de owner no projeto
-- 
-- ============================================================================


