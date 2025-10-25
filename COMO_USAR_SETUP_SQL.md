# 🚀 COMO USAR O SCRIPT DE SETUP DO SUPABASE

## ⚡ GUIA RÁPIDO (5 MINUTOS)

### Passo 1: Abrir Supabase
```
URL: https://supabase.com/dashboard/project/xtgypohwmdpavazjmhcz
```

### Passo 2: Ir para SQL Editor
1. No menu lateral, clique em **"SQL Editor"**
2. Clique em **"New query"**

### Passo 3: Copiar e Colar o Script
1. Abra o arquivo `supabase-setup.sql`
2. Copie TODO o conteúdo (Ctrl+A, Ctrl+C)
3. Cole no SQL Editor (Ctrl+V)

### Passo 4: Executar
1. Clique no botão **"Run"** (ou pressione Ctrl+Enter)
2. Aguarde ~10 segundos

### Passo 5: Verificar Resultado
Você deve ver na seção de resultados:

```
✅ 2 tabelas criadas (beta_signups, b2b_leads)
✅ 6 índices criados
✅ 4 políticas RLS criadas
✅ 2 registros de teste inseridos
```

---

## 📋 O QUE O SCRIPT FAZ

1. **Cria 2 tabelas:**
   - `beta_signups` (para cadastros B2C)
   - `b2b_leads` (para leads B2B)

2. **Adiciona índices** (para consultas rápidas)

3. **Configura RLS** (Row Level Security)

4. **Cria políticas** para permitir:
   - INSERT anônimo (formulários públicos)
   - SELECT autenticado (admin)

5. **Insere dados de teste** (para validar)

6. **Exibe verificações** (confirma que tudo funcionou)

---

## ✅ COMO SABER SE DEU CERTO

### Na saída do SQL Editor, você deve ver:

```sql
-- Última query (verificação)
beta_signups    2
b2b_leads       2
```

Isso significa que as tabelas existem e têm 2 registros de teste cada.

---

## 🧪 TESTAR MANUALMENTE

Depois de executar o script, teste manualmente:

```sql
-- Inserir um registro de teste em beta_signups
INSERT INTO public.beta_signups (email, instagram) 
VALUES ('seu@email.com', '@seu_instagram');

-- Inserir um registro de teste em b2b_leads
INSERT INTO public.b2b_leads (name, email, company, message) 
VALUES ('Seu Nome', 'seu@email.com', 'Sua Empresa', 'Mensagem teste');

-- Ver todos os registros
SELECT * FROM public.beta_signups ORDER BY created_at DESC LIMIT 5;
SELECT * FROM public.b2b_leads ORDER BY created_at DESC LIMIT 5;
```

---

## 🔄 SE PRECISAR REEXECUTAR

O script usa `CREATE TABLE IF NOT EXISTS`, então é **seguro executar múltiplas vezes**.

Se quiser limpar tudo e começar do zero:

```sql
-- ATENÇÃO: Isso APAGA TUDO!
DROP TABLE IF EXISTS public.beta_signups CASCADE;
DROP TABLE IF EXISTS public.b2b_leads CASCADE;

-- Depois execute o supabase-setup.sql novamente
```

---

## 🆘 PROBLEMAS COMUNS

### Erro: "permission denied"
**Solução:** Você precisa ser owner do projeto ou ter permissões de admin.

### Erro: "syntax error"
**Solução:** Certifique-se de copiar o script completo, desde o primeiro comentário até o fim.

### Erro: "relation already exists"
**Solução:** As tabelas já existem! Você pode:
- Ignorar (está tudo OK)
- Ou dropar e recriar (veja seção "SE PRECISAR REEXECUTAR")

---

## 📞 PRÓXIMOS PASSOS

Depois de executar este script:

1. ✅ Vá para **Table Editor** no Supabase
2. ✅ Confirme que vê as tabelas `beta_signups` e `b2b_leads`
3. ✅ Teste os formulários na aplicação
4. ✅ Monitore os dados chegando

---

## 🎯 LINKS ÚTEIS

- **Supabase Dashboard:** https://supabase.com/dashboard/project/xtgypohwmdpavazjmhcz
- **Table Editor:** https://supabase.com/dashboard/project/xtgypohwmdpavazjmhcz/editor
- **SQL Editor:** https://supabase.com/dashboard/project/xtgypohwmdpavazjmhcz/sql
- **Docs RLS:** https://supabase.com/docs/guides/auth/row-level-security

---

**Tempo total:** ⏱️ 5 minutos  
**Dificuldade:** 🟢 Fácil (copiar e colar)  
**Resultado:** ✅ Database 100% funcional


