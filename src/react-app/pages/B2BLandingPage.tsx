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
  };
  identityTrust: {
    title1: string;
    title2: string;
    description: string;
    private: { title: string; desc: string };
    community: { title: string; desc: string };
    tested: { title: string; desc: string };
  };
  testimonials: {
    title: string;
    subtitle: string;
    1: { text: string; author: string; location: string };
    2: { text: string; author: string; location: string };
    3: { text: string; author: string; location: string };
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
    overline: 'We don’t just grow cultivars — we grow your sales numbers.',
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
    const selectedContent = currentLanguage === 'en' ? b2bContentEn : b2bContent;
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
    setShowModal(true);
    posthog.capture('b2b_cta_clicked', {
      button: 'primary_cta',
      location: 'hero'
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
