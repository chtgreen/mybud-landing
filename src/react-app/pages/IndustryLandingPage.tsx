import { useState, useEffect } from 'react';
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
import IndustryFreeToPro from '../components/IndustryFreeToPro';
import IndustryEntry from '../components/IndustryEntry';
import IndustryExecution from '../components/IndustryExecution';
import IndustryProductExpansion from '../components/IndustryProductExpansion';
import IndustryDashboard from '../components/IndustryDashboard';
import ContactModal from '../components/ContactModal';

// Shared URL for scheduling Industry calls

export default function IndustryLandingPage() {
  const { currentLanguage, changeLanguage } = useLanguage();
  useScrollEnhancement();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    trackPageView(window.location.pathname, 'MyBud - Brands Landing Page');
    posthog.capture('industry_page_view', {
      language: currentLanguage
    });
  }, [currentLanguage]);

  const handleCTAClick = () => {
    trackCTAClick({
      ctaName: 'Open Industry Contact Modal',
      ctaLocation: 'Hero Section',
      ctaType: 'button',
      ctaText: 'Talk to us',
      customProperties: {
        page_type: 'industry',
        action: 'open_modal',
        language: currentLanguage
      }
    });

    posthog.capture('industry_cta_clicked', {
      button: 'primary_cta',
      location: 'hero',
      action: 'open_modal'
    });

    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      <SEO pageType="industry" />
      <Header onLanguageChange={changeLanguage} isIndustry onCTAClick={handleCTAClick} />

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        language={currentLanguage}
      />

      {/* Section 1: Hero — simple, punchy, centered (UNTOUCHED) */}
      <HeroIndustry onCTAClick={handleCTAClick} />

      {/* Block 1: Problem + Google + Gap — MERGED (Updated) */}
      <IndustryProblem />

      {/* Block 2: Entry + Onboarding — MERGED (Updated) */}
      <IndustryEntry />

      {/* Block 3: Moment of use + Real Execution — MERGED (Updated) */}
      <IndustryExecution />

      {/* Block 4: Features — CUT / REDUCED (Updated) */}
      <IndustryProductExpansion />

      {/* Block 5: Data — SHORTENED (Updated) */}
      <IndustryDashboard />

      {/* Block 6: Domina o cultivo — MAINTAINED */}
      <IndustryFreeToPro />

      {/* Block 7: Pricing — MAINTAINED */}
      <IndustryEcosystem />

      {/* Block 8: Final CTA — SHORTENED (Updated) */}
      <div id="final-cta">
        <IndustryFinalCTA onCTAClick={handleCTAClick} />
      </div>

      <Footer />
    </div>
  );
}
