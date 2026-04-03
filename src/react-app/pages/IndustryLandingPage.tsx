import { useEffect, useCallback } from 'react';
import posthog from 'posthog-js';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollEnhancement } from '../hooks/useScrollEnhancement';
import { trackPageView, trackCTAClick } from '../lib/analytics';
import Header from '../components/Header';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import HeroIndustry from '../components/HeroIndustry';
import IndustryFunnel from '../components/IndustryFunnel';
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

  const handleDemoClick = useCallback(() => {
    trackCTAClick({
      ctaName: 'Watch Demo',
      ctaLocation: 'Industry Page',
      ctaType: 'button',
      ctaText: 'See live demo',
      destinationUrl: '#brand-experience',
      customProperties: {
        page_type: 'industry',
        action: 'scroll_to_demo',
        language: currentLanguage
      }
    });

    const demoSection = document.getElementById('brand-experience');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [currentLanguage]);

  return (
    <div className="min-h-screen bg-zinc-950">
      <SEO pageType="industry" />
      <Header onLanguageChange={changeLanguage} isIndustry onCTAClick={handleCTAClick} />

      {/* Hero Section */}
      <HeroIndustry onCTAClick={handleCTAClick} onDemoClick={handleDemoClick} />

      {/* NEW: Interactive Value-First Funnel (Demo + Form + Result) */}
      <IndustryBrandExperience onCTAClick={handleCTAClick} />

      {/* NEW: Streamlined High-Conversion Funnel Content */}
      <IndustryFunnel onCTAClick={handleCTAClick} />

      <Footer />
    </div>
  );
}
