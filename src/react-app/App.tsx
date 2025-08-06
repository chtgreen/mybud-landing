import { useState } from 'react';
import posthog from 'posthog-js';
import Hero from './components/Hero';
import FeaturesSection from './components/FeaturesSection';
import BetaSignup from './components/BetaSignup';
import Footer from './components/Footer';
import PaymentModal from './components/PaymentModal';
import { b2cContent } from './content/b2c';

function App() {
  const [paymentOpen, setPaymentOpen] = useState(false);

  const handleCTAClick = () => {
    posthog.capture('cta_clicked');
    setPaymentOpen(true);
  };

  return (
    <>
      <Hero {...b2cContent.hero} onCTAClick={handleCTAClick} />
      <FeaturesSection features={b2cContent.features} />
      <BetaSignup {...b2cContent.betaSignup} />
      <Footer />
      <PaymentModal
        open={paymentOpen}
        onClose={() => setPaymentOpen(false)}
        stripeLink={import.meta.env.VITE_STRIPE_PAYMENT_LINK as string}
      />
    </>
  );
}

export default App;
