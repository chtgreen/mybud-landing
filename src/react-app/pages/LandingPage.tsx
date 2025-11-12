import { useState, useEffect } from 'react';
import posthog from 'posthog-js';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollEnhancement } from '../hooks/useScrollEnhancement';
import { useUrlModalState } from '../hooks/useUrlModalState';
import { trackPageView, trackCTAClick } from '../lib/analytics';
import Header from '../components/Header';
import SEO from '../components/SEO';
// import ThemeSelector from '../components/ThemeSelector';
import Hero from '../components/Hero';
import VoiceNotesSection from '../components/VoiceNotesSection';
import PlantTimelineSection from '../components/PlantTimelineSection';
// import AppShowcase from '../components/AppShowcase';
import InsightsSection from '../components/InsightsSection';
import IdentityTrust from '../components/IdentityTrust';
import DemoSection from '../components/DemoSection';
import Testimonials from '../components/Testimonials';
import FounderKitSection from '../components/FounderKitSection';
import CtaFinalSection from '../components/CtaFinalSection';
import Footer from '../components/Footer';
import SupportModal from '../components/SupportModal';
import BetaModal from '../components/BetaModal';

const LandingPage = () => {
  const [paymentOpen, setPaymentOpen] = useState(false);
  const { isOpen: betaModalOpen, open: openBetaModal, close: closeBetaModal } = useUrlModalState('beta');
  const { isLoading, changeLanguage } = useLanguage();
  const remainingKits = Number(import.meta.env.VITE_KIT_REMINDER) || 47;
  const kitPrice = Number(import.meta.env.VITE_KIT_PRICE) || 249;
  
  // Check if video mode is enabled via query parameter
  const searchParams = new URLSearchParams(window.location.search);
  const showVideo = searchParams.get('video') === 'true';
  
  // Apply scroll-responsive background enhancements
  useScrollEnhancement();

  // Track page view with unified analytics
  useEffect(() => {
    trackPageView(window.location.pathname, 'MyBud - Consumer Landing Page');
  }, []);

  // Namespace is now automatically managed by LanguageProvider based on URL

  const handleCTAClick = () => {
    // Track CTA click with unified analytics (PostHog + GA4)
    trackCTAClick({
      ctaName: 'Join Beta',
      ctaLocation: 'Hero Section',
      ctaType: 'button',
      ctaText: 'Join Beta Program',
      customProperties: {
        page_type: 'consumer',
        remaining_kits: remainingKits
      }
    });

    // Legacy tracking
    posthog.capture('hero_cta_clicked');
    openBetaModal();
  };

  const handleDemoClick = () => {
    const demoSection = document.getElementById('demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBetaClick = () => {
    const betaSection = document.getElementById('beta');
    if (betaSection) {
      betaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  // Show loading while language is being initialized
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-emerald-50">
      <SEO pageType="b2c" />
      <Header onLanguageChange={changeLanguage} onCTAClick={handleCTAClick} />
      {/* <ThemeSelector onThemeChange={(theme) => console.log('Theme changed to:', theme)} /> */}
      <Hero onCTAClick={handleCTAClick} showSecondaryCta={showVideo} remainingKits={remainingKits} /> {/* Section 1: Hero organic */}
      <VoiceNotesSection onCTAClick={handleCTAClick} /> {/* Section 2: Voice Notes - Killer Feature */}
      <PlantTimelineSection /> {/* Section 4: Plant Journey Timeline */}
      {/* <AppShowcase background="white" /> */} {/* Section 5: Como funciona - REMOVED */}
      <InsightsSection onActivate={handleCTAClick} /> {/* Section 6: Inteligência do app */}
      <IdentityTrust background="gray" /> {/* Section 7: Por trás do app */}
      {showVideo && <DemoSection background="white" onJoinBeta={handleBetaClick} />} {/* Section 8: Demo - Shown when ?video=true */}
      <Testimonials background="white" growerCount={50} /> {/* Section 9: Prova social */}
      <FounderKitSection background="gray" onCTAClick={handleCTAClick} remainingKits={remainingKits} kitPrice={kitPrice} /> {/* Section 10: Founder Kit */}
      <CtaFinalSection
        onKitClick={handleCTAClick}
        onSecondaryClick={handleDemoClick}
        remainingKits={remainingKits}
        showSecondaryCta={showVideo}
      /> {/* Section 13: CTA Final */}
      <Footer />
      <SupportModal
        open={paymentOpen}
        onClose={() => setPaymentOpen(false)}
      />
      <BetaModal
        open={betaModalOpen}
        onClose={closeBetaModal}
        remainingKits={remainingKits}
        kitPrice={kitPrice}
      />
    </div>
  );
};

export default LandingPage;
