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
        
        {/* Budzinho Mascote Interativo com Balão de Fala */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          {/* Budzinho acenando */}
          <div className="relative">
            <img 
              src="/MyBud - Budzinho Colorido 3.png" 
              alt="Budzinho mascote"
              className="w-32 h-32 md:w-40 md:h-40 drop-shadow-2xl animate-bounce"
              style={{
                animation: 'bounce 2s ease-in-out infinite',
              }}
            />
            {/* Efeito de brilho */}
            <div className="absolute inset-0 bg-gradient-radial from-purple-300/30 to-transparent rounded-full blur-2xl"></div>
          </div>
          
          {/* Balão de fala SVG animado */}
          <div className="relative max-w-md">
            <div className="bg-white rounded-3xl p-6 shadow-2xl relative animate-in fade-in slide-in-from-left duration-700">
              {/* Triângulo do balão */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-r-[20px] border-r-white"></div>
              
              <p className="text-lg md:text-xl text-gray-800 font-medium mb-3">
                {(() => {
                  const greeting = t('ctaFinal.greeting');
                  const parts = greeting.split('MyBud');
                  return parts.map((part, index) => (
                    <span key={index}>
                      {part}
                      {index < parts.length - 1 && <strong className="text-purple-600">MyBud</strong>}
                    </span>
                  ));
                })()}
              </p>
              <p className="text-base md:text-lg text-gray-700">
                {t('ctaFinal.question')}
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          {/* Barra de progresso 72% */}
          <div className="mb-8 max-w-md mx-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-purple-900">{t('ctaFinal.progressLabel')}</span>
              <span className="text-2xl font-bold text-purple-600">72%</span>
            </div>
            <div className="w-full h-4 bg-white/40 rounded-full overflow-hidden shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                style={{ width: '72%' }}
              >
                {/* Brilho animado na barra */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
              </div>
            </div>
            <p className="text-xs text-purple-800 mt-2 font-medium">{t('ctaFinal.launchEta')}</p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={handlePrimaryCTA}
              className="inline-flex items-center justify-center rounded-xl px-10 py-5 text-xl font-bold bg-gradient-to-r from-[#eb4c80] to-[#d13a6a] text-white hover:from-[#d13a6a] hover:to-[#b82959] transition-all duration-300 shadow-[0_8px_30px_rgba(235,76,128,0.4)] hover:shadow-[0_12px_40px_rgba(235,76,128,0.5)] hover:scale-105"
            >
              <span>🎟️ {t('ctaFinal.primaryCta')}</span>
              <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            {showSecondaryCta && t('ctaFinal.secondaryCta') !== 'ctaFinal.secondaryCta' && (
              <button
                onClick={handleSecondaryClick}
                className="inline-flex items-center justify-center rounded-xl px-10 py-5 text-xl font-bold bg-white text-purple-700 hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span>🪴 {t('ctaFinal.secondaryCta')}</span>
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
