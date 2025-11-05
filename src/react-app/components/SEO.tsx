import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';
import type { Language } from '../lib/i18n';

interface SEOProps {
  pageType: 'b2c' | 'b2b' | 'industry' | 'collective' | 'enterprise';
}

const SEO: React.FC<SEOProps> = ({ pageType }) => {
  const { currentLanguage } = useLanguage();

  const baseUrl = 'https://mybud.app';
  const currentUrl = pageType === 'b2b' || pageType === 'industry'
    ? `${baseUrl}/industry` 
    : pageType === 'collective'
      ? `${baseUrl}/collective`
      : pageType === 'enterprise'
        ? `${baseUrl}/collective`
        : `${baseUrl}/grower`;

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

  // SEO content for B2B/Industry page
  const industrySEO: Record<Language, SEOConfig> = {
    pt: {
      title: 'MyBud Industry — Onde marcas, breeders e fabricantes se conectam ao cultivo de forma ética',
      description: 'No MyBud, sua marca aparece no momento certo e com propósito, o primeiro canal legítimo e ético entre indústria e cultivo.',
      keywords: 'cannabis industry, marketing cannabis, breeders cannabis, fabricantes cannabis, marcas cannabis, integração cultivo, protocolo cultivo, growers hub',
    },
    en: {
      title: 'MyBud Industry — Where brands, breeders, and manufacturers connect ethically with cultivation',
      description: 'In MyBud, your brand appears at the right time with purpose, the first legitimate and ethical channel between industry and cultivation.',
      keywords: 'cannabis industry, cannabis marketing, cannabis breeders, cannabis manufacturers, cannabis brands, grow integration, cultivation protocol, growers hub',
    },
    es: {
      title: 'MyBud Industry — Donde marcas, breeders y fabricantes se conectan al cultivo de forma ética',
      description: 'En MyBud, tu marca aparece en el momento exacto y con propósito, el primer canal legítimo y ético entre industria y cultivo.',
      keywords: 'cannabis industry, marketing cannabis, breeders cannabis, fabricantes cannabis, marcas cannabis, integración cultivo, protocolo cultivo, growers hub',
    },
  };

  // SEO content for Collective page
  const collectiveSEO: Record<Language, SEOConfig> = {
    pt: {
      title: 'mybud Collective - Organize e Padronize o Cultivo Coletivo',
      description: 'Do clone à extração: padronize processos, gerencie equipes e mantenha conformidade com rastreabilidade completa. O sistema do tamanho do seu cultivo. Ideal para associações canábicas, clubes e cultivos coletivos.',
      keywords: 'cannabis collective, cultivo coletivo, associações canábicas, clubes cannabis, padronização cultivo, rastreabilidade cannabis, gestão coletiva, compliance cannabis, cultivo associativo',
    },
    en: {
      title: 'mybud Collective - Organize and Standardize Collective Cultivation',
      description: 'From clone to extraction: standardize processes, manage teams, and maintain compliance with complete traceability. A system scaled to your grow. Ideal for cannabis associations, clubs, and collective grows.',
      keywords: 'cannabis collective, collective cultivation, cannabis associations, cannabis clubs, cultivation standardization, cannabis traceability, collective management, cannabis compliance, associative cultivation',
    },
    es: {
      title: 'mybud Collective - Organiza y Estandariza el Cultivo Colectivo',
      description: 'Del clon a la extracción: estandariza procesos, gestiona equipos y mantén conformidad con trazabilidad completa. Un sistema a la medida de tu cultivo. Ideal para asociaciones cannábicas, clubes y cultivos colectivos.',
      keywords: 'cannabis collective, cultivo colectivo, asociaciones cannábicas, clubes cannabis, estandarización cultivo, trazabilidad cannabis, gestión colectiva, cumplimiento cannabis, cultivo asociativo',
    },
  };

  // SEO content for Enterprise page
  const enterpriseSEO: Record<Language, SEOConfig> = {
    pt: {
      title: 'mybud Enterprise - Gestão Profissional para Associações e Grandes Cultivos',
      description: 'Controle total do cultivo coletivo com rastreabilidade completa, relatórios automáticos e dados 100% sob sua propriedade. Ideal para associações canábicas e pequenas facilities.',
      keywords: 'cannabis enterprise, associações canábicas, gestão cultivo coletivo, rastreabilidade cannabis, relatórios automáticos cannabis, compliance cannabis, cultivo medicinal',
    },
    en: {
      title: 'mybud Enterprise - Professional Management for Associations and Large Grows',
      description: 'Full control of collective cultivation with complete traceability, automatic reports, and 100% data ownership. Ideal for cannabis associations and small facilities.',
      keywords: 'cannabis enterprise, cannabis associations, collective grow management, cannabis traceability, automatic cannabis reports, cannabis compliance, medical cannabis',
    },
    es: {
      title: 'mybud Enterprise - Gestión Profesional para Asociaciones y Cultivos Grandes',
      description: 'Control total del cultivo colectivo con trazabilidad completa, informes automáticos y datos 100% bajo tu propiedad. Ideal para asociaciones cannábicas y pequeñas instalaciones.',
      keywords: 'cannabis enterprise, asociaciones cannábicas, gestión cultivo colectivo, trazabilidad cannabis, informes automáticos cannabis, cumplimiento cannabis, cannabis medicinal',
    },
  };

  const seo = pageType === 'b2c' 
    ? b2cSEO[currentLanguage] 
    : pageType === 'collective'
      ? collectiveSEO[currentLanguage]
      : pageType === 'enterprise'
        ? enterpriseSEO[currentLanguage]
        : industrySEO[currentLanguage];

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
      'https://www.linkedin.com/company/cht-green/',
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
              ? 'A versão Premium custará R$ 39,90/mês. Beta testers ganham meses grátis.'
              : currentLanguage === 'es'
              ? 'La versión Premium costará R$ 39,90/mes. Los beta testers obtienen meses gratis.'
              : 'Premium version will be R$ 39.90/month. Beta testers get free months.',
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
      <link 
        rel="alternate" 
        hrefLang="pt" 
        href={
          pageType === 'b2b' || pageType === 'industry'
            ? `${baseUrl}/industry?lang=pt` 
            : pageType === 'collective'
              ? `${baseUrl}/collective?lang=pt`
              : pageType === 'enterprise'
                ? `${baseUrl}/collective?lang=pt`
                : `${baseUrl}/grower?lang=pt`
        } 
      />
      <link 
        rel="alternate" 
        hrefLang="en"
        href={
          pageType === 'b2b' || pageType === 'industry'
            ? `${baseUrl}/industry?lang=en` 
            : pageType === 'collective'
              ? `${baseUrl}/collective?lang=en`
              : pageType === 'enterprise'
                ? `${baseUrl}/collective?lang=en`
                : `${baseUrl}/grower?lang=en`
        }
      />
      <link 
        rel="alternate" 
        hrefLang="es"
        href={
          pageType === 'b2b' || pageType === 'industry'
            ? `${baseUrl}/industry?lang=es` 
            : pageType === 'collective'
              ? `${baseUrl}/collective?lang=es`
              : pageType === 'enterprise'
                ? `${baseUrl}/collective?lang=es`
                : `${baseUrl}/grower?lang=es`
        }
      />
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
