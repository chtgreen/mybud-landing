# 🚨 CORREÇÕES URGENTES - AÇÃO IMEDIATA

## ⏱️ Tempo Estimado: 30-45 minutos

---

## 🔴 PROBLEMA 1: Supabase Permission Denied (CRÍTICO)

### Status
❌ **BLOQUEANTE** - Todos os formulários estão falhando em produção

### Causa
As tabelas `beta_signups` e `b2b_leads` não têm políticas RLS configuradas para permitir inserções anônimas.

### Solução

**1. Acesse o Supabase Dashboard:**
```
URL: https://supabase.com/dashboard/project/xtgypohwmdpavazjmhcz
```

**2. Vá para SQL Editor e execute TODO O ARQUIVO:**

⚠️ **IMPORTANTE:** Use o arquivo `supabase-setup.sql` que contém o script COMPLETO!

Ou copie e cole este script:

```sql
-- CRIAR TABELAS
CREATE TABLE IF NOT EXISTS public.beta_signups (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    email text NOT NULL,
    instagram text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS public.b2b_leads (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    name text NOT NULL,
    email text NOT NULL,
    company text NOT NULL,
    message text,
    source text DEFAULT 'landing' NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);

-- CRIAR ÍNDICES
CREATE INDEX IF NOT EXISTS idx_beta_signups_email ON public.beta_signups(email);
CREATE INDEX IF NOT EXISTS idx_beta_signups_created_at ON public.beta_signups(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_b2b_leads_email ON public.b2b_leads(email);
CREATE INDEX IF NOT EXISTS idx_b2b_leads_created_at ON public.b2b_leads(created_at DESC);

-- HABILITAR RLS
ALTER TABLE public.beta_signups ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.b2b_leads ENABLE ROW LEVEL SECURITY;

-- POLÍTICAS RLS
CREATE POLICY "Allow anonymous inserts on beta_signups"
ON public.beta_signups FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts on b2b_leads"
ON public.b2b_leads FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow authenticated read on beta_signups"
ON public.beta_signups FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow authenticated read on b2b_leads"
ON public.b2b_leads FOR SELECT TO authenticated USING (true);
```

**3. Verificar se funcionou:**
```sql
-- Ver tabelas criadas
SELECT tablename FROM pg_tables WHERE tablename IN ('beta_signups', 'b2b_leads');

-- Ver políticas
SELECT tablename, policyname FROM pg_policies WHERE tablename IN ('beta_signups', 'b2b_leads');
```

**Resultado esperado:** 
- 2 tabelas listadas
- 4 políticas listadas (2 para cada tabela)

---

## 🟡 PROBLEMA 2: .env Local Incompleto (IMPORTANTE)

### Status
⚠️ Desenvolvimento local não funciona

### Causa
URL do Supabase no arquivo `.env` local está truncada:
```
VITE_SUPABASE_URL=https://xtgypohwmdp  ❌ ERRADO
```

### Solução

**Edite o arquivo `.env` na raiz do projeto:**

```bash
# Substituir conteúdo atual por:
VITE_POSTHOG_KEY=phc_YrZnbL6jRmlruBFkYbLHvhml6muFRTjzaNONbaMSNwx
VITE_POSTHOG_HOST=https://app.posthog.com
VITE_SUPABASE_URL=https://xtgypohwmdpavazjmhcz.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0Z3lwb2h3bWRwYXZhemptaGN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc4MjE2NDYsImV4cCI6MjA1MzM5NzY0Nn0.HvCwgdobsSWFuXgs3Mj4dgPKBOKNrsTleSyHYf-K5cE
VITE_GA_MEASUREMENT_ID=G-M1N4DR4ZZ6
```

**Comando rápido:**
```bash
cat > .env << 'EOF'
VITE_POSTHOG_KEY=phc_YrZnbL6jRmlruBFkYbLHvhml6muFRTjzaNONbaMSNwx
VITE_POSTHOG_HOST=https://app.posthog.com
VITE_SUPABASE_URL=https://xtgypohwmdpavazjmhcz.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0Z3lwb2h3bWRwYXZhemptaGN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc4MjE2NDYsImV4cCI6MjA1MzM5NzY0Nn0.HvCwgdobsSWFuXgs3Mj4dgPKBOKNrsTleSyHYf-K5cE
VITE_GA_MEASUREMENT_ID=G-M1N4DR4ZZ6
EOF
```

---

## ✅ TESTE APÓS CORREÇÕES

### 1. Testar Conexão Supabase

