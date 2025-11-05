import { useEffect } from 'react';
import posthog from 'posthog-js';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollEnhancement } from '../hooks/useScrollEnhancement';
import { trackPageView, trackCTAClick } from '../lib/analytics';
import Header from '../components/Header';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import B2BLeadForm from '../components/B2BLeadForm';
import HeroIndustry from '../components/HeroIndustry';
import IndustryProblem from '../components/IndustryProblem';
import IndustryWays from '../components/IndustryWays';
import IndustryImpact from '../components/IndustryImpact';
import IndustryLegitimacy from '../components/IndustryLegitimacy';
import IndustryEcosystem from '../components/IndustryEcosystem';
import IndustryFinalCTA from '../components/IndustryFinalCTA';

// Shared URL for scheduling Industry calls
const INDUSTRY_CALENDAR_URL =
  'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0ET0xwuXrN7fWcxlAbExovzk9knxYjbbu13DLw2MwBrgMnyi1HQ51BM50cp717q98-Tf9qdY0c';

export default function IndustryLandingPage() {
  const { currentLanguage, changeLanguage } = useLanguage();
  useScrollEnhancement();

  useEffect(() => {
    // Track page view with unified analytics (PostHog + GA4)
    trackPageView(window.location.pathname, 'MyBud - Industry Landing Page');

    // Legacy PostHog tracking
    posthog.capture('industry_page_view', {
      language: currentLanguage
    });
  }, [currentLanguage]);

  const handleCTAClick = () => {
    // Track CTA click with unified analytics (PostHog + GA4)
    trackCTAClick({
      ctaName: 'Schedule Industry Demo',
      ctaLocation: 'Hero Section',
      ctaType: 'button',
      ctaText: 'Agendar Conversa',
      destinationUrl: INDUSTRY_CALENDAR_URL,
      customProperties: {
        page_type: 'industry',
        action: 'calendar_redirect',
        language: currentLanguage
      }
    });

    // Legacy PostHog tracking
    posthog.capture('industry_cta_clicked', {
      button: 'primary_cta',
      location: 'hero',
      action: 'calendar_redirect'
    });

    // Redirect to calendar booking
    window.open(INDUSTRY_CALENDAR_URL, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO pageType="industry" />
      <Header onLanguageChange={changeLanguage} isIndustry onCTAClick={handleCTAClick} />

      {/* Section 1: Hero - emerald gradient background */}
      <HeroIndustry onCTAClick={handleCTAClick} />
      
      {/* Section 2: Problem - white */}
      <IndustryProblem />
      
      {/* Section 3: Three Ways - white */}
      <IndustryWays />
      
      {/* Section 4: Impact - gray-50 */}
      <IndustryImpact />
      
      {/* Section 5: Legitimacy - gray-50 */}
      <IndustryLegitimacy />
      
      {/* Section 6: Ecosystem - white (circle network with 4 connections only) */}
      <IndustryEcosystem />
      
      {/* Section 7: Final CTA - white (simple, no gradient) */}
      <IndustryFinalCTA onCTAClick={handleCTAClick} />

      {/* Section 8: Lead Form - gray */}
      <B2BLeadForm background="gray" />

      <Footer />
    </div>
  );
} 

