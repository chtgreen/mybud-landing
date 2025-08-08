import { useState, useEffect } from 'react';
import posthog from 'posthog-js';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollEnhancement } from '../hooks/useScrollEnhancement';
import { setContentOverride } from '../lib/i18n';
import Header from '../components/Header';

import Hero from '../components/Hero';
import FeaturesSection from '../components/FeaturesSection';
import AppShowcase from '../components/AppShowcase';
import IdentityTrust from '../components/IdentityTrust';
import Testimonials from '../components/Testimonials';
import BetaSignup from '../components/BetaSignup';
import Footer from '../components/Footer';

import BetaModal from '../components/BetaModal';
import Sponsorship from '../components/Sponsorship';
import Stats from '../components/Stats';
import FAQ from '../components/FAQ';

// B2B Content Definition

interface B2BContent {
  hero: {
    title1: string;
    title2: string;
    title3: string;
    subtitle: string;
    overline?: string;
    primaryCta: string;
    secondaryCta?: string;
    trustElement: string;
  };
  features: {
    title: string;
    subtitle: string;
    journal: { title: string; description: string };
    voice: { title: string; description: string };
    alerts: { title: string; description: string };
    guides: { title: string; description: string };
  };
  appShowcase: {
    title: string;
    subtitle: string;
    dashboard: { title: string; desc: string };
    voice: { title: string; desc: string };
    qr: { title: string; desc: string };
    alerts: { title: string; desc: string };
  };
  sponsorship: {
    title: string;
    subtitle: string;
    cta: string;
    brandSticker?: string;
    sampleTask?: string;
    placeholder?: string;
  };
  stats: {
    title?: string;
    description?: string;
    note?: string;
    growers: string;
    growersLabel: string;
    repurchase: string;
    repurchaseLabel: string;
    countries: string;
    countriesLabel: string;
    users?: { value: string; label: string };
    engagement?: { value: string; label: string };
    retention?: { value: string; label: string };
    growth?: { value: string; label: string };
  };
  identityTrust: {
    title1: string;
    title2: string;
    description: string;
    private: { title: string; desc: string };
    community: { title: string; desc: string };
    tested: { title: string; desc: string };
    card1?: { title: string; description: string };
    card2?: { title: string; description: string };
    card3?: { title: string; description: string };
  };
  testimonials: {
    title: string;
    subtitle: string;
    1: { text: string; author: string; location: string };
    2: { text: string; author: string; location: string };
    3: { text: string; author: string; location: string };
    testimonial1?: { text: string; author: string; location: string };
  };
  faq: {
    title: string;
    subtitle: string;
    visible: {
      q1: { q: string; a: string };
      q2: { q: string; a: string };
      q3: { q: string; a: string };
      q4: { q: string; a: string };
      q5: { q: string; a: string };
    };
  };
  betaSignup: {
    title: string;
    subtitle: string;
    benefits: {
      title: string;
      premium: string;
      kit: string;
      access: string;
      priority: string;
    };
    qrDescription: string;
    supportButton: string;
    newsletterButton: string;
    newsletterTitle: string;
    newsletterDesc: string;
    emailPlaceholder: string;
    instagramPlaceholder: string;
    button: string;
    privacy: string;
    successMessage: string;
    errorMessage: string;
  };
  modal: {
    title: string;
    subtitle: string;
    fields: {
      company: string;
      fullName: string;
      email: string;
      category: string;
      objective: string;
      market: string;
      mediaKit: string;
    };
    submit: string;
  };
}

