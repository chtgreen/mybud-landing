import { useState, useEffect } from 'react';
import posthog from 'posthog-js';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollEnhancement } from '../hooks/useScrollEnhancement';
import { setCurrentNamespace } from '../lib/i18n';
import Header from '../components/Header';

import Hero from '../components/Hero';
import FeaturesSection from '../components/FeaturesSection';
import AppShowcase from '../components/AppShowcase';
import BetaSignup from '../components/BetaSignup';
import Footer from '../components/Footer';

import BetaModal from '../components/BetaModal';
import Sponsorship from '../components/Sponsorship';
import Stats from '../components/Stats';
import FAQ from '../components/FAQ';
import SimpleTextSection from '../components/SimpleTextSection';

// B2B content is selected via namespace in i18n

// Shared URL for scheduling B2B calls
const B2B_CALENDAR_URL =
  'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0ET0xwuXrN7fWcxlAbExovzk9knxYjbbu13DLw2MwBrgMnyi1HQ51BM50cp717q98-Tf9qdY0c';

export default function B2BLandingPage() {
  const { currentLanguage, changeLanguage } = useLanguage();
  const [showModal, setShowModal] = useState(false);
  useScrollEnhancement();

  useEffect(() => {
    // Select B2B namespace when this page mounts
    setCurrentNamespace('b2b');

    // Track page view
    posthog.capture('b2b_page_view', {
      language: currentLanguage
    });
  }, [currentLanguage]);

  const handleCTAClick = () => {
    // Redirect to calendar booking instead of opening modal
    window.open(B2B_CALENDAR_URL, '_blank');
    posthog.capture('b2b_cta_clicked', {
      button: 'primary_cta',
      location: 'hero',
      action: 'calendar_redirect'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onLanguageChange={changeLanguage} isB2B />

      <Hero onCTAClick={handleCTAClick} /> {/* Section 1: white */}
      <Sponsorship background="gray" /> {/* Section 2: gray - Marketing na cannabis é travado */}
      <AppShowcase background="white" /> {/* Section 3: white - Como funciona */}
      <SimpleTextSection
        background="gray"
        title="Quer ir além dos dados?"
        subtitle="Patrocine growers influencers estratégicos para gerar awareness e prova social. Veja como eles usam seus produtos, se compartilham e permita que publiquem com seus stickers."
        ctaText="Agendar conversa"
        ctaAction={handleCTAClick}
      /> {/* Section 4: gray - Quer ir além dos dados */}
      <FeaturesSection background="white" /> {/* Section 5: white - Tipos de parcerias */}
      <Stats background="gray" /> {/* Section 6: gray */}
      <FAQ background="white" /> {/* Section 7: white */}
      <BetaSignup background="gray" /> {/* Section 8: gray */}
      <Footer />

      {showModal && (
        <BetaModal open={showModal} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
} 
