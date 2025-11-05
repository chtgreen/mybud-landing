-- ============================================================================
-- MYBUD LANDING - MIGRATION: ADD COLLECTIVE_LEADS TABLE
-- ============================================================================
-- Execute este script se você já tem o database configurado e precisa apenas
-- adicionar a tabela collective_leads
-- Tempo estimado: 30 segundos
-- ============================================================================

-- ============================================================================
-- 1. CRIAR TABELA
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
-- 2. CRIAR ÍNDICES (para performance)
-- ============================================================================

CREATE INDEX IF NOT EXISTS idx_collective_leads_email ON public.collective_leads(email);
CREATE INDEX IF NOT EXISTS idx_collective_leads_organization ON public.collective_leads(organization_name);
CREATE INDEX IF NOT EXISTS idx_collective_leads_created_at ON public.collective_leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_collective_leads_source ON public.collective_leads(source);

-- ============================================================================
-- 3. HABILITAR ROW LEVEL SECURITY (RLS)
-- ============================================================================

ALTER TABLE public.collective_leads ENABLE ROW LEVEL SECURITY;

-- ============================================================================
-- 4. CRIAR POLÍTICAS RLS (permitir acesso anônimo)
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
-- 5. CRIAR TRIGGER DE ATUALIZAÇÃO AUTOMÁTICA (updated_at)
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
-- 6. INSERIR DADOS DE TESTE (OPCIONAL)
-- ============================================================================

INSERT INTO public.collective_leads (organization_name, whatsapp, email, plant_count, source)
VALUES 
    ('Coletivo Teste', '+55 11 98765-4321', 'coletivo@teste.com', '50-100', 'collective_landing'),
    ('Associação Exemplo', '+55 21 99999-8888', 'associacao@exemplo.org', '100-200', 'collective_landing')
ON CONFLICT DO NOTHING;

-- ============================================================================
-- 7. VERIFICAÇÕES
-- ============================================================================

-- Verificar se a tabela foi criada
SELECT 
    schemaname,
    tablename,
    tableowner
FROM pg_tables
WHERE tablename = 'collective_leads';

-- Verificar políticas RLS
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

-- Verificar índices
SELECT 
    schemaname,
    tablename,
    indexname,
    indexdef
FROM pg_indexes
WHERE tablename = 'collective_leads'
ORDER BY indexname;

-- Contar registros
SELECT COUNT(*) as total_records FROM public.collective_leads;

-- ============================================================================
-- ✅ MIGRATION COMPLETA!
-- ============================================================================

-- Se você ver resultados nas queries de verificação acima, está tudo OK!
-- Agora o formulário de coletivos funcionará corretamente.