const b2bContent: B2BContent = {
  hero: {
    title1: 'Cresça vendas com uso real, não com promessas.',
    title2: '',
    title3: '',
    subtitle: 'Sua marca dentro da rotina do grower — visível nas tarefas, nas fotos e nos dados.',
    overline: 'Não cultivamos apenas variedades — cultivamos seus números de vendas.',
    primaryCta: 'Agendar conversa',
    secondaryCta: 'Pedir media kit',
    trustElement: ''
  },
  features: {
    title: 'Como funciona',
    subtitle: 'Marketing na cannabis é travado: restrições, pouco dado confiável e campanhas que não viram rotina. O My Bud coloca sua marca no momento certo do cultivo, dentro do app que o grower usa todos os dias — e entrega métricas que você realmente consegue acompanhar.',
    journal: {
      title: 'Passo 1 — Do rótulo para o app',
      description: 'Sua tabela vira tarefas acionáveis por fase. O QR na embalagem leva o cliente direto ao cronograma no My Bud.'
    },
    voice: {
      title: 'Passo 2 — Uso visível e útil',
      description: 'As tarefas aparecem no diário de cultivo com stickers nas fotos e vídeos. Sem anúncio forçado — presença natural dentro do que o grower já faz.'
    },
    alerts: {
      title: 'Passo 3 — Dados que importam',
      description: 'Você acompanha adesão ao cronograma, abandono, recompra e evidências visuais de uso. Dados agregados e anônimos, prontos para decisão.'
    },
    guides: {
      title: 'Passo 4 — Acompanha seus influencers',
      description: 'Acesso premium growers influencers estratégicos. Acompanhe cultivos em tempo real, stickers da marca e códigos únicos para trackear vendas.'
    }
  },
  appShowcase: {
    title: 'Tipos de parceria',
    subtitle: '',
    dashboard: {
      title: 'Sementes & breeders',
      desc: 'Catálogo vivo no app, genéticas atualizadas e presença no diário.'
    },
    voice: {
      title: 'Insumos e fertilizantes',
      desc: 'Sua linha vira tarefas por fase, com dicas, doses e provas de uso.'
    },
    qr: {
      title: 'Equipamentos',
      desc: 'LEDs, tendas, vasos e afins aparecendo no setup e nas ações do dia a dia.'
    },
    alerts: {
      title: 'Outro',
      desc: 'Consultoria, serviços, laboratórios — integração via My Bud.'
    }
  },
  sponsorship: {
    title: 'Presença que vira rotina.',
    subtitle: 'Patrocine perfis públicos estratégicos. Sua marca aparece nas tarefas, no diário e nas publicações com stickers de rega. Acompanhe como os criadores usam — e encontre novos perfis para patrocinar dentro do ecossistema.',
    cta: 'Agendar conversa',
    brandSticker: 'Sticker de marca',
    sampleTask: 'Aplicar nutrientes — Fase vegetativa'
  },
  stats: {
    title: 'Estamos atrás de números que contam',
    description: 'Com um app voltado e facilitado para o grow, já nascemos em 3 idiomas e temos a base para crescer. Estamos almejando parcerias que gerem impacto real — e estes são os números que esperamos alcançar juntos.*',
    note: '*Projeções baseadas em testes iniciais e mercado potencial.',
    growers: '10.000+',
    growersLabel: 'growers ativos (meta)',
    repurchase: '30%+',
    repurchaseLabel: 'recompra esperada com parcerias',
    countries: '3',
    countriesLabel: 'idiomas desde o lançamento'
  },
  identityTrust: {
    title1: 'Discrição e inteligência',
    title2: 'no mesmo lugar.',
    description: 'Relatórios éticos, com dados limpos e zero exposição desnecessária. Você vê adesão ao cronograma, abandono, recompra e fotos de uso. Tudo agregado, anônimo e pronto para decisão.',
    private: {
      title: 'Dados transparentes',
      desc: 'Métricas claras e acionáveis, sem caixas-pretas.'
    },
    community: {
      title: 'Feito em comunidade',
      desc: 'Desenvolvido com feedback real de cultivadores e marcas parceiras.'
    },
    tested: {
      title: 'Validado por marcas',
      desc: 'Testado e aprovado por quem já aumentou vendas com uso real.'
    }
  },
  testimonials: {
    title: 'Quem vai ser nosso parceiro?',
    subtitle: 'Ainda estamos começando mas já sabemos as respostas dos nossos parceiros.',
    1: {
      text: '"Viramos rotina do cliente sem parecer anúncio."',
      author: 'Equipe',
      location: 'Growshop Alpha'
    },
    2: {
      text: '“QR no rótulo → cronograma no app. Um toque, zero fricção.”',
      author: 'Time de Marketing',
      location: 'Marca de nutrientes'
    },
    3: {
      text: '“Patrocinar um grower público mostrou o produto em uso real — e virou venda.”',
      author: 'Patrocinador',
      location: 'Marca parceira'
    }
  },
  faq: {
    title: 'FAQ',
    subtitle: 'Respostas rápidas para começar certo.',
    visible: {
      q1: { q: 'Como a marca aparece e é medida?', a: 'Nas tarefas por fase, no diário público e na vitrine do perfil. Medimos adesão, abandono, recompra e evidências visuais, sempre de forma agregada e anônima.' },
      q2: { q: 'Posso personalizar minha vitrine?', a: 'Sim. Ficha técnica, vídeos, dicas e cronogramas alinhados à sua linha.' },
      q3: { q: 'Como funciona o patrocínio de growers públicos?', a: 'Você escolhe perfis estratégicos. A marca aparece nas postagens e tarefas desses perfis, com stickers nas publicações. Acompanhamento em tempo real do uso.' },
      q4: { q: 'Existe exclusividade por categoria?', a: 'Podemos trabalhar exclusividade por período e categoria em acordos estratégicos.' },
      q5: { q: 'Posso rastrear vendas ou leads?', a: 'Entregamos UTMs e cupons para atribuição, além de relatórios de recompra quando aplicável.' }
    }
  },
  betaSignup: {
    title: 'Pronto para colocar sua marca dentro do grow?',
    subtitle: 'Vamos conectar sua marca com quem cultiva de verdade.',
    benefits: {
      title: 'Se selecionado, você ganha:',
      premium: 'Acesso antecipado à plataforma',
      kit: 'Visibilidade destacada no app',
      access: 'Influência direta na construção do produto',
      priority: 'Posicionamento como referência na comunidade grower'
    },
    qrDescription: '',
    supportButton: 'Agendar conversa',
    newsletterButton: 'Agendar conversa',
    newsletterTitle: 'Pronto para colocar sua marca dentro do grow?',
    newsletterDesc: 'Vamos conectar sua marca com quem cultiva de verdade.',
    emailPlaceholder: 'E-mail',
    instagramPlaceholder: 'Site (opcional)',
    button: 'Agendar conversa',
    privacy: 'Ou peça o media kit: comercial@mybud.app',
    successMessage: 'Recebido! Vamos retornar em breve. 🚀',
    errorMessage: 'Algo deu errado. Tente novamente.'
  },
  modal: {
    title: 'Vamos conversar sobre performance real no cultivo.',
    subtitle: 'Conte em 30 segundos o que você quer alcançar e em quanto tempo. Voltamos com um plano direto ao ponto.',
    fields: {
      company: 'Nome da empresa',
      fullName: 'Nome e sobrenome',
      email: 'E-mail',
      category: 'Categoria',
      objective: 'Objetivo principal (texto curto)',
      market: 'Mercado-alvo (país/estado)',
      mediaKit: 'Quero receber o media kit por e-mail'
    },
    submit: 'Enviar e agendar'
  }
};

