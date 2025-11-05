# Configuração de Preços

## Preço Base do App

O preço base do plano do MyBud agora é configurável via variável de ambiente.

### Variável de Ambiente

**Nome:** `VITE_APP_BASE_PRICE`
**Valor padrão:** 39.90 (se não configurado)

### Como Configurar

1. **Desenvolvimento Local:**
   
   Crie um arquivo `.env.local` na raiz do projeto (se ainda não existir) e adicione:
   
   ```bash
   VITE_APP_BASE_PRICE=39.90
   ```

2. **Produção (Cloudflare Pages):**
   
   Configure a variável de ambiente no dashboard do Cloudflare Pages:
   - Vá em Settings → Environment Variables
   - Adicione: `VITE_APP_BASE_PRICE` = `39.90`

### Formato

- Use ponto (`.`) como separador decimal: `39.90`
- O sistema automaticamente converte para vírgula (`,`) nos textos em português
- A função `getAppBasePrice()` em `lib/i18n.ts` faz essa conversão

### Onde é Usado

O preço base do app é exibido em:

1. **FAQ Section** - "Quanto vai custar depois?"
   - Português: "Premium = R$ 39,90/mês"
   - Inglês: "Premium = R$ 39.90/month"
   - Espanhol: "Premium = R$ 39,90/mes"

2. **SEO Structured Data** - FAQPage schema para Google
   - Melhora o SEO e pode aparecer em rich snippets

### Função Auxiliar

Use a função `getAppBasePrice()` para obter o preço formatado:

```typescript
import { getAppBasePrice } from './lib/i18n';

const price = getAppBasePrice(); // Retorna "39,90"
```

### Arquivos Modificados

- ✅ `env.local.template` - Template com a variável
- ✅ `src/react-app/lib/i18n.ts` - Função `getAppBasePrice()`
- ✅ `src/react-app/locales/pt.json` - FAQ atualizado
- ✅ `src/react-app/locales/en.json` - FAQ atualizado
- ✅ `src/react-app/locales/es.json` - FAQ atualizado
- ✅ `src/react-app/components/SEO.tsx` - Structured data atualizado

### Notas

- O preço de **R$ 39,90** é o valor do **plano base Premium**
- Beta testers continuam ganhando meses grátis
- O valor pode ser ajustado facilmente alterando a variável de ambiente

