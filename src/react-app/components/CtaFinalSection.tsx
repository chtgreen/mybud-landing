import type { FC } from 'react';
import { t } from '../lib/i18n';
import { trackButtonClick } from '../lib/analytics';

interface CtaFinalSectionProps {
  onKitClick: () => void;
  onSecondaryClick?: () => void;
  remainingKits?: number;
  showSecondaryCta?: boolean;
}

const CtaFinalSection: FC<CtaFinalSectionProps> = ({ 
  onKitClick, 
  onSecondaryClick,
  remainingKits = 72,
  showSecondaryCta = true
}) => {
  const handlePrimaryCTA = () => {
    // Track Final CTA primary button click
    trackButtonClick('Join Beta - Final CTA', 'Final CTA Section', {
      ctaPosition: 'final_section',
      remainingKits: remainingKits,
      action: 'purchase_intent'
    });
    onKitClick();
  };

  const handleSecondaryClick = () => {
    // Track Final CTA secondary button click
    trackButtonClick('Watch Demo - Final CTA', 'Final CTA Section', {
      ctaPosition: 'final_section',
      action: 'scroll_to_demo'
    });
    
    if (onSecondaryClick) {
      onSecondaryClick();
      return;
    }

    const demoSection = document.getElementById('demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#D5C0FD] via-[#E0D4FD] to-[#D5C0FD] relative overflow-visible">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        <div className="mb-12 max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-purple-100">
            <p className="text-lg md:text-xl text-gray-800 font-medium mb-3">
              {t('ctaFinal.greeting')}
            </p>
            <p className="text-base md:text-lg text-gray-700">
              {t('ctaFinal.question')}
            </p>
            <p className="text-sm text-purple-800 mt-6 font-medium">
              {t('ctaFinal.launchEta')}
            </p>
          </div>
        </div>

        <div className="text-center">

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={handlePrimaryCTA}
              className="inline-flex items-center justify-center rounded-xl px-10 py-5 text-xl font-bold bg-gradient-to-r from-[#eb4c80] to-[#d13a6a] text-white hover:from-[#d13a6a] hover:to-[#b82959] transition-all duration-300 shadow-[0_8px_30px_rgba(235,76,128,0.4)] hover:shadow-[0_12px_40px_rgba(235,76,128,0.5)] hover:scale-105"
            >
              <span>{t('ctaFinal.primaryCta')}</span>
              <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            {showSecondaryCta && t('ctaFinal.secondaryCta') !== 'ctaFinal.secondaryCta' && (
              <button
                onClick={handleSecondaryClick}
                className="inline-flex items-center justify-center rounded-xl px-10 py-5 text-xl font-bold bg-white text-purple-700 hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span>{t('ctaFinal.secondaryCta')}</span>
              </button>
            )}
          </div>

          {/* Microcopy com ícone */}
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm text-gray-900 px-6 py-3 rounded-full text-base font-bold shadow-md border border-purple-200">
            <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span>{t('ctaFinal.microcopy').replace('{count}', remainingKits.toString())}</span>
          </div>
        </div>

      </div>
      
      {/* Efeitos de fundo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-pink-400/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default CtaFinalSection;