// --- Spanish B2B translations ---
const b2bContentEs: B2BContent = {
  hero: {
    title1: 'Haz crecer las ventas con uso real, no con promesas.',
    title2: '',
    title3: '',
    subtitle: 'Tu marca dentro de la rutina del cultivador — visible en las tareas, las fotos y los datos.',
    overline: 'No solo cultivamos variedades — cultivamos tus números de ventas.',
    primaryCta: 'Agendar una llamada',
    secondaryCta: 'Solicitar media kit',
    trustElement: ''
  },
  features: {
    title: 'Cómo funciona',
    subtitle: 'El marketing del cannabis está restringido y carece de datos confiables. My Bud coloca tu marca en el momento exacto del cultivo, dentro de la app que el cultivador usa todos los días — y entrega métricas que realmente puedes rastrear.',
    journal: {
      title: 'Paso 1 — De la etiqueta a la app',
      description: 'Tu tabla se convierte en tareas accionables por fase. El QR en el empaque lleva al cliente directamente al cronograma en My Bud.'
    },
    voice: {
      title: 'Paso 2 — Uso visible y útil',
      description: 'Las tareas aparecen en el diario de cultivo con stickers en fotos y videos. Sin anuncios forzados — presencia natural dentro de lo que el cultivador ya hace.'
    },
    alerts: {
      title: 'Paso 3 — Datos que importan',
      description: 'Sigues la adherencia al cronograma, abandono, recompra y evidencia visual de uso. Datos agregados y anónimos, listos para la decisión.'
    },
    guides: {
      title: 'Paso 4 — Sigue a tus influencers',
      description: 'Acceso premium a cultivadores influencers estratégicos. Sigue cultivos en tiempo real, stickers de marca y códigos únicos para rastrear ventas.'
    }
  },
  appShowcase: {
    title: 'Tipos de asociación',
    subtitle: '',
    dashboard: {
      title: 'Semillas y criadores',
      desc: 'Catálogo en vivo en la app, genética actualizada y presencia en el diario.'
    },
    voice: {
      title: 'Insumos y nutrientes',
      desc: 'Tu línea de productos se convierte en tareas por fase con consejos, dosis y prueba de uso.'
    },
    qr: {
      title: 'Equipamiento',
      desc: 'LEDs, carpas, macetas y más apareciendo en configuraciones de cultivo y tareas diarias.'
    },
    alerts: {
      title: 'Otros',
      desc: 'Consultoría, servicios, laboratorios — integración vía My Bud.'
    }
  },
  sponsorship: {
    title: 'Casos de éxito',
    subtitle: 'Marcas que ya están creciendo con nosotros.',
    cta: 'Unirse como socio',
    placeholder: 'Logo de marca asociada'
  },
  stats: {
    growers: '15K+',
    growersLabel: 'Cultivadores registrados',
    repurchase: '78%',
    repurchaseLabel: 'Tasa de recompra',
    countries: '12',
    countriesLabel: 'Países activos',
    users: {
      value: '15K+',
      label: 'Cultivadores registrados'
    },
    engagement: {
      value: '78%',
      label: 'Tasa de adherencia al cronograma'
    },
    retention: {
      value: '92%',
      label: 'Retención después de 30 días'
    },
    growth: {
      value: '340%',
      label: 'Crecimiento mensual'
    }
  },
  identityTrust: {
    title1: 'Confianza y',
    title2: 'Legitimidad',
    description: 'Somos serios sobre el cultivo y sobre los negocios.',
    private: {
      title: 'Equipo Técnico Real',
      desc: 'Agrónomos, desarrolladores y cultivadores con años de experiencia práctica.'
    },
    community: {
      title: 'Tecnología Probada',
      desc: 'Plataforma estable con más de 15.000 cultivadores activos y creciendo.'
    },
    tested: {
      title: 'Asociaciones Estratégicas',
      desc: 'Colaboramos con marcas establecidas y tiendas de confianza en el mercado.'
    }
  },
  testimonials: {
    title: 'Lo que dicen nuestros socios',
    subtitle: 'Resultados reales de marcas que confían en My Bud.',
    1: {
      text: 'Vemos exactamente cómo los cultivadores usan nuestros productos. Los datos son increíbles para el desarrollo de productos.',
      author: 'Socio',
      location: 'Marca asociada'
    },
    2: {
      text: 'La presencia orgánica en el diario es mucho más valiosa que cualquier anuncio tradicional.',
      author: 'Patrocinador',
      location: 'Marca asociada'
    },
    3: {
      text: 'Finalmente podemos medir el ROI real de nuestro marketing en cannabis.',
      author: 'Socio',
      location: 'Marca asociada'
    }
  },
  faq: {
    title: 'FAQ',
    subtitle: 'Respuestas rápidas para empezar bien.',
    visible: {
      q1: { q: '¿Cómo aparece y se mide la marca?', a: 'En las tareas por fase, en el diario público y en la vitrina del perfil. Medimos adherencia, abandono, recompra y evidencia visual, siempre de forma agregada y anónima.' },
      q2: { q: '¿Puedo personalizar mi vitrina?', a: 'Sí. Ficha técnica, videos, consejos y cronogramas alineados con tu línea.' },
      q3: { q: '¿Cómo funciona el patrocinio de cultivadores públicos?', a: 'Eliges perfiles estratégicos. La marca aparece en las publicaciones y tareas de esos perfiles, con stickers en las publicaciones. Seguimiento en tiempo real del uso.' },
      q4: { q: '¿Existe exclusividad por categoría?', a: 'Podemos trabajar exclusividad por período y categoría en acuerdos estratégicos.' },
      q5: { q: '¿Puedo rastrear ventas o leads?', a: 'Entregamos UTMs y cupones para atribución, además de informes de recompra cuando aplique.' }
    }
  },
  betaSignup: {
    title: '¿Listo para poner tu marca dentro del cultivo?',
    subtitle: 'Vamos a conectar tu marca con quien cultiva de verdad.',
    benefits: {
      title: 'Si eres seleccionado, obtienes:',
      premium: 'Acceso anticipado a la plataforma',
      kit: 'Visibilidad destacada en la app',
      access: 'Influencia directa en la construcción del producto',
      priority: 'Posicionamiento como referencia en la comunidad cultivadora'
    },
    qrDescription: '',
    supportButton: 'Agendar llamada',
    newsletterButton: 'Agendar llamada',
    newsletterTitle: '¿Listo para poner tu marca dentro del cultivo?',
    newsletterDesc: 'Vamos a conectar tu marca con quien cultiva de verdad.',
    emailPlaceholder: 'E-mail',
    instagramPlaceholder: 'Sitio web (opcional)',
    button: 'Agendar llamada',
    privacy: 'O solicita el media kit: comercial@mybud.app',
    successMessage: '¡Recibido! Te contactaremos pronto. 🚀',
    errorMessage: 'Algo salió mal. Inténtalo de nuevo.'
  },
  modal: {
    title: 'Hablemos sobre rendimiento real en el cultivo.',
    subtitle: 'Cuéntanos en 30 segundos qué quieres lograr y cuándo. Volveremos con un plan directo al punto.',
    fields: {
      company: 'Nombre de la empresa',
      fullName: 'Nombre completo',
      email: 'E-mail',
      category: 'Categoría',
      objective: 'Objetivo principal (texto corto)',
      market: 'Mercado objetivo (país/estado)',
      mediaKit: 'Quiero recibir el media kit por email'
    },
    submit: 'Enviar y agendar'
  }
};

