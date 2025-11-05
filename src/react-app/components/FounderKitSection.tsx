import type { FC } from 'react';
import { t } from '../lib/i18n';
import { trackCTAClick } from '../lib/analytics';

interface FounderKitSectionProps {
  background?: 'white' | 'gray';
  onCTAClick: () => void;
  remainingKits?: number;
  kitPrice?: number;
}

const FounderKitSection: FC<FounderKitSectionProps> = ({ 
  background = 'white', 
  onCTAClick,
  remainingKits = 72,
  kitPrice = 249
}) => {
  const bgClass = background === 'gray' ? 'bg-gray-50' : 'bg-white';

  // Track revenue-generating CTA click
  const handleKitPurchaseCTA = () => {
    trackCTAClick({
      ctaName: 'Purchase Founder Kit',
      ctaLocation: 'Founder Kit Section',
      ctaType: 'button',
      ctaText: t('founderKit.cta'),
      customProperties: {
        value: kitPrice,
        currency: 'BRL',
        remainingKits: remainingKits,
        conversion_type: 'purchase_intent',
        product: 'Founder Kit',
        revenue_event: true,
        kit_price: kitPrice
      }
    });
    onCTAClick();
  };

  return (
    <section id="kit" className={`py-16 md:py-24 ${bgClass} relative overflow-hidden`}>
      {/* Textura sutil de papel no fundo */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23888888' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Title and Subtitle - Mais focado */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            {t('founderKit.title')}
          </h2>
          {/* Texto reduzido */}
        </div>

        {/* Kit Card com textura papel */}
          <div className="max-w-2xl mx-auto relative">
          {/* Selo Edição Limitada 2025 - Fora do card para não quebrar */}
          <div className="absolute -top-3 -right-3 z-20">
            <div className="bg-gradient-to-r from-[#eb4c80] to-[#d13a6a] text-white px-4 py-2 rounded-full text-xs font-bold shadow-xl transform rotate-12 hover:rotate-6 transition-transform duration-300 border-2 border-white whitespace-nowrap">
              ⭐ EDIÇÃO LIMITADA 2025
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-[#fefdfb] to-[#f9f7f4] rounded-3xl shadow-[0_12px_50px_rgba(0,0,0,0.15)] overflow-hidden border-2 border-emerald-200/50 relative">
            
            {/* Textura sutil no card */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23888888' fill-opacity='0.03'%3E%3Cpath d='M0 0h40v40H0V0z'/%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
            
            {/* Kit Header */}
            <div className="bg-gradient-to-r from-[#288664] to-[#047857] p-8 text-white relative">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-1">
                    {t('founderKit.kitName')}
                  </h3>
                  <p className="text-emerald-100 text-sm">{t('founderKit.founderEdition')}</p>
                </div>
                <div className="text-right">
                  <div className="text-5xl font-bold">R$ {kitPrice}</div>
                  <p className="text-xs text-emerald-100 uppercase tracking-wider">{t('founderKit.oneTimePayment')}</p>
                </div>
              </div>
            </div>

            {/* Kit Benefits - Texto reduzido, mais foco visual */}
            <div className="p-10 relative z-10">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t('founderKit.whatsIncluded')}</h4>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium"><strong className="text-gray-900">{t('founderKit.items.cap')}</strong></span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium"><strong className="text-gray-900">{t('founderKit.items.shirt')}</strong></span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium"><strong className="text-gray-900">{t('founderKit.items.tips')}</strong></span>
                </li>
              </ul>

              {/* CTA Button - Rosa MyBud! */}
              <button
                onClick={handleKitPurchaseCTA}
                className="w-full inline-flex items-center justify-center px-8 py-5 bg-gradient-to-r from-[#eb4c80] to-[#d13a6a] hover:from-[#d13a6a] hover:to-[#b82959] text-white text-xl font-bold rounded-xl shadow-[0_8px_30px_rgba(235,76,128,0.4)] hover:shadow-[0_12px_40px_rgba(235,76,128,0.5)] transition-all duration-300 hover:scale-105"
              >
                <span>{t('founderKit.cta')}</span>
                <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

              {/* Microcopy reduzido */}
              <p className="text-sm text-gray-600 text-center mt-4 font-medium">
                {t('founderKit.microcopy')}
              </p>
            </div>
          </div>

          {/* Limited Availability Notice */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-900">{t('founderKit.limitedEdition')}</span> {remainingKits} {t('founderKit.kitsRemaining')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderKitSection;
