import { useState, useEffect } from 'react';
import posthog from 'posthog-js';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollEnhancement } from '../hooks/useScrollEnhancement';
import Header from '../components/Header';
// import ThemeSelector from '../components/ThemeSelector';
import Hero from '../components/Hero';
import VoiceNotesSection from '../components/VoiceNotesSection';
import ProblemSection from '../components/ProblemSection';
import PlantTimelineSection from '../components/PlantTimelineSection';
import AppShowcase from '../components/AppShowcase';
import InsightsSection from '../components/InsightsSection';
import IdentityTrust from '../components/IdentityTrust';
import DemoSection from '../components/DemoSection';
import BetaSignup from '../components/BetaSignup';
import Testimonials from '../components/Testimonials';
import FounderKitSection from '../components/FounderKitSection';
import Associations from '../components/Associations';
import CtaFinalSection from '../components/CtaFinalSection';
import Footer from '../components/Footer';
import SupportModal from '../components/SupportModal';
import BetaModal from '../components/BetaModal';
import { setCurrentNamespace } from '../lib/i18n';

const LandingPage = () => {
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [betaModalOpen, setBetaModalOpen] = useState(false);
  const { isLoading, changeLanguage } = useLanguage();
  const remainingKits = 72; // This could be fetched from an API
  
  // Apply scroll-responsive background enhancements
  useScrollEnhancement();

  useEffect(() => {
    setCurrentNamespace('b2c');
  }, []);

  const handleCTAClick = () => {
    posthog.capture('hero_cta_clicked');
    setBetaModalOpen(true);
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
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-emerald-50">
      <Header onLanguageChange={changeLanguage} />
      {/* <ThemeSelector onThemeChange={(theme) => console.log('Theme changed to:', theme)} /> */}
      <Hero onCTAClick={handleCTAClick} /> {/* Section 1: Hero organic */}
      <VoiceNotesSection /> {/* Section 2: Voice Notes - Killer Feature */}
      <ProblemSection /> {/* Section 3: O problema com phone mockups */}
      <PlantTimelineSection /> {/* Section 4: Plant Journey Timeline */}
      <AppShowcase background="white" /> {/* Section 5: Como funciona */}
      <InsightsSection /> {/* Section 6: AI Insights & Coaching */}
      <IdentityTrust background="gray" /> {/* Section 7: Por trás do app */}
      <DemoSection background="white" onJoinBeta={handleBetaClick} /> {/* Section 8: Demo */}
      <BetaSignup background="gray" /> {/* Section 9: Entre no beta */}
      <Testimonials background="white" growerCount={50} /> {/* Section 10: Prova social */}
      <FounderKitSection background="gray" onCTAClick={handleCTAClick} remainingKits={remainingKits} /> {/* Section 11: Founder Kit */}
      <Associations background="white" /> {/* Section 12: Associações */}
      <CtaFinalSection onKitClick={handleCTAClick} onDemoClick={handleDemoClick} remainingKits={remainingKits} /> {/* Section 13: CTA Final */}
      <Footer />
      <SupportModal
        open={paymentOpen}
        onClose={() => setPaymentOpen(false)}
      />
      <BetaModal
        open={betaModalOpen}
        onClose={() => setBetaModalOpen(false)}
      />
    </div>
  );
};

export default LandingPage;