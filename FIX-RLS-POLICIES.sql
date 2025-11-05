-- ============================================================================
-- FIX RLS POLICIES - RECRIAR POLÍTICAS PERMISSIVAS
-- ============================================================================

-- PASSO 1: REMOVER políticas antigas
DROP POLICY IF EXISTS "Allow anonymous inserts on beta_signups" ON public.beta_signups;
DROP POLICY IF EXISTS "Allow anonymous inserts on b2b_leads" ON public.b2b_leads;
DROP POLICY IF EXISTS "Allow authenticated read on beta_signups" ON public.beta_signups;
DROP POLICY IF EXISTS "Allow authenticated read on b2b_leads" ON public.b2b_leads;

-- PASSO 2: CRIAR políticas mais permissivas (ALL em vez de só INSERT/SELECT)
CREATE POLICY "Enable all for anon on beta_signups"
ON public.beta_signups
FOR ALL
TO anon
USING (true)
WITH CHECK (true);

CREATE POLICY "Enable all for authenticated on beta_signups"
ON public.beta_signups
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Enable all for anon on b2b_leads"
ON public.b2b_leads
FOR ALL
TO anon
USING (true)
WITH CHECK (true);

CREATE POLICY "Enable all for authenticated on b2b_leads"
ON public.b2b_leads
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- VERIFICAR
SELECT 
    tablename,
    policyname,
    roles::text,
    cmd as comando
FROM pg_policies
WHERE schemaname = 'public'
AND tablename IN ('beta_signups', 'b2b_leads')
ORDER BY tablename, policyname;





