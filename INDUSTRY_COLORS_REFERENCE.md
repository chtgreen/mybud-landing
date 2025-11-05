# Industry Page - Color & Typography Reference

## 🎨 Color Palette (Unified & Professional)

### ✅ Primary Colors Used
```
Emerald-700: #047857 (main brand, icons, CTAs)
Emerald-600: #059669 (hover states, accents)
Emerald-50:  #ecfdf5 (light backgrounds, badges)
```

### ✅ Text Colors
```
Zinc-900: #18181b (headings)
Zinc-800: #27272a (subheadings)
Zinc-700: #3f3f46 (emphasized text)
Zinc-600: #52525b (body text)
Zinc-500: #71717a (secondary text)
```

### ✅ Neutral & Backgrounds
```
White:    #ffffff (cards, sections)
Gray-50:  #f9fafb (alternating sections)
Gray-100: #f3f4f6 (subtle borders)
Gray-200: #e5e7eb (card borders)
```

### ❌ Colors REMOVED
```
Blue-400:   #60a5fa (too bright)
Blue-600:   #2563eb (not brand)
Purple-400: #c084fc (too bright)
Purple-600: #9333ea (not brand)
Amber-200:  #fde68a (inconsistent)
Teal-600:   #0d9488 (competing color)
```

## 📝 Typography Scale

### Headings
```css
H1 (Hero): text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900
H2: text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900
H3: text-xl font-bold text-zinc-900
```

### Body Text
```css
Large: text-xl text-zinc-600 leading-relaxed
Regular: text-lg text-zinc-600 leading-relaxed
Small: text-base text-zinc-600
```

### Special Elements
```css
Badges: text-sm font-semibold text-emerald-800
Labels: text-xs font-semibold text-emerald-600/60 uppercase
Stats: text-2xl font-bold text-zinc-900
```

## 📐 Section Layout

```
┌─────────────────────────────────────────┐
│  Hero                                   │ ← Emerald gradient
│  (Light emerald-50 background)          │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  Problem                                │ ← White
│  (Clean white background)                │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  Three Ways                             │ ← White
│  (3 unified white cards)                 │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  Impact                                 │ ← Gray-50
│  (Testimonial on white card)             │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  Legitimacy                             │ ← Gray-50
│  (2 white cards)                         │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  Ecosystem                              │ ← White
│  (Network visualization)                 │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  Final CTA                              │ ← Emerald gradient
│  (Professional emerald-700)              │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  Lead Form                              │ ← Gray
└─────────────────────────────────────────┘
```

## 🎯 Key Visual Changes

### Before → After

**Three Ways Cards:**
```
Before: Colorful backgrounds (emerald/blue/purple gradients)
After:  Unified white cards with emerald accents
```

**Number Badges:**
```
Before: Bright colored numbers (emerald-400, blue-400, purple-400)
After:  Subtle "Step 01" labels in emerald-600/60
```

**Icons:**
```
Before: Mixed colors (emerald-600, blue-600, purple-600)
After:  All emerald-700
```

**Gradients:**
```
Before: emerald-600 → emerald-500 → teal-600
After:  emerald-700 → emerald-600 → emerald-700
```

**Shadows:**
```
Before: shadow-2xl (aggressive)
After:  shadow-xl, shadow-lg (professional)
```

## 🔍 How to Verify

1. **Open:** http://localhost:5173/industry (or /en/industry)
2. **Check:**
   - No blue or purple colors anywhere
   - All icons are emerald-700
   - Cards have consistent white backgrounds
   - Text is readable (zinc-600 body, zinc-900 headings)
   - Gradients are professional emerald tones
   - No missing text or translations
3. **Languages:** Test PT, EN, ES - all should work

## ✅ CEO Approval Checklist

- [ ] Colors look professional (not attention-grabbing)
- [ ] Fonts are consistent and readable
- [ ] All text is present (no missing translations)
- [ ] Bottom gradient looks polished (not too bright)
- [ ] Overall feel conveys "we care, we grow"
- [ ] Page looks modern and trustworthy

