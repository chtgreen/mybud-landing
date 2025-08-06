import { useState, useEffect } from 'react';
import posthog from 'posthog-js';
import Header from './components/Header';
import ThemeSelector from './components/ThemeSelector';
import Hero from './components/Hero';
import FeaturesSection from './components/FeaturesSection';
import AppShowcase from './components/AppShowcase';
import BetaSignup from './components/BetaSignup';
import Footer from './components/Footer';
import PaymentModal from './components/PaymentModal';
import { b2cContent } from './content/b2c';

function App() {
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('pt');

  useEffect(() => {
    // Set initial language based on browser or saved preference
    const savedLanguage = localStorage.getItem('selectedLanguage');
    const browserLanguage = navigator.language.split('-')[0];
    const supportedLanguages = ['pt', 'en', 'es'];
    
    const initialLanguage = savedLanguage || 
      (supportedLanguages.includes(browserLanguage) ? browserLanguage : 'pt');
    
    setCurrentLanguage(initialLanguage);
    document.documentElement.lang = initialLanguage;
    
    // Track page view with language
    if (typeof posthog !== 'undefined') {
      posthog.capture('mybud_landing_page_view', {
        page: 'index',
        language: initialLanguage,
      });
    }
  }, []);

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language);
    document.documentElement.lang = language;
    localStorage.setItem('selectedLanguage', language);
    
    // Track language change
    if (typeof posthog !== 'undefined') {
      posthog.capture('language_changed', {
        new_language: language,
      });
    }
  };

  const handleCTAClick = () => {
    posthog.capture('cta_clicked');
    setPaymentOpen(true);
  };

  return (
    <>
      <Header 
        onLanguageChange={handleLanguageChange}
        currentLanguage={currentLanguage}
      />
      <ThemeSelector 
        onThemeChange={(theme) => console.log('Theme changed to:', theme)}
        currentLanguage={currentLanguage}
      />
      <Hero 
        {...b2cContent.hero} 
        onCTAClick={handleCTAClick}
        currentLanguage={currentLanguage}
      />
      <FeaturesSection 
        features={b2cContent.features}
        currentLanguage={currentLanguage}
      />
      <AppShowcase currentLanguage={currentLanguage} />
      <BetaSignup 
        {...b2cContent.betaSignup}
        currentLanguage={currentLanguage}
      />
      <Footer currentLanguage={currentLanguage} />
      <PaymentModal
        open={paymentOpen}
        onClose={() => setPaymentOpen(false)}
        stripeLink={import.meta.env.VITE_STRIPE_PAYMENT_LINK as string}
      />
    </>
  );
}

export default App;
