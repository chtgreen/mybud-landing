# 🎨 MyBud Design System 2025

**Essência:** natureza + tecnologia + comunidade  
**Valores:** confiança, calma, proximidade — longe do "verde clichê de dispensário"

---

## 🎨 Paleta de Cores

### Cores Primárias

| Nome | HEX | RGB | CSS Variable | Uso |
|------|-----|-----|--------------|-----|
| **Verde Bud** | `#288664` | 40, 134, 100 | `--verde-bud` | Cor principal de botões, ícones, CTAs, menus |
| **Verde-claro** | `#AAD268` | 170, 210, 104 | `--verde-claro` | Hover states, indicadores de crescimento |

### Base Neutra

| Nome | HEX | RGB | CSS Variable | Uso |
|------|-----|-----|--------------|-----|
| **Off-white** | `#E6E7E8` | 230, 231, 232 | `--off-white` | Fundo principal, cards, áreas respiráveis |
| **Branco** | `#FFFFFF` | 255, 255, 255 | `--white` | Fundo, contraste máximo |
| **Preto** | `#000000` | 0, 0, 0 | `--black` | Tipografia principal, fundos escuros |

### Cores de Acento

| Nome | HEX | RGB | CSS Variable | Uso |
|------|-----|-----|--------------|-----|
| **Rosa-vivo** | `#EB4C80` | 235, 76, 128 | `--rosa-vivo` | Emoção, comunidade, CTA secundário |
| **Lilás-claro** | `#D5C0FD` | 213, 192, 253 | `--lilas-claro` | Educação, onboarding, status neutros |
| **Rosa-suave** | `#F9C9DE` | 249, 201, 222 | `--rosa-suave` | Mensagens, conquistas, badges |
| **Azul-suave** | `#EFF2FE` | 239, 242, 254 | `--azul-suave` | Dados, relatórios, gráficos |

---

## ✍️ Tipografia

### Hierarquia Tipográfica

| Função | Família | CSS Variable | Características | Uso |
|--------|---------|--------------|-----------------|-----|
| **Principal** | Uncut Sans | `--font-primary` | Sans moderna e acolhedora. Limpa, legível, direta | Títulos e textos do corpo |
| **Secundária** | Instrument Serif Italic | `--font-secondary` | Serif leve e expressiva. Contraste e emoção | Títulos curtos, chamadas especiais |
| **Display** | Schabo Condensed | `--font-display` | Tipografia compacta e forte com letter-spacing 0.08em | Slogans, chamadas, peças promocionais |

### Classes de Tipografia

```css
/* Display Typography - Schabo Condensed */
.text-display          /* Base display style */
.text-display-lg       /* 4rem - Grande impacto */
.text-display-md       /* 3rem - Médio impacto */
.text-display-sm       /* 2rem - Pequeno impacto */

/* Secondary Typography - Instrument Serif */
.text-serif-italic     /* Para contraste emocional */
.serif-accent          /* Alias para text-serif-italic */

/* Primary Typography - Uncut Sans */
.text-primary-font     /* Texto padrão com Uncut Sans */
```

**Nota:** Todas as classes display incluem:
- `letter-spacing: 0.08em` (80% tracking)
- `text-transform: uppercase`
- `font-weight: 700`

---

## 🎯 Componentes

### Botões CTA

#### CTA Principal (Verde)
```html
<button class="cta-button">
  Começar Agora
</button>
```
- Fundo: Gradiente verde-bud → deep-teal
- Hover: Efeito de glow com verde-claro
- Shadow: Verde-bud com transparência

#### CTA Comunidade (Rosa)
```html
<button class="cta-button-community">
  Junte-se à Comunidade
</button>
```
- Fundo: Gradiente rosa-vivo
- Para ações emocionais/comunitárias
- Shadow: Rosa-vivo com transparência

#### Botão Secundário
```html
<button class="secondary-button">
  Saiba Mais
</button>
```
- Borda verde-bud
- Hover: Preenche com verde-bud

---

### Badges

