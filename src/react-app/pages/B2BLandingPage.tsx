import { useEffect } from 'react';
import posthog from 'posthog-js';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollEnhancement } from '../hooks/useScrollEnhancement';
import Header from '../components/Header';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import B2BFunnel from '../components/B2BFunnel';

// Shared URL for scheduling B2B calls
const B2B_CALENDAR_URL =
  'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0ET0xwuXrN7fWcxlAbExovzk9knxYjbbu13DLw2MwBrgMnyi1HQ51BM50cp717q98-Tf9qdY0c';

export default function B2BLandingPage() {
  const { currentLanguage, changeLanguage } = useLanguage();
  useScrollEnhancement();

  useEffect(() => {
    // Track page view
    posthog.capture('b2b_page_view', {
      language: currentLanguage
    });

    // Add dark theme class to body so generic elements (like modals if needed) can adapt
    document.body.classList.add('bg-[#050505]');
    return () => {
      document.body.classList.remove('bg-[#050505]');
    };
  }, [currentLanguage]);

  const handleCTAClick = () => {
    // Redirect to calendar booking
    window.open(B2B_CALENDAR_URL, '_blank');
    posthog.capture('b2b_cta_clicked', {
      button: 'primary_cta',
      location: 'funnel',
      action: 'calendar_redirect'
    });
  };

  return (
    <div className="min-h-screen bg-[#050505]">
      <SEO pageType="b2b" />
      <Header onLanguageChange={changeLanguage} isB2B onCTAClick={handleCTAClick} />

      <B2BFunnel
        onDemoClick={handleCTAClick}
        onTalkClick={handleCTAClick}
      />

      <Footer />
    </div>
  );
}
