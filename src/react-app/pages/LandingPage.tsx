import { useState } from 'react';
import posthog from 'posthog-js';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import ThemeSelector from '../components/ThemeSelector';
import Hero from '../components/Hero';
import FeaturesSection from '../components/FeaturesSection';
import AppShowcase from '../components/AppShowcase';
import IdentityTrust from '../components/IdentityTrust';
import Testimonials from '../components/Testimonials';
import BetaSignup from '../components/BetaSignup';
import ComingSoon from '../components/ComingSoon';
import Footer from '../components/Footer';
import PaymentModal from '../components/PaymentModal';

const LandingPage = () => {
  const [paymentOpen, setPaymentOpen] = useState(false);
  const { isLoading } = useLanguage();

  const handleCTAClick = () => {
    posthog.capture('cta_clicked');
    setPaymentOpen(true);
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
    <>
      <Header />
      <ThemeSelector onThemeChange={(theme) => console.log('Theme changed to:', theme)} />
      <Hero onCTAClick={handleCTAClick} />
      <FeaturesSection />
      <AppShowcase />
      <IdentityTrust />
      <BetaSignup />
      <Testimonials />
      <ComingSoon />
      <Footer />
      <PaymentModal
        open={paymentOpen}
        onClose={() => setPaymentOpen(false)}
        stripeLink={import.meta.env.VITE_STRIPE_PAYMENT_LINK as string}
      />
    </>
  );
};

export default LandingPage;