// --- English B2B translations ---
const b2bContentEn: B2BContent = {
  hero: {
    title1: 'Grow sales with real usage, not promises.',
    title2: '',
    title3: '',
    subtitle: 'Put your brand inside the grower\'s routine — visible in tasks, photos and hard data.',
    overline: 'We don’t just grow cultivars — we grow your revenue.',
    primaryCta: 'Schedule a call',
    secondaryCta: 'Request media kit',
    trustElement: ''
  },
  features: {
    title: 'How it works',
    subtitle: 'Cannabis marketing is restricted and short on trustworthy data. My Bud places your brand at the exact moment of the grow, inside the app the grower uses every day — and delivers metrics you can actually track.',
    journal: {
      title: 'Step 1 — From label to app',
      description: 'Your feeding chart becomes actionable tasks for each phase. The QR on the package takes customers straight to the schedule in My Bud.'
    },
    voice: {
      title: 'Step 2 — Useful, visible usage',
      description: 'Tasks appear in the grow diary with branded stickers on photos and videos. No forced ads — natural presence in what the grower already does.'
    },
    alerts: {
      title: 'Step 3 — Data that matters',
      description: 'Track adherence, drop-off, repurchase and visual proof of use. Aggregated, anonymous, decision-ready data.'
    },
    guides: {
      title: 'Step 4 — Follow your influencers',
      description: 'Premium access for strategic grower influencers. Monitor grows in real time, brand stickers and unique codes to track sales.'
    }
  },
  appShowcase: {
    title: 'Partnership types',
    subtitle: '',
    dashboard: {
      title: 'Seeds & breeders',
      desc: 'Live catalog in-app, up-to-date genetics and presence in the diary.'
    },
    voice: {
      title: 'Inputs & nutrients',
      desc: 'Your product line becomes phase-based tasks with tips, doses and proof of use.'
    },
    qr: {
      title: 'Equipment',
      desc: 'LEDs, tents, pots and more showing up in grow setups and daily tasks.'
    },
    alerts: {
      title: 'Other',
      desc: 'Consulting, services, labs — integration via My Bud.'
    }
  },
  sponsorship: {
    title: 'Presence that becomes routine.',
    subtitle: 'Sponsor strategic public growers. Your brand appears in tasks, diaries and posts with watering stickers. Follow how creators use your products — and find new partners inside the ecosystem.',
    cta: 'Schedule a call',
    brandSticker: 'Brand sticker',
    sampleTask: 'Apply nutrients — Veg stage'
  },
  stats: {
    title: 'We’re after numbers that matter',
    description: 'With a grow-focused app available in three languages from day one, we\'re set to scale. We\'re looking for partnerships that create real impact — here are the numbers we expect to hit together.*',
    note: '*Projections based on early tests and potential market size.',
    growers: '10,000+',
    growersLabel: 'active growers (goal)',
    repurchase: '30%+',
    repurchaseLabel: 'expected repurchase with partnerships',
    countries: '3',
    countriesLabel: 'languages at launch'
  },
  identityTrust: {
    title1: 'Discretion and intelligence',
    title2: 'in one place.',
    description: 'Ethical reports with clean data and zero unnecessary exposure. See schedule adherence, drop-off, repurchase and photos of real usage — all aggregated, anonymous and ready for action.',
    private: { title: 'Transparent data', desc: 'Clear, actionable metrics without black boxes.' },
    community: { title: 'Built with community', desc: 'Developed with real feedback from growers and partner brands.' },
    tested: { title: 'Validated by brands', desc: 'Tested and approved by companies that already increased sales through real usage.' }
  },
  testimonials: {
    title: 'Who will partner with us?',
    subtitle: 'Real feedback from early conversations.',
    1: { text: '"My Bud turned our feeding schedule into tasks the community actually follows."', author: 'Laura, CanaNutrients', location: 'USA' },
    2: { text: '"Seeing real-time media of our LEDs inside diaries sealed the deal."', author: 'Mark, BrightGrow', location: 'Canada' },
    3: { text: '"Finally, metrics that matter instead of likes."', author: 'Diego, SeedMasters', location: 'Spain' }
  },
  faq: {
    title: 'FAQ',
    subtitle: 'Quick answers to get you started.',
    visible: {
      q1: { q: 'How does the brand appear and get measured?', a: 'Inside phase-based tasks, public diaries and profile showcases. We track adherence, drop-off, repurchase and visual proof — always aggregated and anonymous.' },
      q2: { q: 'Can I customize my showcase?', a: 'Yes. Tech sheet, videos, tips and schedules aligned with your product line.' },
      q3: { q: 'How does public grower sponsorship work?', a: 'You pick strategic profiles. Your brand shows in their posts and tasks with stickers. Real-time monitoring of usage.' },
      q4: { q: 'Is there category exclusivity?', a: 'We can work exclusivity by period and category in strategic agreements.' },
      q5: { q: 'Can I track sales or leads?', a: 'We deliver UTMs and coupons for attribution plus repurchase reports when applicable.' }
    }
  },
  betaSignup: {
    title: 'Ready to put your brand inside the grow?',
    subtitle: 'Let’s connect your company with real growers.',
    benefits: {
      title: 'If selected, you get:',
      premium: 'Early access to the platform',
      kit: 'Highlighted visibility inside the app',
      access: 'Direct influence on product roadmap',
      priority: 'Positioning as a reference in the grower community'
    },
    qrDescription: '',
    supportButton: 'Schedule a call',
    newsletterButton: 'Schedule a call',
    newsletterTitle: 'Ready to put your brand inside the grow?',
    newsletterDesc: 'Let’s connect your company with real growers.',
    emailPlaceholder: 'Email',
    instagramPlaceholder: 'Website (optional)',
    button: 'Schedule a call',
    privacy: 'Or request the media kit: comercial@mybud.app',
    successMessage: 'Received! We\'ll get back to you soon. 🚀',
    errorMessage: 'Something went wrong. Please try again.'
  },
  modal: {
    title: 'Let’s talk about real grow performance.',
    subtitle: 'Tell us in 30 seconds what you want to achieve and by when. We\'ll come back with a straight-to-the-point plan.',
    fields: {
      company: 'Company name',
      fullName: 'Full name',
      email: 'Email',
      category: 'Category',
      objective: 'Main goal (short text)',
      market: 'Target market (country/state)',
      mediaKit: 'I want to receive the media kit by email'
    },
    submit: 'Send & book'
  }
} as B2BContent;
// --- end English translations ---

