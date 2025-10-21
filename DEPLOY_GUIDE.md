# 🚀 Guia de Deploy - mybud Landing Pages

## ✅ O que está configurado e pronto para deploy

### 1. **Google Analytics 4** ✅
- **ID configurado**: `G-M1N4DR4ZZ6` em `wrangler.json`
- **Script gtag.js**: Inserido automaticamente no HTML
- **Tracking**: PostHog + GA4 em paralelo
- **CTAs**: Funções prontas para rastrear cliques

### 2. **Páginas Estáticas Multilíngues** ✅
Geradas automaticamente no build:
```
/index.html           → Redireciona para /pt
/pt/index.html        → B2C em português
/en/index.html        → B2C em inglês  
/es/index.html        → B2C em espanhol
/b2b/index.html       → Redireciona para /pt/b2b
/pt/b2b/index.html    → B2B em português
/en/b2b/index.html    → B2B em inglês
/es/b2b/index.html    → B2B em espanhol
```
**Total**: 8 páginas HTML estáticas otimizadas para SEO

### 3. **SEO Completo** ✅
Cada página tem:
- ✅ Meta tags específicas por idioma
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Card tags
- ✅ URLs canônicas corretas
- ✅ Meta tags de idioma (og:locale)
- ✅ Keywords otimizadas por idioma

### 4. **Sitemap.xml** ✅
- ✅ 8 URLs listadas (todas as páginas e idiomas)
- ✅ Tags hreflang para alternativas de idioma
- ✅ Prioridades configuradas (B2C = 1.0, B2B = 0.9)
- ✅ Localização: `https://lp.mybud.app/sitemap.xml`

### 5. **robots.txt** ✅
- ✅ Permite todos os crawlers
- ✅ Referencia o sitemap
- ✅ Regras específicas para Google, Bing, redes sociais

## 📦 Como Fazer o Deploy

### Opção 1: Deploy Rápido (Recomendado)
```bash
./deploy.sh
```

### Opção 2: Deploy Manual
```bash
# 1. Build
npm run build

# 2. Deploy para Cloudflare Workers
wrangler deploy
```

### Opção 3: Deploy com NPM
```bash
npm run deploy
```

## 🔍 O que acontece no deploy?

### 1. Build Process (npm run build)
```
tsc -b                  → Compila TypeScript
↓
vite build              → Gera bundle otimizado
↓
npm run prerender       → Gera 8 páginas HTML estáticas
                          com SEO completo e GA inserido
```

### 2. Deploy (wrangler deploy)
```
Cloudflare Workers recebe:
- /dist/client/         → Arquivos estáticos
- wrangler.json         → Variáveis de ambiente
  ↓
Serve páginas com:
- Google Analytics ativo (G-M1N4DR4ZZ6)
- SEO por idioma
- URLs limpas (/pt, /en, /es)
```

## ✅ Checklist Pré-Deploy

- [x] Google Analytics ID configurado (`G-M1N4DR4ZZ6`)
- [x] Sitemap atualizado com todas as URLs
- [x] Robots.txt configurado
- [x] 8 páginas HTML estáticas geradas
- [x] SEO otimizado por idioma
- [x] Variáveis de ambiente em `wrangler.json`
- [x] Build sem erros

## 🌍 URLs que Estarão Disponíveis Após Deploy

### B2C (Consumidor)
- `https://lp.mybud.app/` → Redireciona para `/pt`
- `https://lp.mybud.app/pt` → Português
- `https://lp.mybud.app/en` → Inglês
- `https://lp.mybud.app/es` → Espanhol

### B2B (Empresas)
- `https://lp.mybud.app/b2b` → Redireciona para `/pt/b2b`
- `https://lp.mybud.app/pt/b2b` → Português
- `https://lp.mybud.app/en/b2b` → Inglês
- `https://lp.mybud.app/es/b2b` → Espanhol

### SEO
- `https://lp.mybud.app/sitemap.xml` → Sitemap
- `https://lp.mybud.app/robots.txt` → Robots

## 📊 Como Verificar se Está Tudo Funcionando

### 1. Após Deploy - Google Analytics
```
1. Acesse: https://analytics.google.com
2. Vá em: Relatórios → Tempo real → Eventos
3. Visite: https://lp.mybud.app/pt
4. Veja eventos aparecendo em tempo real ✅
```

### 2. Verificar SEO
```bash
# Ver meta tags da página
curl https://lp.mybud.app/pt | grep "<meta"

# Ver título por idioma
curl https://lp.mybud.app/pt | grep "<title>"
curl https://lp.mybud.app/en | grep "<title>"
curl https://lp.mybud.app/es | grep "<title>"
```

### 3. Verificar Sitemap
```
Acesse: https://lp.mybud.app/sitemap.xml
Deve mostrar 8 URLs ✅
```

