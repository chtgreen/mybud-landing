-- ============================================================================
-- APENAS CONFIGURAR PERMISSÕES (RLS)
-- ============================================================================
-- Execute este script se as tabelas JÁ EXISTEM mas você tem erro de permissão
-- ============================================================================

-- Habilitar RLS
ALTER TABLE public.beta_signups ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.b2b_leads ENABLE ROW LEVEL SECURITY;

-- Permitir INSERT para usuários anônimos (formulários públicos)
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

-- (OPCIONAL) Permitir SELECT para usuários autenticados (você ver os dados)
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

-- VERIFICAR se funcionou (deve mostrar 4 políticas)
SELECT tablename, policyname 
FROM pg_policies 
WHERE tablename IN ('beta_signups', 'b2b_leads');