// B2B content is now set via global override in i18n

export default function B2BLandingPage() {
  const { currentLanguage, changeLanguage } = useLanguage();
  const [showModal, setShowModal] = useState(false);
  useScrollEnhancement();

  useEffect(() => {
    // Set B2B content override based on current language
    const selectedContent = 
      currentLanguage === 'en' ? b2bContentEn :
      currentLanguage === 'es' ? b2bContentEs :
      b2bContent;
    setContentOverride(selectedContent);

    // Track page view
    posthog.capture('b2b_page_view', {
      language: currentLanguage
    });

    // Cleanup function to remove content override when component unmounts
    return () => {
      setContentOverride(null);
    };
  }, [currentLanguage]);

  const handleCTAClick = () => {
    // Redirect to calendar booking instead of opening modal
    window.open('https://calendly.com/mybud-app/30min', '_blank');
    posthog.capture('b2b_cta_clicked', {
      button: 'primary_cta',
      location: 'hero',
      action: 'calendar_redirect'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onLanguageChange={changeLanguage} isB2B />

      <Hero onCTAClick={handleCTAClick} /> {/* Section 1: white */}
      <FeaturesSection background="gray" /> {/* Section 2: gray */}
      <Sponsorship background="white" /> {/* Section 3: white */}
      <AppShowcase background="gray" /> {/* Section 4: gray */}
      <Stats background="white" /> {/* Section 5: white */}
      <FAQ background="gray" /> {/* Section 6: gray */}
      <IdentityTrust background="white" /> {/* Section 7: white */}
      <Testimonials background="gray" /> {/* Section 8: gray */}
      <BetaSignup background="white" /> {/* Section 9: white */}
      <Footer />

      {showModal && (
        <BetaModal open={showModal} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
} 
