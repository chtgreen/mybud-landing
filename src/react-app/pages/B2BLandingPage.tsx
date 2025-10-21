import { useState, useEffect } from 'react';
import posthog from 'posthog-js';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollEnhancement } from '../hooks/useScrollEnhancement';
import Header from '../components/Header';
import SEO from '../components/SEO';

import Hero from '../components/Hero';
import FeaturesSection from '../components/FeaturesSection';
import AppShowcase from '../components/AppShowcase';
import Footer from '../components/Footer';

import BetaModal from '../components/BetaModal';
import Sponsorship from '../components/Sponsorship';
import Stats from '../components/Stats';
import FAQ from '../components/FAQ';
import SocialProof from '../components/SocialProof';
import Associations from '../components/Associations';
import B2CLink from '../components/B2CLink';
import B2BLeadForm from '../components/B2BLeadForm';

// B2B content is selected via namespace in i18n

// Shared URL for scheduling B2B calls
const B2B_CALENDAR_URL =
  'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0ET0xwuXrN7fWcxlAbExovzk9knxYjbbu13DLw2MwBrgMnyi1HQ51BM50cp717q98-Tf9qdY0c';

export default function B2BLandingPage() {
  const { currentLanguage, changeLanguage } = useLanguage();
  const [showModal, setShowModal] = useState(false);
  useScrollEnhancement();

  useEffect(() => {
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
      <SEO pageType="b2b" />
      <Header onLanguageChange={changeLanguage} isB2B onCTAClick={handleCTAClick} />

      <Hero onCTAClick={handleCTAClick} /> {/* Section 1: white - Hero with graph highlights */}
      <Sponsorship background="gray" /> {/* Section 2: gray - O marketing e a gestão na cannabis estão travados */}
      <AppShowcase background="white" /> {/* Section 3: white - Como funciona (4 steps) */}
      <SocialProof background="gray" onCTAClick={handleCTAClick} /> {/* Section 4: gray - Mais que dados: prova social */}
      <FeaturesSection background="white" /> {/* Section 5: white - Tipos de parcerias (5 types) */}
      <Associations background="gray" onCTAClick={handleCTAClick} /> {/* Section 6: gray - Associações Canábicas (NEW) */}
      <B2CLink background="white" /> {/* Section 7: white - Link to B2C page */}
      <Stats background="gray" /> {/* Section 8: gray - Métricas que contam */}
      <FAQ background="white" /> {/* Section 9: white - FAQ com novas perguntas */}
      <B2BLeadForm background="gray" /> {/* Section 10: gray - Formulário B2B */}
      <Footer />

      {showModal && (
        <BetaModal open={showModal} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
} 