### 4. Verificar Google Analytics no HTML
```bash
curl https://lp.mybud.app/pt | grep "G-M1N4DR4ZZ6"
```
Deve aparecer o ID em 3 lugares:
- `window.GA_MEASUREMENT_ID`
- `<script src="...gtag/js?id=G-M1N4DR4ZZ6"`
- `gtag('config', 'G-M1N4DR4ZZ6')`

## 🔧 Troubleshooting

### Problema: Google Analytics não está rastreando

**Solução 1**: Verificar se o ID está no wrangler.json
```bash
cat wrangler.json | grep VITE_GA_MEASUREMENT_ID
```
Deve mostrar: `"VITE_GA_MEASUREMENT_ID": "G-M1N4DR4ZZ6"`

**Solução 2**: Verificar se o script está no HTML
```bash
curl https://lp.mybud.app/pt | grep "gtag"
```

**Solução 3**: Desabilitar AdBlock e testar novamente

### Problema: URLs antigas ainda aparecem

**Solução**: Limpar cache do Cloudflare
```bash
wrangler deploy --latest
```

### Problema: Sitemap não atualiza

**Solução**: O sitemap é estático, basta fazer redeploy
```bash
npm run deploy
```

### Problema: Página em branco

**Solução 1**: Verificar se o build foi completo
```bash
ls -la dist/client/pt/
ls -la dist/client/en/
ls -la dist/client/es/
```

**Solução 2**: Ver logs do Cloudflare Workers
```bash
wrangler tail
```

## 📈 Indexação do Google

### O que o Google vai ver (crawl):

#### Página /pt
```html
<title>mybud – Diário Inteligente de Cultivo de Cannabis | Organize seu Grow</title>
<meta name="description" content="O app definitivo para growers..."/>
<meta property="og:locale" content="pt_BR" />
<link rel="canonical" href="https://lp.mybud.app/pt" />
```

#### Página /en
```html
<title>mybud – Smart Cannabis Growing Diary | Organize Your Grow</title>
<meta name="description" content="The ultimate app for growers..."/>
<meta property="og:locale" content="en_US" />
<link rel="canonical" href="https://lp.mybud.app/en" />
```

#### Página /es
```html
<title>mybud – Diario Inteligente de Cultivo de Cannabis | Organiza tu Grow</title>
<meta name="description" content="La app definitiva para cultivadores..."/>
<meta property="og:locale" content="es_ES" />
<link rel="canonical" href="https://lp.mybud.app/es" />
```

### Resultado: ✅ 3 páginas diferentes para o Google

Cada idioma será indexado separadamente com:
- Título específico
- Descrição específica  
- Keywords específicas
- URL canônica própria
- Tags hreflang para alternar idiomas

## 🎯 Próximos Passos Após Deploy

### 1. Submeter ao Google Search Console
```
1. Acesse: https://search.google.com/search-console
2. Adicione a propriedade: lp.mybud.app
3. Verifique propriedade (DNS ou HTML)
4. Envie o sitemap: https://lp.mybud.app/sitemap.xml
```

### 2. Verificar Indexação
```
Google Search: site:lp.mybud.app
```
Deve aparecer todas as 8 páginas (pode levar 1-7 dias)

### 3. Testar Compartilhamento Social

**Facebook Debugger**:
```
https://developers.facebook.com/tools/debug/
Cole: https://lp.mybud.app/pt
```

**Twitter Card Validator**:
```
https://cards-dev.twitter.com/validator
Cole: https://lp.mybud.app/pt
```

### 4. Monitorar Analytics
- Google Analytics: Tempo real
- PostHog: Activity feed
- Cloudflare Analytics: Dashboard

## 💡 Dicas Importantes

### ✅ SIM - Está Pronto:
- Google Analytics configurado
- 8 páginas HTML estáticas
- SEO otimizado por idioma
- Sitemap atualizado
- Deploy automático

### ⚠️ Opcional (Pode fazer depois):
- Criar imagem Open Graph (`mybud-og-image.png`)
- Configurar Google Search Console
- Adicionar mais idiomas
- Otimizar performance (code splitting)

## 🔥 Deploy Agora!

Execute:
```bash
./deploy.sh
```

Ou:
```bash
npm run deploy
```

Após 30 segundos seu site estará ao vivo em:
**https://lp.mybud.app** 🎉

---

**Status**: ✅ 100% Pronto para Deploy  
**Última Atualização**: 20 de Outubro, 2025  
**Google Analytics**: Configurado (G-M1N4DR4ZZ6)  
**Páginas Estáticas**: 8 páginas (PT, EN, ES x B2C, B2B)  
**SEO**: Otimizado e multilíngue

