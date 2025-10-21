/**
 * Pre-rendering script for mybud landing pages
 * Generates static HTML files for better SEO and faster initial load
 * Now supports multiple languages: PT, EN, ES
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
    b2c: {
      title: 'mybud – Diário Inteligente de Cultivo de Cannabis | Organize seu Grow',
      description: 'O app definitivo para growers: registre por voz, acompanhe timeline por planta, receba lembretes inteligentes e nunca mais perca rega ou colheita. Beta gratuito disponível.',
      url: 'https://lp.mybud.app/pt',
      locale: 'pt_BR',
      keywords: 'cultivo cannabis, diário de cultivo, grow app, app cannabis, registro por voz, timeline de plantas, lembretes cultivo, mybud'
    },
    b2b: {
      title: 'mybud B2B - Valide Sua Marca no Cultivo Real | Dados & Prova Social',
      description: 'Transforme growers em embaixadores. Dados reais de uso, prova social autêntica e métricas de adesão para marcas de insumos, equipamentos e associações canábicas.',
      url: 'https://lp.mybud.app/pt/b2b',
      locale: 'pt_BR',
      keywords: 'marketing cannabis, B2B cannabis, dados cultivo, prova social, embaixadores marca, insumos cannabis'
    }
  },
  en: {
    b2c: {
      title: 'mybud – Smart Cannabis Growing Diary | Organize Your Grow',
      description: 'The ultimate app for growers: voice notes, plant timeline tracking, smart reminders. Never miss watering or harvest again. Free beta available.',
      url: 'https://lp.mybud.app/en',
      locale: 'en_US',
      keywords: 'cannabis cultivation, grow diary, grow app, cannabis app, voice recording, plant timeline, grow reminders, mybud'
    },
    b2b: {
      title: 'mybud B2B - Validate Your Brand in Real Cultivation | Data & Social Proof',
      description: 'Turn growers into ambassadors. Real usage data, authentic social proof and adoption metrics for brands, manufacturers and cannabis associations.',
      url: 'https://lp.mybud.app/en/b2b',
      locale: 'en_US',
      keywords: 'cannabis marketing, B2B cannabis, cultivation data, social proof, brand ambassadors, cannabis supplies'
    }
  },
  es: {
    b2c: {
      title: 'mybud – Diario Inteligente de Cultivo de Cannabis | Organiza tu Grow',
      description: 'La app definitiva para cultivadores: grabación por voz, línea de tiempo por planta, recordatorios inteligentes. No pierdas más riegos ni cosechas. Beta gratis disponible.',
      url: 'https://lp.mybud.app/es',
      locale: 'es_ES',
      keywords: 'cultivo cannabis, diario cultivo, app grow, app cannabis, grabación voz, timeline plantas, recordatorios cultivo, mybud'
    },
    b2b: {
      title: 'mybud B2B - Valida Tu Marca en el Cultivo Real | Datos y Prueba Social',
      description: 'Convierte cultivadores en embajadores. Datos reales de uso, prueba social auténtica y métricas de adopción para marcas, fabricantes y asociaciones cannábicas.',
      url: 'https://lp.mybud.app/es/b2b',
      locale: 'es_ES',
      keywords: 'marketing cannabis, B2B cannabis, datos cultivo, prueba social, embajadores marca, insumos cannabis'
    }
  }
};

/**
 * Replace environment variables in HTML
 * Cloudflare Workers will have these in wrangler.json vars
 */
function replaceEnvVars(html) {
  // Get env vars from wrangler.json or process.env
  const GA_ID = process.env.VITE_GA_MEASUREMENT_ID || 'G-M1N4DR4ZZ6';
  
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
let generatedCount = 0;

// Generate root redirect page (Portuguese default)
let rootHtml = injectSEO(baseHtml, seoContent.pt.b2c);
rootHtml = replaceEnvVars(rootHtml);
writeFileSync(indexHtmlPath, rootHtml, 'utf-8');
console.log('✅ Root index.html (redirects to /pt)');
generatedCount++;

// Generate B2C pages for each language
for (const lang of languages) {
  const langDir = join(distPath, lang);
  
  try {
    mkdirSync(langDir, { recursive: true });
  } catch (err) {
    // Directory might already exist
  }
  
  let b2cHtml = injectSEO(baseHtml, seoContent[lang].b2c);
  b2cHtml = replaceEnvVars(b2cHtml);
  const b2cPath = join(langDir, 'index.html');
  writeFileSync(b2cPath, b2cHtml, 'utf-8');
  console.log(`✅ B2C page: /${lang}/index.html`);
  generatedCount++;
}

// Generate B2B pages for each language
for (const lang of languages) {
  const b2bDir = join(distPath, lang, 'b2b');
  
  try {
    mkdirSync(b2bDir, { recursive: true });
  } catch (err) {
    // Directory might already exist
  }
  
  let b2bHtml = injectSEO(baseHtml, seoContent[lang].b2b);
  b2bHtml = replaceEnvVars(b2bHtml);
  const b2bPath = join(b2bDir, 'index.html');
  writeFileSync(b2bPath, b2bHtml, 'utf-8');
  console.log(`✅ B2B page: /${lang}/b2b/index.html`);
  generatedCount++;
}

// Also create /b2b redirect (Portuguese default)
const b2bRootDir = join(distPath, 'b2b');
try {
  mkdirSync(b2bRootDir, { recursive: true });
} catch (err) {
  // Directory might already exist
}
let b2bRootHtml = injectSEO(baseHtml, seoContent.pt.b2b);
b2bRootHtml = replaceEnvVars(b2bRootHtml);
const b2bRootPath = join(b2bRootDir, 'index.html');
writeFileSync(b2bRootPath, b2bRootHtml, 'utf-8');
console.log('✅ /b2b/index.html (redirects to /pt/b2b)');
generatedCount++;

console.log(`\n🎉 Pre-rendering complete! Generated ${generatedCount} static HTML files for SEO.`);
console.log('📊 Languages: PT, EN, ES');
console.log('📄 Pages: B2C + B2B per language\n');

