/**
 * Pre-rendering script for mybud landing pages
 * Generates static HTML files for better SEO and faster initial load
 * Languages: PT, EN, ES
 * Pages: Grower (B2C), Collective, Industry
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const distPath = join(__dirname, '../dist/client');

// Read the base index.html template
const indexHtmlPath = join(distPath, 'index.html');
let baseHtml = readFileSync(indexHtmlPath, 'utf-8');

// SEO content by language and page type
const seoContent = {
  pt: {
    grower: {
      title: 'mybud – Diário Inteligente de Cultivo de Cannabis | Organize seu Grow',
      description: 'O app definitivo para growers: registre por voz, acompanhe timeline por planta, receba lembretes inteligentes e nunca mais perca rega ou colheita. Beta gratuito disponível.',
      url: 'https://mybud.app/pt/grower',
      locale: 'pt_BR',
      keywords: 'cultivo cannabis, diário de cultivo, grow app, app cannabis, registro por voz, timeline de plantas, lembretes cultivo, mybud'
    },
    collective: {
      title: 'MyBud Collective — O padrão que vai profissionalizar o cultivo coletivo',
      description: 'Transforme seu cultivo em dados, relatórios e credibilidade. O MyBud Collective traz rastreabilidade, transparência e confiança para associações e clubes canábicos no Brasil.',
      url: 'https://mybud.app/pt/collective',
      locale: 'pt_BR',
      keywords: 'cultivo coletivo, associação cannabis, rastreabilidade cannabis, gestão cultivo, clube canábico, mybud collective'
    },
    industry: {
      title: 'MyBud Industry — Onde marcas, breeders e fabricantes se conectam ao cultivo de forma ética',
      description: 'No MyBud, sua marca aparece no momento certo e com propósito, o primeiro canal legítimo e ético entre indústria e cultivo.',
      url: 'https://mybud.app/pt/industry',
      locale: 'pt_BR',
      keywords: 'marketing cannabis, B2B cannabis, marcas cannabis, fabricantes insumos, integração marca, mybud industry'
    }
  },
  en: {
    grower: {
      title: 'mybud – Smart Cannabis Growing Diary | Organize Your Grow',
      description: 'The ultimate app for growers: voice notes, plant timeline tracking, smart reminders. Never miss watering or harvest again. Free beta available.',
      url: 'https://mybud.app/en/grower',
      locale: 'en_US',
      keywords: 'cannabis cultivation, grow diary, grow app, cannabis app, voice recording, plant timeline, grow reminders, mybud'
    },
    collective: {
      title: 'Mybud Collective — Organize and standardize collective cultivation',
      description: 'From clone to extraction: standardize processes, manage teams, and maintain compliance with complete traceability. A system scaled to your grow.',
      url: 'https://mybud.app/en/collective',
      locale: 'en_US',
      keywords: 'collective cultivation, cannabis association, cannabis traceability, grow management, cannabis club, mybud collective'
    },
    industry: {
      title: 'MyBud Industry — Where brands, breeders, and manufacturers connect ethically with cultivation',
      description: 'In MyBud, your brand appears at the right time with purpose, the first legitimate and ethical channel between industry and cultivation.',
      url: 'https://mybud.app/en/industry',
      locale: 'en_US',
      keywords: 'cannabis marketing, B2B cannabis, cannabis brands, manufacturers, brand integration, mybud industry'
    }
  },
  es: {
    grower: {
      title: 'mybud – Diario Inteligente de Cultivo de Cannabis | Organiza tu Grow',
      description: 'La app definitiva para cultivadores: grabación por voz, línea de tiempo por planta, recordatorios inteligentes. No pierdas más riegos ni cosechas. Beta gratis disponible.',
      url: 'https://mybud.app/es/grower',
      locale: 'es_ES',
      keywords: 'cultivo cannabis, diario cultivo, app grow, app cannabis, grabación voz, timeline plantas, recordatorios cultivo, mybud'
    },
    collective: {
      title: 'Mybud Collective — Organiza y estandariza el cultivo colectivo',
      description: 'Del clon a la extracción: estandariza procesos, gestiona equipos y mantén conformidad con trazabilidad completa. Un sistema a la medida de tu cultivo.',
      url: 'https://mybud.app/es/collective',
      locale: 'es_ES',
      keywords: 'cultivo colectivo, asociación cannabis, trazabilidad cannabis, gestión cultivo, club cannábico, mybud collective'
    },
    industry: {
      title: 'MyBud Industry — Donde marcas, breeders y fabricantes se conectan al cultivo de forma ética',
      description: 'En MyBud, tu marca aparece en el momento exacto y con propósito, el primer canal legítimo y ético entre industria y cultivo.',
      url: 'https://mybud.app/es/industry',
      locale: 'es_ES',
      keywords: 'marketing cannabis, B2B cannabis, marcas cannabis, fabricantes, integración marca, mybud industry'
    }
  }
};

/**
 * Replace environment variables in HTML
 * Cloudflare Workers will have these in wrangler.json vars
 */
