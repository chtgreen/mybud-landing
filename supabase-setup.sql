-- ============================================================================
-- MYBUD LANDING - SUPABASE DATABASE SETUP COMPLETO
-- ============================================================================
-- Execute este arquivo completo no Supabase SQL Editor
-- Tempo estimado: 2-3 minutos
-- ============================================================================

-- ============================================================================
-- 1. CRIAR TABELAS
-- ============================================================================

-- Tabela: beta_signups (para cadastros B2C - newsletter/beta access)
CREATE TABLE IF NOT EXISTS public.beta_signups (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    full_name text,
    email text,
    instagram text,
    country text,
    city text,
    primary_goal text,
    cannabis_experience text,
    obstacles text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    CONSTRAINT beta_signups_name_or_instagram_chk CHECK (
        (full_name IS NOT NULL AND btrim(full_name) <> '')
        OR (instagram IS NOT NULL AND btrim(instagram) <> '')
    )
);

-- Tabela: b2b_leads (para leads B2B - formulário de contato comercial)
CREATE TABLE IF NOT EXISTS public.b2b_leads (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    name text,
    email text,
    company text,
    message text,
    source text DEFAULT 'landing' NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);

-- ============================================================================
-- 2. CRIAR ÍNDICES (para performance)
-- ============================================================================

-- Índices para beta_signups
CREATE INDEX IF NOT EXISTS idx_beta_signups_email ON public.beta_signups(email);
CREATE INDEX IF NOT EXISTS idx_beta_signups_created_at ON public.beta_signups(created_at DESC);

-- Índices para b2b_leads
CREATE INDEX IF NOT EXISTS idx_b2b_leads_email ON public.b2b_leads(email);
CREATE INDEX IF NOT EXISTS idx_b2b_leads_company ON public.b2b_leads(company);
CREATE INDEX IF NOT EXISTS idx_b2b_leads_created_at ON public.b2b_leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_b2b_leads_source ON public.b2b_leads(source);

-- ============================================================================
-- 3. HABILITAR ROW LEVEL SECURITY (RLS)
-- ============================================================================

ALTER TABLE public.beta_signups ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.b2b_leads ENABLE ROW LEVEL SECURITY;

-- ============================================================================
-- 4. CRIAR POLÍTICAS RLS (permitir acesso anônimo)
-- ============================================================================

-- Política: Permitir INSERT anônimo em beta_signups
DROP POLICY IF EXISTS "Allow anonymous inserts on beta_signups" ON public.beta_signups;
CREATE POLICY "Allow anonymous inserts on beta_signups"
ON public.beta_signups
FOR INSERT
TO anon
WITH CHECK (true);

-- Política: Permitir INSERT anônimo em b2b_leads
DROP POLICY IF EXISTS "Allow anonymous inserts on b2b_leads" ON public.b2b_leads;
CREATE POLICY "Allow anonymous inserts on b2b_leads"
ON public.b2b_leads
FOR INSERT
TO anon
WITH CHECK (true);

-- Política: Permitir SELECT para usuários autenticados em beta_signups
DROP POLICY IF EXISTS "Allow authenticated read on beta_signups" ON public.beta_signups;
CREATE POLICY "Allow authenticated read on beta_signups"
ON public.beta_signups
FOR SELECT
TO authenticated
USING (true);

-- Política: Permitir SELECT para usuários autenticados em b2b_leads
DROP POLICY IF EXISTS "Allow authenticated read on b2b_leads" ON public.b2b_leads;
CREATE POLICY "Allow authenticated read on b2b_leads"
ON public.b2b_leads
FOR SELECT
TO authenticated
USING (true);

-- ============================================================================
-- 5. CRIAR FUNÇÃO DE ATUALIZAÇÃO AUTOMÁTICA (updated_at)
-- ============================================================================

-- Função para atualizar o campo updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para beta_signups
DROP TRIGGER IF EXISTS update_beta_signups_updated_at ON public.beta_signups;
CREATE TRIGGER update_beta_signups_updated_at
    BEFORE UPDATE ON public.beta_signups
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Trigger para b2b_leads
DROP TRIGGER IF EXISTS update_b2b_leads_updated_at ON public.b2b_leads;
CREATE TRIGGER update_b2b_leads_updated_at
    BEFORE UPDATE ON public.b2b_leads
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ============================================================================
-- 6. INSERIR DADOS DE TESTE (OPCIONAL - pode comentar se não quiser)
-- ============================================================================

-- Teste em beta_signups
INSERT INTO public.beta_signups (full_name, email, instagram, country, city, primary_goal, cannabis_experience, obstacles)
VALUES 
    ('Grower Teste', 'teste1@mybud.app', '@mybud_test', 'Brasil', 'São Paulo', 'Explorar novas genéticas', 'Intermediário', 'Falta de acesso a conteúdo confiável'),
    (NULL, NULL, '@grower_only', 'Brasil', NULL, 'Aprender com a comunidade', 'Iniciante', NULL)
ON CONFLICT DO NOTHING;

-- Teste em b2b_leads
INSERT INTO public.b2b_leads (name, email, company, message, source)
VALUES 
    ('João Teste', 'joao@example.com', 'Empresa Teste LTDA', 'Mensagem de teste', 'landing'),
    ('Maria Teste', 'maria@example.com', 'Outro Teste SA', NULL, 'landing')
ON CONFLICT DO NOTHING;

-- ============================================================================
-- 7. VERIFICAÇÕES FINAIS
-- ============================================================================

-- Verificar se as tabelas foram criadas
SELECT 
    schemaname,
    tablename,
    tableowner
FROM pg_tables
WHERE tablename IN ('beta_signups', 'b2b_leads')
ORDER BY tablename;

-- Verificar políticas RLS criadas
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
WHERE tablename IN ('beta_signups', 'b2b_leads')
ORDER BY tablename, policyname;

-- Verificar índices criados
SELECT 
    schemaname,
    tablename,
    indexname,
    indexdef
FROM pg_indexes
WHERE tablename IN ('beta_signups', 'b2b_leads')
ORDER BY tablename, indexname;

-- Contar registros (incluindo dados de teste)
SELECT 'beta_signups' as tabela, COUNT(*) as total FROM public.beta_signups
UNION ALL
SELECT 'b2b_leads' as tabela, COUNT(*) as total FROM public.b2b_leads;

-- ============================================================================
-- ✅ SETUP COMPLETO!
-- ============================================================================

-- Se você ver resultados nas queries de verificação acima, está tudo OK!
-- Agora você pode testar os formulários na aplicação.

-- Para testar manualmente via SQL:
-- INSERT INTO public.beta_signups (full_name, email, instagram) VALUES ('Seu Nome', 'seu@email.com', '@seu_insta');
-- INSERT INTO public.b2b_leads (name, email, company, message) VALUES ('Seu Nome', 'seu@email.com', 'Sua Empresa', 'Teste');

