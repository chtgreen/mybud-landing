import { useState } from 'react';
import posthog from 'posthog-js';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollEnhancement } from '../hooks/useScrollEnhancement';
import Header from '../components/Header';
// import ThemeSelector from '../components/ThemeSelector';
import Hero from '../components/Hero';
import FeaturesSection from '../components/FeaturesSection';
import AppShowcase from '../components/AppShowcase';
import IdentityTrust from '../components/IdentityTrust';
import Associations from '../components/Associations';
import Testimonials from '../components/Testimonials';
import BetaSignup from '../components/BetaSignup';
import ComingSoon from '../components/ComingSoon';
import Footer from '../components/Footer';
import SupportModal from '../components/SupportModal';
import BetaModal from '../components/BetaModal';

const LandingPage = () => {
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [betaModalOpen, setBetaModalOpen] = useState(false);
  const { isLoading, changeLanguage } = useLanguage();
  
  // Apply scroll-responsive background enhancements
  useScrollEnhancement();

  const handleCTAClick = () => {
    posthog.capture('hero_cta_clicked');
    setBetaModalOpen(true);
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
      <Hero onCTAClick={handleCTAClick} /> {/* Section 1: organic */}
      <FeaturesSection background="gray" /> {/* Section 2: gray */}
      <AppShowcase background="white" /> {/* Section 3: white */}
      <IdentityTrust background="gray" /> {/* Section 4: gray */}
      <Associations background="white" /> {/* Section 5: white */}
      <BetaSignup background="gray" /> {/* Section 6: gray */}
      <Testimonials background="white" /> {/* Section 7: white */}
      <ComingSoon />
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