```html
<!-- Badge de Educação -->
<span class="badge-education">Aprenda</span>

<!-- Badge de Conquistas -->
<span class="badge-achievement">Nova Conquista!</span>

<!-- Badge de Dados -->
<span class="badge-data">Relatório</span>

<!-- Badge de Crescimento -->
<span class="badge-growth">+15%</span>

<!-- Badge de Comunidade -->
<span class="badge-community">Popular</span>
```

| Classe | Cor de Fundo | Uso Semântico |
|--------|--------------|---------------|
| `.badge-education` | Lilás-claro | Educação, onboarding, tutoriais |
| `.badge-achievement` | Rosa-suave | Conquistas, mensagens, celebrações |
| `.badge-data` | Azul-suave | Dados, relatórios, analytics |
| `.badge-growth` | Verde-claro | Crescimento, progresso, +% |
| `.badge-community` | Rosa-vivo | Comunidade, social, destaque |

---

### Seções e Backgrounds

```html
<!-- Seção com fundo branco puro -->
<section class="section-light">...</section>

<!-- Seção com off-white (respirável) -->
<section class="section-soft">...</section>

<!-- Seção de dados/relatórios -->
<section class="section-data">...</section>

<!-- Seção educacional -->
<section class="section-education">...</section>

<!-- Seção de conquistas -->
<section class="section-achievement">...</section>
```

#### Backgrounds Suaves

```html
<div class="bg-primary-soft">Verde-bud suave (10% opacity)</div>
<div class="bg-growth-soft">Verde-claro suave (15% opacity)</div>
<div class="bg-community-soft">Rosa-vivo suave (8% opacity)</div>
```

---

### Cores de Texto

```html
<p class="text-primary">Verde Bud</p>
<p class="text-primary-light">Verde Claro</p>
<p class="text-accent">Rosa Vivo</p>
<p class="text-accent-secondary">Lilás Claro</p>
<p class="text-muted-soft">Texto secundário</p>
```

---

## 💡 Diretrizes de Uso

### Visual Hierárquico

1. **Fundos**
   - Preferir off-white ou azul-suave para áreas principais
   - Branco puro para cards e contraste máximo
   - Evitar fundos muito escuros; manter estética leve e respirável

2. **Destaques**
   - Verde Bud ou Verde-claro para elementos principais
   - Rosa-vivo para CTAs emocionais/comunitários
   - Lilás e Azul para educação e dados

3. **Texto**
   - Preto (#000000) para tipografia principal
   - Verde Bud para links e elementos interativos
   - Rosa-vivo para chamadas de ação emocionais

### Boas Práticas

- ✅ Use off-white como base principal (mais confortável que branco puro)
- ✅ Reserve rosa-vivo para momentos de emoção/comunidade
- ✅ Use lilás-claro para guiar usuários em onboarding
- ✅ Azul-suave para seções de dados/analytics
- ✅ Verde-claro para indicadores de sucesso/crescimento
- ❌ Evite usar muitas cores de acento simultaneamente
- ❌ Não use verde muito escuro (evita clichê de dispensário)

---

## 🚀 Exemplos de Uso

### Hero Section
```html
<section class="hero-organic">
  <h1 class="text-display-lg text-primary">
    CULTIVE SEU SUCESSO
  </h1>
  <p class="text-serif-italic text-xl">
    A plataforma completa para cultivadores modernos
  </p>
  <button class="cta-button">Começar Gratuitamente</button>
</section>
```

### Card de Educação
```html
<div class="card section-education">
  <span class="badge-education">Tutorial</span>
  <h3 class="text-primary-font">Como otimizar seu ciclo de luz</h3>
  <p class="text-muted-soft">Aprenda as melhores práticas...</p>
</div>
```

### Estatística de Crescimento
```html
<div class="section-data p-6 rounded-xl">
  <span class="badge-growth">+24%</span>
  <h4 class="text-display-sm text-primary">PRODUTIVIDADE</h4>
  <p class="text-muted-soft">este mês</p>
</div>
```

---

## 📦 Arquivos de Referência

- **CSS Principal:** `src/react-app/styles.css`
- **Design Files:** `/home/krolow/Downloads/04 - MyBud - Arquivos Finalizados/`

---

**Última atualização:** Outubro 2025  
**Versão:** 2.0 - MyBud Design System

