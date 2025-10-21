-- ============================================================================
-- RLS SEGURO - POLÍTICAS COM SEGURANÇA ADEQUADA
-- ============================================================================
-- Anônimos: só INSERT (enviar formulário)
-- Autenticados: SELECT completo (ver dados no admin)
-- ============================================================================

-- PASSO 1: REMOVER políticas antigas
DROP POLICY IF EXISTS "Enable all for anon on beta_signups" ON public.beta_signups;
DROP POLICY IF EXISTS "Enable all for authenticated on beta_signups" ON public.beta_signups;
DROP POLICY IF EXISTS "Enable all for anon on b2b_leads" ON public.b2b_leads;
DROP POLICY IF EXISTS "Enable all for authenticated on b2b_leads" ON public.b2b_leads;
DROP POLICY IF EXISTS "Allow anonymous inserts on beta_signups" ON public.beta_signups;
DROP POLICY IF EXISTS "Allow anonymous inserts on b2b_leads" ON public.b2b_leads;
DROP POLICY IF EXISTS "Allow authenticated read on beta_signups" ON public.beta_signups;
DROP POLICY IF EXISTS "Allow authenticated read on b2b_leads" ON public.b2b_leads;

-- PASSO 2: POLÍTICAS SEGURAS

-- ✅ beta_signups: Anônimos podem APENAS INSERIR (não podem ver nada)
CREATE POLICY "anon_insert_only_beta_signups"
ON public.beta_signups
FOR INSERT
TO anon
WITH CHECK (true);

-- ✅ beta_signups: Autenticados podem VER TUDO (admins)
CREATE POLICY "authenticated_select_beta_signups"
ON public.beta_signups
FOR SELECT
TO authenticated
USING (true);

-- ✅ b2b_leads: Anônimos podem APENAS INSERIR (não podem ver nada)
CREATE POLICY "anon_insert_only_b2b_leads"
ON public.b2b_leads
FOR INSERT
TO anon
WITH CHECK (true);

-- ✅ b2b_leads: Autenticados podem VER TUDO (admins)
CREATE POLICY "authenticated_select_b2b_leads"
ON public.b2b_leads
FOR SELECT
TO authenticated
USING (true);

-- PASSO 3: GARANTIR que RLS está HABILITADO
ALTER TABLE public.beta_signups ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.b2b_leads ENABLE ROW LEVEL SECURITY;

-- PASSO 4: FORÇAR RLS até para o owner (segurança máxima)
ALTER TABLE public.beta_signups FORCE ROW LEVEL SECURITY;
ALTER TABLE public.b2b_leads FORCE ROW LEVEL SECURITY;

-- ============================================================================
-- VERIFICAÇÃO
-- ============================================================================

SELECT 
    tablename,
    policyname,
    roles::text as "role",
    cmd as operação,
    CASE 
        WHEN cmd = 'INSERT' AND roles::text = '{anon}' THEN '✅ Seguro: anon só insere'
        WHEN cmd = 'SELECT' AND roles::text = '{authenticated}' THEN '✅ Seguro: auth vê tudo'
        ELSE '⚠️ Revisar'
    END as segurança
FROM pg_policies
WHERE schemaname = 'public'
AND tablename IN ('beta_signups', 'b2b_leads')
ORDER BY tablename, cmd;

-- ============================================================================
-- RESULTADO ESPERADO:
-- ============================================================================
-- 
-- beta_signups | anon_insert_only_beta_signups      | {anon}          | INSERT | ✅ Seguro
-- beta_signups | authenticated_select_beta_signups  | {authenticated} | SELECT | ✅ Seguro
-- b2b_leads    | anon_insert_only_b2b_leads         | {anon}          | INSERT | ✅ Seguro
-- b2b_leads    | authenticated_select_b2b_leads     | {authenticated} | SELECT | ✅ Seguro
--
-- ============================================================================
-- SEGURANÇA:
-- ============================================================================
-- ✅ Usuários anônimos (formulários públicos):
--    - Podem INSERIR novos registros
--    - NÃO podem VER registros de outras pessoas
--    - NÃO podem ATUALIZAR ou DELETAR nada
--
-- ✅ Usuários autenticados (você no dashboard):
--    - Podem VER todos os registros
--    - NÃO podem INSERIR/ATUALIZAR/DELETAR (só visualização)
--
-- ✅ Para permitir UPDATE/DELETE para admins, adicione:
--    CREATE POLICY "authenticated_update_beta_signups"
--    ON public.beta_signups FOR UPDATE TO authenticated USING (true);
--
--    CREATE POLICY "authenticated_delete_beta_signups"
--    ON public.beta_signups FOR DELETE TO authenticated USING (true);
-- ============================================================================

