# Kit Configuration Environment Variables

## Visão Geral

O número de Founder Kits restantes e o preço agora são controlados por variáveis de ambiente, facilitando a atualização sem precisar modificar código:

- `VITE_KIT_REMINDER` - Número de kits restantes
- `VITE_KIT_PRICE` - Preço do kit (apenas o número, sem símbolo de moeda)

## Como Usar

### 1. Configuração Inicial

O arquivo `.env` já está configurado na raiz do projeto:

```bash
# Kit Inventory
VITE_KIT_REMINDER=47

# Kit Price
VITE_KIT_PRICE=249
```

### 2. Atualizando o Contador e Preço

Para atualizar o número de kits restantes ou o preço, simplesmente edite o arquivo `.env`:

```bash
# Exemplo: se restam 30 kits e o preço mudou para R$ 199
VITE_KIT_REMINDER=30
VITE_KIT_PRICE=199
```

### 3. Aplicando as Mudanças

Após atualizar o `.env`:

**Desenvolvimento:**
```bash
# Reinicie o servidor de desenvolvimento
npm run dev
```

**Produção:**
```bash
# Faça rebuild e redeploy
npm run build
# Depois faça deploy normalmente
```

## Onde as Variáveis Aparecem

### VITE_KIT_REMINDER
A variável é usada em vários lugares da landing page:

1. **Hero Section** - "Só {count} Founder Kits restantes"
2. **Beta Modal** - "Restam {count} kits neste lote"
3. **Founder Kit Section** - Mostra kits disponíveis
4. **CTA Final** - "Só {count} Founder Kits restantes"

### VITE_KIT_PRICE
O preço aparece em:

1. **Beta Modal** - Preço do Founder Kit (ex: "R$ 249")

## Implementação Técnica

### Código

Os valores são lidos em `LandingPage.tsx`:

```typescript
const remainingKits = Number(import.meta.env.VITE_KIT_REMINDER) || 47;
const kitPrice = Number(import.meta.env.VITE_KIT_PRICE) || 249;
```

E passados como props para os componentes que precisam exibir essas informações.

### Traduções

Todos os arquivos de tradução (`pt.json`, `en.json`, `es.json`) usam placeholders que são interpolados dinamicamente:

```json
{
  "hero": {
    "counter": "Só {count} Founder Kits restantes"
  },
  "betaModal": {
    "priority": {
      "price": "R$ {price}"
    }
  }
}
```

## Valores Padrão

Se as variáveis de ambiente não estiverem definidas, os valores padrão são:
- **47** kits restantes
- **R$ 249** preço do kit

## Deploy em Cloudflare Workers

Para deployment em produção via Cloudflare Workers, adicione as variáveis no `wrangler.json` ou nas configurações do Cloudflare Dashboard:

```json
{
  "vars": {
    "VITE_KIT_REMINDER": "47",
    "VITE_KIT_PRICE": "249"
  }
}
```

Ou configure via dashboard:
1. Vá em Workers & Pages > seu projeto
2. Settings > Environment Variables
3. Adicione `VITE_KIT_REMINDER` com o valor atual de kits
4. Adicione `VITE_KIT_PRICE` com o preço atual

## Notas Importantes

- ✅ O arquivo `.env` está no `.gitignore` (não vai para o Git)
- ✅ Use `.env.example` como referência
- ✅ Lembre-se de atualizar em todos os ambientes (dev, staging, prod)
- ✅ `VITE_KIT_REMINDER` deve ser um número inteiro positivo
- ✅ `VITE_KIT_PRICE` deve ser um número (pode incluir centavos, ex: 249 ou 249.90)
- ✅ O preço é exibido com "R$" automaticamente pelas traduções

