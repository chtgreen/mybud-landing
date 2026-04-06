import { useEffect } from 'react';
import posthog from 'posthog-js';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollEnhancement } from '../hooks/useScrollEnhancement';
import { trackPageView, trackCTAClick } from '../lib/analytics';
import Header from '../components/Header';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import HeroIndustry from '../components/HeroIndustry';
import IndustryProblem from '../components/IndustryProblem';
import IndustryEcosystem from '../components/IndustryEcosystem';
import IndustryFinalCTA from '../components/IndustryFinalCTA';
import IndustryFreeTier from '../components/IndustryFreeTier';
import IndustryEntry from '../components/IndustryEntry';
import IndustryExecution from '../components/IndustryExecution';
import IndustryDemo from '../components/IndustryDemo';
import IndustryBrandExperience from '../components/IndustryBrandExperience';

// Shared URL for scheduling Industry calls
const INDUSTRY_CALENDAR_URL =
  'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0ET0xwuXrN7fWcxlAbExovzk9knxYjbbu13DLw2MwBrgMnyi1HQ51BM50cp717q98-Tf9qdY0c';

export default function IndustryLandingPage() {
  const { currentLanguage, changeLanguage } = useLanguage();
  useScrollEnhancement();

  useEffect(() => {
    trackPageView(window.location.pathname, 'MyBud - Brands Landing Page');
    posthog.capture('industry_page_view', {
      language: currentLanguage
    });
  }, [currentLanguage]);

  const handleCTAClick = () => {
    trackCTAClick({
      ctaName: 'Schedule Industry Demo',
      ctaLocation: 'Hero Section',
      ctaType: 'button',
      ctaText: 'Talk to us',
      destinationUrl: INDUSTRY_CALENDAR_URL,
      customProperties: {
        page_type: 'industry',
        action: 'calendar_redirect',
        language: currentLanguage
      }
    });

    posthog.capture('industry_cta_clicked', {
      button: 'primary_cta',
      location: 'hero',
      action: 'calendar_redirect'
    });

    window.open(INDUSTRY_CALENDAR_URL, '_blank');
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      <SEO pageType="industry" />
      <Header onLanguageChange={changeLanguage} isIndustry onCTAClick={handleCTAClick} />

      {/* Section 1: Hero — simple, punchy, centered */}
      <HeroIndustry />

      {/* Section 2: Problem — why the brand needs this */}
      <IndustryProblem />

      {/* Section 3: ENTRY BLOCK (NEW) — Use -> Enter -> Follow */}
      <IndustryEntry />

      {/* Section 4: Demo — here's exactly how it looks inside the app (Multi-tab) */}
      <IndustryDemo onCTAClick={handleCTAClick} />

      {/* Section 5: Execution (NEW) — Your protocol becomes execution */}
      <IndustryExecution />

      {/* Section 6: FREE TIER -> "Onboarding Zero Suporte" */}
      <IndustryFreeTier />

      {/* Section 7: PRO UNLOCK -> "Compre o produto -> desbloqueie o app" */}
      <IndustryEcosystem />

      {/* Section 8: THE EXPERIENCE (STEP 0 - INTERACTIVE) */}
      <IndustryBrandExperience onCTAClick={handleCTAClick} />

      {/* Section 9: Final CTA — dark closing */}
      <IndustryFinalCTA onCTAClick={handleCTAClick} />

      <Footer />
    </div>
  );
}