```bash
# Criar arquivo de teste
cat > test-db.js << 'EOF'
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://xtgypohwmdpavazjmhcz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0Z3lwb2h3bWRwYXZhemptaGN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc4MjE2NDYsImV4cCI6MjA1MzM5NzY0Nn0.HvCwgdobsSWFuXgs3Mj4dgPKBOKNrsTleSyHYf-K5cE'
);

async function test() {
  console.log('Testing beta_signups...');
  const { data, error } = await supabase
    .from('beta_signups')
    .insert([{ email: 'test@example.com', instagram: '' }]);
  
  if (error) {
    console.log('❌ ERROR:', error.message);
  } else {
    console.log('✅ SUCCESS! Data inserted:', data);
  }
}

test();
EOF

# Executar teste
node test-db.js

# Limpar
rm test-db.js
```

### 2. Testar Formulários na Interface

1. **Iniciar servidor local:**
```bash
npm run dev
```

2. **Testar B2C (http://localhost:5173):**
   - [ ] Abrir modal de beta
   - [ ] Preencher email
   - [ ] Submeter formulário
   - [ ] Verificar mensagem de sucesso

3. **Testar B2B (http://localhost:5173/pt/b2b):**
   - [ ] Scroll até formulário final
   - [ ] Preencher todos os campos
   - [ ] Submeter formulário
   - [ ] Verificar mensagem de sucesso

### 3. Verificar Dados no Supabase

1. Acesse: https://supabase.com/dashboard/project/xtgypohwmdpavazjmhcz
2. Vá para **Table Editor**
3. Selecione tabela `beta_signups` ou `b2b_leads`
4. Verifique se os dados de teste aparecem

### 4. Verificar Analytics

1. **PostHog:**
   - URL: https://app.posthog.com
   - Projeto: mybud-landing
   - Verificar eventos recentes

2. **Google Analytics:**
   - URL: https://analytics.google.com
   - Property ID: G-M1N4DR4ZZ6
   - Verificar em Real-time

---

## 📊 CHECKLIST DE VALIDAÇÃO

### Supabase
- [ ] Script SQL executado com sucesso
- [ ] Políticas RLS listadas em `pg_policies`
- [ ] Teste de inserção manual funcionando
- [ ] Dados aparecendo no Table Editor

### Ambiente Local
- [ ] Arquivo `.env` atualizado
- [ ] Servidor local iniciando sem erros
- [ ] Console do browser sem erros
- [ ] Formulários submetendo com sucesso

### Produção
- [ ] Deploy realizado após correções
- [ ] Teste em https://lp.mybud.app
- [ ] Formulários B2C funcionando
- [ ] Formulários B2B funcionando
- [ ] Eventos aparecendo no PostHog

### Analytics
- [ ] PostHog recebendo eventos
- [ ] GA4 recebendo eventos
- [ ] Eventos customizados funcionando

---

## 🆘 SE ALGO DER ERRADO

### ✅ Erro: "relation public.beta_signups does not exist"
**Significa:** Tabela não foi criada ainda

**Status:** ✅ **JÁ CORRIGIDO!** O script `supabase-setup.sql` cria as tabelas!

**Se ainda aparecer este erro:**
```sql
-- Execute o script completo supabase-setup.sql
-- Ou manualmente:

CREATE TABLE IF NOT EXISTS public.beta_signups (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    email text NOT NULL,
    instagram text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS public.b2b_leads (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    name text NOT NULL,
    email text NOT NULL,
    company text NOT NULL,
    message text,
    source text DEFAULT 'landing' NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);

-- Depois continue com o resto do script (RLS + políticas)
```

### Erro: "new row violates row-level security policy"
**Significa:** Política RLS criada mas não permite INSERT

**Solução:**
```sql
-- Verificar políticas existentes
SELECT * FROM pg_policies WHERE tablename = 'beta_signups';

-- Se necessário, deletar e recriar
DROP POLICY "Allow anonymous inserts on beta_signups" ON public.beta_signups;

-- Recriar com permissão correta
CREATE POLICY "Allow anonymous inserts on beta_signups"
ON public.beta_signups
FOR INSERT
TO anon
WITH CHECK (true);
```

### Erro: "Invalid API key"
**Significa:** Chave Supabase incorreta

**Solução:**
1. Acesse Supabase Dashboard → Settings → API
2. Copie a "anon public" key
3. Atualize no `.env` e `wrangler.json`
4. Reinicie o servidor

---

## 📞 CONTATOS DE EMERGÊNCIA

- **Supabase Dashboard:** https://supabase.com/dashboard
- **PostHog Dashboard:** https://app.posthog.com
- **Google Analytics:** https://analytics.google.com
- **Cloudflare Dashboard:** https://dash.cloudflare.com

---

## ⏭️ APÓS CORREÇÕES

Quando tudo estiver funcionando:

1. ✅ Marcar como resolvido no AUDIT_REPORT.md
2. ✅ Notificar equipe
3. ✅ Fazer deploy de produção
4. ✅ Monitorar por 24h
5. ✅ Documentar aprendizados

---

**Última atualização:** 21/10/2025  
**Prioridade:** 🔴 URGENTE  
**Estimativa:** 30-45 minutos

