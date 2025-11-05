-- ============================================================================
-- MYBUD LANDING - FIX: COLLECTIVE_LEADS PERMISSIONS (401 Unauthorized)
-- ============================================================================
-- Execute este script se você está recebendo erro 401 ao submeter o formulário
-- de coletivos. Este script corrige as permissões e políticas RLS.
-- ============================================================================

-- ============================================================================
-- 1. VERIFICAR SE A TABELA EXISTE
-- ============================================================================

DO $$ 
BEGIN
    IF NOT EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'collective_leads') THEN
        RAISE EXCEPTION 'Tabela collective_leads não existe! Execute primeiro o script add-collective-leads-table.sql';
    END IF;
END $$;

-- ============================================================================
-- 2. GARANTIR PERMISSÕES BÁSICAS PARA O ROLE ANON
-- ============================================================================

-- Garantir que anon pode usar o schema public
GRANT USAGE ON SCHEMA public TO anon;

-- Garantir permissões de INSERT na tabela collective_leads para anon
GRANT INSERT ON public.collective_leads TO anon;

-- Garantir permissões de SELECT na sequência (para o id)
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO anon;

-- ============================================================================
-- 3. RECRIAR POLÍTICAS RLS (força limpeza e recriação)
-- ============================================================================

-- Remover políticas antigas se existirem
DROP POLICY IF EXISTS "Allow anonymous inserts on collective_leads" ON public.collective_leads;
DROP POLICY IF EXISTS "Allow authenticated read on collective_leads" ON public.collective_leads;

-- Garantir que RLS está habilitado
ALTER TABLE public.collective_leads ENABLE ROW LEVEL SECURITY;

-- Política: Permitir INSERT anônimo em collective_leads
CREATE POLICY "Allow anonymous inserts on collective_leads"
ON public.collective_leads
FOR INSERT
TO anon
WITH CHECK (true);

-- Política: Permitir SELECT para usuários autenticados em collective_leads
CREATE POLICY "Allow authenticated read on collective_leads"
ON public.collective_leads
FOR SELECT
TO authenticated
USING (true);

-- ============================================================================
-- 4. VERIFICAR PERMISSÕES DO ANON ROLE
-- ============================================================================

-- Verificar grants na tabela
SELECT 
    grantee,
    privilege_type,
    is_grantable
FROM information_schema.table_privileges
WHERE table_schema = 'public' 
  AND table_name = 'collective_leads'
  AND grantee = 'anon';

-- ============================================================================
-- 5. VERIFICAR POLÍTICAS RLS
-- ============================================================================

SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual,
    with_check
FROM pg_policies
WHERE tablename = 'collective_leads'
ORDER BY policyname;

-- ============================================================================
-- 6. TESTE DE INSERÇÃO (como anon)
-- ============================================================================

-- Para testar se o anon consegue inserir, você pode executar este comando
-- através do Supabase SQL Editor (que usa credenciais de anon):

/*
INSERT INTO public.collective_leads (
    organization_name,
    whatsapp,
    email,
    plant_count,
    source
) VALUES (
    'Teste de Permissões',
    '+55 11 99999-9999',
    'teste@permissoes.com',
    '10-50',
    'test_script'
);

-- Se funcionar, verifique:
SELECT * FROM public.collective_leads WHERE email = 'teste@permissoes.com';

-- E depois delete o teste:
DELETE FROM public.collective_leads WHERE email = 'teste@permissoes.com';
*/

-- ============================================================================
-- 7. ALTERNATIVA: CRIAR FUNÇÃO PARA INSERT (caso políticas RLS não funcionem)
-- ============================================================================

-- Se mesmo após executar este script ainda houver 401, você pode criar uma
-- função que bypassa RLS e dar permissão de EXECUTE para anon:

/*
CREATE OR REPLACE FUNCTION public.insert_collective_lead(
    p_organization_name text,
    p_whatsapp text,
    p_email text,
    p_plant_count text,
    p_source text DEFAULT 'collective_landing'
)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    v_id uuid;
BEGIN
    INSERT INTO public.collective_leads (
        organization_name,
        whatsapp,
        email,
        plant_count,
        source,
        created_at
    ) VALUES (
        p_organization_name,
        p_whatsapp,
        p_email,
        p_plant_count,
        p_source,
        now()
    )
    RETURNING id INTO v_id;
    
    RETURN v_id;
END;
$$;

-- Dar permissão para anon executar a função
GRANT EXECUTE ON FUNCTION public.insert_collective_lead TO anon;

-- Então no código React, ao invés de:
-- await supabase.from('collective_leads').insert([...])
-- Usar:
-- await supabase.rpc('insert_collective_lead', { 
--   p_organization_name: '...',
--   p_whatsapp: '...',
--   p_email: '...',
--   p_plant_count: '...',
--   p_source: 'collective_landing'
-- })
*/

-- ============================================================================
-- ✅ FIX COMPLETO!
-- ============================================================================

-- Se você executou este script e ainda tem erro 401:
-- 1. Verifique se o SUPABASE_URL e SUPABASE_ANON_KEY estão corretos no .env
-- 2. Verifique se a API key não expirou no painel do Supabase
-- 3. Considere usar a função insert_collective_lead (descomente o bloco acima)
-- 4. Entre em contato com suporte para verificar configurações do projeto Supabase

