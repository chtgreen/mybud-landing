-- ============================================================================
-- MYBUD LANDING - MIGRATION: ADD PHONE TO B2B_LEADS & CREATE COLLECTIVE_LEADS
-- ============================================================================
-- Execute este script se você já tem o database configurado e precisa:
-- 1. Adicionar campo 'phone' à tabela b2b_leads (IMPORTANTE para industry form!)
-- 2. Adicionar a tabela collective_leads
-- Tempo estimado: 30 segundos
-- ============================================================================

-- ============================================================================
-- 1. ADICIONAR CAMPO PHONE À TABELA B2B_LEADS
-- ============================================================================

-- Adicionar coluna phone (se não existir)
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 
        FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = 'b2b_leads' 
        AND column_name = 'phone'
    ) THEN
        ALTER TABLE public.b2b_leads ADD COLUMN phone text;
        RAISE NOTICE 'Column phone added to b2b_leads';
    ELSE
        RAISE NOTICE 'Column phone already exists in b2b_leads';
    END IF;
END $$;

-- Criar índice para o campo phone (se não existir)
CREATE INDEX IF NOT EXISTS idx_b2b_leads_phone ON public.b2b_leads(phone);

-- ============================================================================
-- 2. CRIAR TABELA COLLECTIVE_LEADS (se não existir)
-- ============================================================================

-- Tabela: collective_leads (para leads de coletivos - formulário de cultivo coletivo)
CREATE TABLE IF NOT EXISTS public.collective_leads (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    organization_name text NOT NULL,
    whatsapp text NOT NULL,
    email text NOT NULL,
    plant_count text NOT NULL,
    source text DEFAULT 'collective_landing' NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);

-- ============================================================================
-- 3. CRIAR ÍNDICES PARA COLLECTIVE_LEADS
-- ============================================================================

CREATE INDEX IF NOT EXISTS idx_collective_leads_email ON public.collective_leads(email);
CREATE INDEX IF NOT EXISTS idx_collective_leads_organization ON public.collective_leads(organization_name);
CREATE INDEX IF NOT EXISTS idx_collective_leads_created_at ON public.collective_leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_collective_leads_source ON public.collective_leads(source);

-- ============================================================================
-- 4. HABILITAR ROW LEVEL SECURITY EM COLLECTIVE_LEADS
-- ============================================================================

ALTER TABLE public.collective_leads ENABLE ROW LEVEL SECURITY;

-- ============================================================================
-- 5. CRIAR POLÍTICAS RLS PARA COLLECTIVE_LEADS
-- ============================================================================

-- Política: Permitir INSERT anônimo em collective_leads
DROP POLICY IF EXISTS "Allow anonymous inserts on collective_leads" ON public.collective_leads;
CREATE POLICY "Allow anonymous inserts on collective_leads"
ON public.collective_leads
FOR INSERT
TO anon
WITH CHECK (true);

-- Política: Permitir SELECT para usuários autenticados em collective_leads
DROP POLICY IF EXISTS "Allow authenticated read on collective_leads" ON public.collective_leads;
CREATE POLICY "Allow authenticated read on collective_leads"
ON public.collective_leads
FOR SELECT
TO authenticated
USING (true);

-- ============================================================================
-- 6. CRIAR TRIGGER DE ATUALIZAÇÃO AUTOMÁTICA PARA COLLECTIVE_LEADS
-- ============================================================================

-- Nota: Esta função já deve existir se você executou o supabase-setup.sql
-- Se não existir, descomente as linhas abaixo:

/*
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;
*/

-- Trigger para collective_leads
DROP TRIGGER IF EXISTS update_collective_leads_updated_at ON public.collective_leads;
CREATE TRIGGER update_collective_leads_updated_at
    BEFORE UPDATE ON public.collective_leads
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ============================================================================
-- 7. INSERIR DADOS DE TESTE (OPCIONAL)
-- ============================================================================

-- Teste em b2b_leads com phone
INSERT INTO public.b2b_leads (name, email, phone, company, message, source)
VALUES 
    ('João Phone Test', 'joao.phone@example.com', '+55 11 98765-4321', 'Empresa Phone LTDA', 'Teste com telefone', 'landing')
ON CONFLICT DO NOTHING;

-- Teste em collective_leads
INSERT INTO public.collective_leads (organization_name, whatsapp, email, plant_count, source)
VALUES 
    ('Coletivo Teste', '+55 11 98765-4321', 'coletivo@teste.com', '50-100', 'collective_landing'),
    ('Associação Exemplo', '+55 21 99999-8888', 'associacao@exemplo.org', '100-200', 'collective_landing')
ON CONFLICT DO NOTHING;

-- ============================================================================
-- 8. VERIFICAÇÕES
-- ============================================================================

-- Verificar se a coluna phone foi adicionada em b2b_leads
SELECT 
    column_name,
    data_type,
    is_nullable
FROM information_schema.columns
WHERE table_schema = 'public' 
AND table_name = 'b2b_leads' 
AND column_name = 'phone';

-- Verificar se a tabela collective_leads foi criada
SELECT 
    schemaname,
    tablename,
    tableowner
FROM pg_tables
WHERE tablename = 'collective_leads';

-- Verificar políticas RLS em collective_leads
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd
FROM pg_policies
WHERE tablename = 'collective_leads'
ORDER BY policyname;

-- Verificar índices criados
SELECT 
    schemaname,
    tablename,
    indexname
FROM pg_indexes
WHERE tablename IN ('b2b_leads', 'collective_leads')
AND indexname LIKE '%phone%' OR indexname LIKE '%collective%'
ORDER BY tablename, indexname;

-- Contar registros em collective_leads
SELECT COUNT(*) as total_collective_leads FROM public.collective_leads;

-- Verificar registros com phone em b2b_leads
SELECT COUNT(*) as leads_with_phone FROM public.b2b_leads WHERE phone IS NOT NULL;

-- ============================================================================
-- ✅ MIGRATION COMPLETA!
-- ============================================================================

-- RESUMO DO QUE FOI FEITO:
-- ✅ Campo 'phone' adicionado à tabela b2b_leads (NECESSÁRIO para o formulário industry!)
-- ✅ Tabela 'collective_leads' criada com todos os campos necessários
-- ✅ Índices criados para performance
-- ✅ RLS habilitado e políticas configuradas
-- ✅ Triggers de updated_at configurados
-- ✅ Dados de teste inseridos

-- PRÓXIMOS PASSOS:
-- 1. Verifique os resultados das queries acima
-- 2. Teste o formulário B2B/Industry (agora com campo de telefone)
-- 3. Teste o formulário de Coletivos
-- 4. Os formulários devem funcionar sem erros 404

-- IMPORTANTE: 
-- O campo 'phone' é OBRIGATÓRIO no formulário B2B/Industry.
-- Se você já tem leads sem phone, eles continuarão funcionando (phone NULL).
-- Novos leads a partir de agora incluirão o telefone automaticamente.