function replaceEnvVars(html) {
  // Get env vars from wrangler.json or process.env
  const GA_ID = process.env.VITE_GA_MEASUREMENT_ID || 'G-CM13QM5GHG';
  
  // Replace %VITE_GA_MEASUREMENT_ID% with actual value
  html = html.replace(/%VITE_GA_MEASUREMENT_ID%/g, GA_ID);
  
  return html;
}

/**
 * Inject SEO meta tags into HTML
 */
function injectSEO(html, seo) {
  // Update title
  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${seo.title}</title>`
  );
  
  // Update meta title
  html = html.replace(
    /<meta\s+name="title"\s+content=".*?".*?>/,
    `<meta name="title" content="${seo.title}" />`
  );
  
  // Update meta description
  html = html.replace(
    /<meta name="description" content=".*?".*?>/,
    `<meta name="description" content="${seo.description}" />`
  );
  
  // Update keywords
  html = html.replace(
    /<meta name="keywords" content=".*?".*?>/,
    `<meta name="keywords" content="${seo.keywords}" />`
  );
  
  // Update OG tags
  html = html.replace(
    /<meta property="og:title" content=".*?".*?>/,
    `<meta property="og:title" content="${seo.title}" />`
  );
  html = html.replace(
    /<meta property="og:description" content=".*?".*?>/,
    `<meta property="og:description" content="${seo.description}" />`
  );
  html = html.replace(
    /<meta property="og:url" content=".*?".*?>/,
    `<meta property="og:url" content="${seo.url}" />`
  );
  html = html.replace(
    /<meta property="og:locale" content=".*?".*?>/,
    `<meta property="og:locale" content="${seo.locale}" />`
  );
  
  // Update Twitter tags
  html = html.replace(
    /<meta property="twitter:title" content=".*?".*?>/,
    `<meta property="twitter:title" content="${seo.title}" />`
  );
  html = html.replace(
    /<meta property="twitter:description" content=".*?".*?>/,
    `<meta property="twitter:description" content="${seo.description}" />`
  );
  html = html.replace(
    /<meta property="twitter:url" content=".*?".*?>/,
    `<meta property="twitter:url" content="${seo.url}" />`
  );
  
  // Update canonical
  html = html.replace(
    /<link rel="canonical" href=".*?".*?>/,
    `<link rel="canonical" href="${seo.url}" />`
  );
  
  // Update html lang attribute
  const langCode = seo.locale.split('_')[0];
  html = html.replace(
    /<html lang=".*?".*?>/,
    `<html lang="${langCode}" class="scroll-smooth">`
  );
  
  return html;
}

console.log('🚀 Starting pre-rendering process...\n');

// Generate pages for all languages
const languages = ['pt', 'en', 'es'];
const pageTypes = ['grower', 'collective', 'industry'];
let generatedCount = 0;

// Generate root redirect page (Portuguese grower default)
let rootHtml = injectSEO(baseHtml, seoContent.pt.grower);
rootHtml = replaceEnvVars(rootHtml);
writeFileSync(indexHtmlPath, rootHtml, 'utf-8');
console.log('✅ Root index.html (redirects to /pt/grower)');
generatedCount++;

// Generate pages for each language and page type
for (const lang of languages) {
  for (const pageType of pageTypes) {
    const pageDir = join(distPath, lang, pageType);
    
    try {
      mkdirSync(pageDir, { recursive: true });
    } catch (err) {
      // Directory might already exist
    }
    
    let pageHtml = injectSEO(baseHtml, seoContent[lang][pageType]);
    pageHtml = replaceEnvVars(pageHtml);
    const pagePath = join(pageDir, 'index.html');
    writeFileSync(pagePath, pageHtml, 'utf-8');
    console.log(`✅ ${pageType} page: /${lang}/${pageType}/index.html`);
    generatedCount++;
  }
}

// Generate redirect pages for language-less URLs
for (const pageType of pageTypes) {
  const redirectDir = join(distPath, pageType);
  try {
    mkdirSync(redirectDir, { recursive: true });
  } catch (err) {
    // Directory might already exist
  }
  let redirectHtml = injectSEO(baseHtml, seoContent.pt[pageType]);
  redirectHtml = replaceEnvVars(redirectHtml);
  const redirectPath = join(redirectDir, 'index.html');
  writeFileSync(redirectPath, redirectHtml, 'utf-8');
  console.log(`✅ /${pageType}/index.html (redirects to /pt/${pageType})`);
  generatedCount++;
}

console.log(`\n🎉 Pre-rendering complete! Generated ${generatedCount} static HTML files for SEO.`);
console.log('📊 Languages: PT, EN, ES');
console.log('📄 Pages: Grower, Collective, Industry per language\n');

