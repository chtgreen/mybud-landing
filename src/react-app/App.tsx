import { useEffect } from 'react';
import posthog from 'posthog-js';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { AppInAction } from './components/AppInAction';
import { Budzinho } from './components/Budzinho';
import { FounderKit } from './components/FounderKit';
import { SocialProof } from './components/SocialProof';
import { BetaSignup } from './components/BetaSignup';
import { FAQ } from './components/FAQ';
import { B2BPreview } from './components/B2BPreview';
import { CTAFinal } from './components/CTAFinal';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    // Track page view
    if (typeof posthog !== 'undefined') {
      posthog.capture('page_view', {
        page: 'home',
        timestamp: Date.now()
      });
    }
  }, []);

  return (
    <div className="app">
      <Hero />
      <HowItWorks />
      <AppInAction />
      <Budzinho />
      <FounderKit />
      <SocialProof />
      <BetaSignup />
      <FAQ />
      <B2BPreview />
      <CTAFinal />
      <Footer />
      
      {/* Fixed CTA for Mobile */}
      <div className="fixed-cta">
        <a href="#founder-kit" className="btn btn-primary">
          🌿 Garanta seu Kit Founder
        </a>
      </div>
    </div>
  );
}

export default App;
