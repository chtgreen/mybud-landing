import type { FC } from 'react';
import { t } from '../lib/i18n';

interface CtaFinalSectionProps {
  onKitClick: () => void;
  onDemoClick?: () => void;
  remainingKits?: number;
}

const CtaFinalSection: FC<CtaFinalSectionProps> = ({ 
  onKitClick, 
  onDemoClick,
  remainingKits = 72
}) => {
  const handleDemoClick = () => {
    if (onDemoClick) {
      onDemoClick();
    } else {
      // Scroll to demo section
      const demoSection = document.getElementById('demo');
      if (demoSection) {
        demoSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#D5C0FD] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('ctaFinal.title')}
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-[#7c3aed] mb-10">
            {t('ctaFinal.subtitle')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={onKitClick}
              className="inline-flex items-center justify-center rounded-xl px-8 py-4 text-lg font-semibold bg-[#eb4c80] text-white hover:bg-[#d13a6a] transition-colors"
            >
              <span>{t('ctaFinal.primaryCta')}</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            <button
              onClick={handleDemoClick}
              className="inline-flex items-center justify-center rounded-xl px-8 py-4 text-lg font-medium bg-white text-[#7c3aed] hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              <span>{t('ctaFinal.secondaryCta')}</span>
            </button>
          </div>

          {/* Scarcity Microcopy */}
          <div className="inline-flex items-center gap-2 bg-white/60 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
            <svg className="w-5 h-5 text-[#eb4c80]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span>{t('ctaFinal.microcopy').replace('{count}', remainingKits.toString())}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaFinalSection;

