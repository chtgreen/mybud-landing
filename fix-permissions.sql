-- ============================================================================
-- FIX PERMISSIONS - CORRIGIR POLÍTICAS RLS
-- ============================================================================
-- Execute este script se você criou as tabelas mas ainda tem erro de permissão
-- ============================================================================

-- PASSO 1: Remover políticas antigas (se existirem)
DROP POLICY IF EXISTS "Allow anonymous inserts on beta_signups" ON public.beta_signups;
DROP POLICY IF EXISTS "Allow anonymous inserts on b2b_leads" ON public.b2b_leads;
DROP POLICY IF EXISTS "Allow authenticated read on beta_signups" ON public.beta_signups;
DROP POLICY IF EXISTS "Allow authenticated read on b2b_leads" ON public.b2b_leads;

-- PASSO 2: Garantir que RLS está habilitado
ALTER TABLE public.beta_signups ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.b2b_leads ENABLE ROW LEVEL SECURITY;

-- PASSO 3: Criar políticas CORRETAS para INSERT anônimo
CREATE POLICY "Allow anonymous inserts on beta_signups"
ON public.beta_signups
FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts on b2b_leads"
ON public.b2b_leads
FOR INSERT
TO anon
WITH CHECK (true);

-- PASSO 4: Criar políticas para SELECT autenticado
CREATE POLICY "Allow authenticated read on beta_signups"
ON public.beta_signups
FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Allow authenticated read on b2b_leads"
ON public.b2b_leads
FOR SELECT
TO authenticated
USING (true);

-- PASSO 5: VERIFICAR - Deve mostrar 4 políticas (2 por tabela)
SELECT 
    tablename,
    policyname,
    roles::text as roles,
    cmd as comando
FROM pg_policies
WHERE schemaname = 'public'
AND tablename IN ('beta_signups', 'b2b_leads')
ORDER BY tablename, policyname;

-- ============================================================================
-- RESULTADO ESPERADO:
-- ============================================================================
-- Você deve ver 4 linhas:
-- 
-- beta_signups  | Allow anonymous inserts on beta_signups    | {anon}          | INSERT
-- beta_signups  | Allow authenticated read on beta_signups   | {authenticated} | SELECT
-- b2b_leads     | Allow anonymous inserts on b2b_leads       | {anon}          | INSERT
-- b2b_leads     | Allow authenticated read on b2b_leads      | {authenticated} | SELECT
-- 
-- ============================================================================





