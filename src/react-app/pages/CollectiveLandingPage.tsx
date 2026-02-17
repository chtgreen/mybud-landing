import { useEffect } from 'react';
import posthog from 'posthog-js';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollEnhancement } from '../hooks/useScrollEnhancement';
import { useUrlModalState } from '../hooks/useUrlModalState';
import { trackPageView, trackCTAClick } from '../lib/analytics';
import Header from '../components/Header';
import SEO from '../components/SEO';
import HeroCollective from '../components/HeroCollective';
import PositioningSection from '../components/PositioningSection';
import ContextSection from '../components/ContextSection';
import ProblemsSection from '../components/ProblemsSection';
import SolutionSection from '../components/SolutionSection';
import InteractiveFeaturesSection from '../components/InteractiveFeaturesSection';
import HowItWorksCollective from '../components/HowItWorksCollective';
import FeaturesMap from '../components/FeaturesMap';
import PilotSection from '../components/PilotSection';
import PlansSection from '../components/PlansSection';
import Footer from '../components/Footer';
import BetaModal from '../components/BetaModal';
import CollectiveLeadForm from '../components/CollectiveLeadForm';
import { t } from '../lib/i18n';

// Collective Calendar URL
const COLLECTIVE_CALENDAR_URL =
  'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0ET0xwuXrN7fWcxlAbExovzk9knxYjbbu13DLw2MwBrgMnyi1HQ51BM50cp717q98-Tf9qdY0c';

export default function CollectiveLandingPage() {
  const { currentLanguage, changeLanguage } = useLanguage();
  const { isOpen: betaModalOpen, close: closeBetaModal } = useUrlModalState('beta');
  useScrollEnhancement();

  useEffect(() => {
    // Track page view with unified analytics (PostHog + GA4)
    trackPageView(window.location.pathname, 'MyBud - Collective Landing Page');

    // Legacy PostHog tracking
    posthog.capture('collective_page_view', {
      language: currentLanguage
    });
  }, [currentLanguage]);

  const handleCTAClick = () => {
    // Track CTA click with unified analytics (PostHog + GA4)
    trackCTAClick({
      ctaName: 'Schedule Collective Demo',
      ctaLocation: 'Hero Section',
      ctaType: 'button',
      ctaText: 'Agendar Demonstração',
      destinationUrl: COLLECTIVE_CALENDAR_URL,
      customProperties: {
        page_type: 'collective',
        action: 'calendar_redirect',
        language: currentLanguage
      }
    });

    // Legacy PostHog tracking
    posthog.capture('collective_cta_clicked', {
      button: 'primary_cta',
      location: 'hero',
      action: 'calendar_redirect'
    });

    // Redirect to calendar booking
    window.open(COLLECTIVE_CALENDAR_URL, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO pageType="collective" />
      <Header onLanguageChange={changeLanguage} isCollective onCTAClick={handleCTAClick} />

      {/* SEO-Optimized Structure */}
      <HeroCollective onCTAClick={handleCTAClick} /> {/* H1: Controle e rastreabilidade do cultivo medicinal coletivo */}
      <PositioningSection background="gray" /> {/* Positioning: O MyBud é o sistema operacional */}
      <ContextSection background="white" /> {/* H2: O cultivo medicinal entrou em uma nova fase */}
      <ProblemsSection background="gray" /> {/* H2: Os principais gargalos do cultivo coletivo medicinal */}
      <SolutionSection background="white" /> {/* H2: O MyBud estrutura o que a regulação exige */}
      <FeaturesMap background="gray" /> {/* 4 pilares - O Cérebro do Cultivo Coletivo */}
      <InteractiveFeaturesSection background="white" /> {/* Detailed Features (accordion) - Tudo vira histórico organizado */}
      <HowItWorksCollective /> {/* Como usar (4 passos) - Veja como funciona na prática */}
      <PilotSection /> {/* Piloto */}
      <PlansSection /> {/* Planos */}

      {/* Section 7: Depoimento */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
              {t('collective.testimonial.title')}
            </h2>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-12 border border-emerald-200">
            <p className="text-2xl italic text-zinc-800 mb-6 text-center leading-relaxed">
              "{t('collective.testimonial.text')}"
            </p>
            <p className="text-center text-zinc-600">
              — <span className="font-medium">{t('collective.testimonial.author')}, {t('collective.testimonial.role')}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Section 8: CTA Final / Lead Form */}
      <CollectiveLeadForm background="gray" />
      <Footer />

      {betaModalOpen && (
        <BetaModal open={betaModalOpen} onClose={closeBetaModal} />
      )}
    </div>
  );
}

