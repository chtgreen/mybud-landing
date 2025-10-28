import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';
import type { Language } from '../lib/i18n';

interface SEOProps {
  pageType: 'b2c' | 'b2b';
}

const SEO: React.FC<SEOProps> = ({ pageType }) => {
  const { currentLanguage } = useLanguage();

  const baseUrl = 'https://mybud.app';
  const currentUrl = pageType === 'b2b' ? `${baseUrl}/b2b` : baseUrl;

  type SEOConfig = {
    title: string;
    description: string;
    keywords: string;
  };

  // SEO content for B2C page
  const b2cSEO: Record<Language, SEOConfig> = {
    pt: {
      title: 'mybud - Diário Inteligente de Cultivo de Cannabis | Organize seu Grow',
      description: 'O app definitivo para growers: registre por voz, acompanhe timeline por planta, receba lembretes inteligentes e nunca mais perca rega ou colheita. Beta gratuito disponível.',
      keywords: 'cultivo cannabis, diário de cultivo, grow app, app cannabis, registro por voz, timeline de plantas, lembretes cultivo, mybud',
    },
    en: {
      title: 'mybud - Smart Cannabis Growing Journal | Organize Your Grow',
      description: 'The ultimate app for growers: voice notes, plant timelines, smart reminders. Never miss a watering or harvest again. Free beta available.',
      keywords: 'cannabis growing, grow journal, grow app, cannabis app, voice notes, plant timeline, grow reminders, mybud',
    },
    es: {
      title: 'mybud - Diario Inteligente de Cultivo de Cannabis | Organiza tu Cultivo',
      description: 'La app definitiva para cultivadores: registro por voz, línea de tiempo por planta, recordatorios inteligentes. Beta gratuito disponible.',
      keywords: 'cultivo cannabis, diario de cultivo, grow app, app cannabis, notas por voz, línea de tiempo plantas, recordatorios cultivo, mybud',
    },
  };

  // SEO content for B2B page
  const b2bSEO: Record<Language, SEOConfig> = {
    pt: {
      title: 'mybud B2B - Valide Sua Marca no Cultivo Real | Insights de Uso & Prova Social',
      description: 'Transforme growers em embaixadores. Insights reais de como usam seus produtos, prova social autêntica e métricas de adesão para marcas de insumos, equipamentos e associações canábicas.',
      keywords: 'cannabis b2b, marketing cannabis, uso produtos cultivo, prova social cannabis, parcerias cannabis, insumos cannabis, equipamentos grow, associações canábicas',
    },
    en: {
      title: 'mybud B2B - Validate Your Brand in Real Growing | Usage Insights & Social Proof',
      description: 'Turn growers into brand ambassadors. Real insights on how they use your products, authentic social proof, and adoption metrics for nutrient brands, equipment manufacturers, and cannabis associations.',
      keywords: 'cannabis b2b, cannabis marketing, product usage insights, cannabis social proof, cannabis partnerships, grow equipment, cannabis associations',
    },
    es: {
      title: 'mybud B2B - Valida Tu Marca en Cultivo Real | Insights de Uso & Prueba Social',
      description: 'Convierte cultivadores en embajadores. Insights reales de cómo usan tus productos, prueba social auténtica y métricas de adopción para marcas de insumos, equipos y asociaciones cannábicas.',
      keywords: 'cannabis b2b, marketing cannabis, uso productos cultivo, prueba social cannabis, alianzas cannabis, insumos cannabis, equipos grow, asociaciones cannábicas',
    },
  };

  const seo = pageType === 'b2c' ? b2cSEO[currentLanguage] : b2bSEO[currentLanguage];

  // Organization structured data
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'mybud',
    url: baseUrl,
    logo: `${baseUrl}/mybud-logo-green.svg`,
    description:
      currentLanguage === 'pt'
        ? 'Diário inteligente de cultivo de cannabis com registro por voz e timeline visual'
        : currentLanguage === 'es'
        ? 'Diario inteligente de cultivo de cannabis con registro por voz y línea de tiempo visual'
        : 'Smart cannabis growing journal with voice notes and visual timeline',
    sameAs: [
      'https://instagram.com/mybud.app',
      'https://linkedin.com/company/mybud-app',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'comercial@mybud.app',
      contactType: 'Sales',
    },
  };

  // Product structured data for B2C
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'mybud',
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'iOS, Android',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'BRL',
      availability: 'https://schema.org/InStock',
      description:
        currentLanguage === 'pt'
          ? 'Beta gratuito com acesso antecipado'
          : currentLanguage === 'es'
          ? 'Beta gratuito con acceso anticipado'
          : 'Free beta with early access',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
  };

  // FAQ structured data
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name:
          currentLanguage === 'pt'
            ? 'O app já está disponível nas lojas?'
            : currentLanguage === 'es'
            ? '¿La app ya está disponible en las tiendas?'
            : 'Is the app available in stores?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            currentLanguage === 'pt'
              ? 'Ainda não. Estamos em beta fechado. Quem entra agora garante até 6 meses Premium gratuitamente.'
              : currentLanguage === 'es'
              ? 'Aún no. Estamos en beta cerrado. Quien entra ahora obtiene hasta 6 meses Premium gratis.'
              : 'Not yet. We are in closed beta. Early users get up to 6 months Premium free.',
        },
      },
      {
        '@type': 'Question',
        name:
          currentLanguage === 'pt'
            ? 'Meus dados são privados?'
            : currentLanguage === 'es'
            ? '¿Mis datos son privados?'
            : 'Are my data private?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            currentLanguage === 'pt'
              ? 'Sim. Você controla tudo. Os dados são criptografados e anônimos.'
              : currentLanguage === 'es'
              ? 'Sí. Tú controlas todo. Los datos están encriptados y son anónimos.'
              : 'Yes. You control everything. Data is encrypted and anonymous.',
        },
      },
      {
        '@type': 'Question',
        name:
          currentLanguage === 'pt'
            ? 'Quanto vai custar depois do beta?'
            : currentLanguage === 'es'
            ? '¿Cuánto costará después del beta?'
            : 'How much will it cost after beta?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            currentLanguage === 'pt'
              ? 'A versão Premium custará R$ 30/mês. Beta testers ganham meses grátis.'
              : currentLanguage === 'es'
              ? 'La versión Premium costará R$ 30/mes. Los beta testers obtienen meses gratis.'
              : 'Premium version will be R$ 30/month. Beta testers get free months.',
        },
      },
    ],
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang={currentLanguage} />
      <title>{seo.title}</title>
      <meta name="title" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={`${baseUrl}/mybud-og-image.png`} />
      <meta property="og:site_name" content="mybud" />
      <meta
        property="og:locale"
        content={currentLanguage === 'pt' ? 'pt_BR' : currentLanguage === 'es' ? 'es_ES' : 'en_US'}
      />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={seo.title} />
      <meta property="twitter:description" content={seo.description} />
      <meta property="twitter:image" content={`${baseUrl}/mybud-og-image.png`} />

      {/* Alternate Languages */}
      <link rel="alternate" hrefLang="pt" href={pageType === 'b2b' ? `${baseUrl}/b2b?lang=pt` : `${baseUrl}?lang=pt`} />
      <link rel="alternate" hrefLang="en" href={pageType === 'b2b' ? `${baseUrl}/b2b?lang=en` : `${baseUrl}?lang=en`} />
      <link rel="alternate" hrefLang="es" href={pageType === 'b2b' ? `${baseUrl}/b2b?lang=es` : `${baseUrl}?lang=es`} />
      <link rel="alternate" hrefLang="x-default" href={currentUrl} />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      {pageType === 'b2c' && (
        <>
          <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        </>
      )}

      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="author" content="mybud" />
      <meta name="theme-color" content="#10b981" />
    </Helmet>
  );
};

export default SEO;
