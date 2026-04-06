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
import IndustryDeliverables from '../components/IndustryDeliverables';
import IndustryDemo from '../components/IndustryDemo';
import IndustryBrandExperience from '../components/IndustryBrandExperience';
import IndustryFreeTier from '../components/IndustryFreeTier';

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

      {/* 
          Restoring the original layout structure from the previous session,
          but integrating the new 'Brand Experience' (Step 0) at the heart of it.
      */}

      {/* Section 1: Hero — simple, punchy, centered */}
      <HeroIndustry onCTAClick={handleCTAClick} />

      {/* Section 2: THE EXPERIENCE (STEP 0 - INTERACTIVE) 
          This is now the central interaction point.
      */}
      <IndustryBrandExperience onCTAClick={handleCTAClick} />

      {/* Section 3: Problem — why the brand needs this */}
      <IndustryProblem />

      {/* Section 4: Demo — here's exactly how it looks inside the app (Multi-tab) */}
      <IndustryDemo onCTAClick={handleCTAClick} />

      {/* Section 5: The 3 Pillars / Deliverables / Journey */}
      <IndustryDeliverables />

      {/* Section 6: FREE TIER -> "Funciona desde o primeiro uso" */}
      <IndustryFreeTier />

      {/* Section 7: PRO UNLOCK -> "Compre o produto -> desbloqueie o app" */}
      <IndustryEcosystem />

      {/* Section 8: Final CTA — dark closing */}
      <IndustryFinalCTA onCTAClick={handleCTAClick} />

      <Footer />
    </div>
  );
}
