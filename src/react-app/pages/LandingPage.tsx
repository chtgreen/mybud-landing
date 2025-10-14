import { useState, useEffect } from 'react';
import posthog from 'posthog-js';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollEnhancement } from '../hooks/useScrollEnhancement';
import Header from '../components/Header';
import BetaAlertBar from '../components/BetaAlertBar';
import HeroV2 from '../components/HeroV2';
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
import { setCurrentNamespace } from '../lib/i18n';

const LandingPage = () => {
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [betaModalOpen, setBetaModalOpen] = useState(false);
  const { isLoading, changeLanguage } = useLanguage();
  
  // Apply scroll-responsive background enhancements
  useScrollEnhancement();

  useEffect(() => {
    setCurrentNamespace('b2c');
  }, []);

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
      {/* V2: Beta Alert Bar - Fixed Top */}
      <BetaAlertBar />
      
      <Header onLanguageChange={changeLanguage} />
      
      {/* V2: Conversion-Focused Hero */}
      <HeroV2 onCTAClick={handleCTAClick} />
      
      {/* Existing Sections */}
      <FeaturesSection background="gray" />
      <AppShowcase background="white" />
      <IdentityTrust background="gray" />
      <Associations background="white" />
      <BetaSignup background="gray" />
      <Testimonials background="white" />
      <ComingSoon />
      <Footer />
      
      {/* Modals */}
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