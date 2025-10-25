import type { FC } from 'react';
import { t } from '../lib/i18n';

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

  return (
    <section id="kit" className={`py-16 md:py-24 ${bgClass}`}>
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Title and Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('founderKit.title')}
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {t('founderKit.subtitle')}
          </p>
        </div>

        {/* Kit Card */}
          <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl shadow-xl overflow-hidden border-2 border-[#288664]">
            {/* Kit Header */}
            <div className="bg-gradient-to-r from-[#288664] to-[#047857] p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-1">
                    {t('founderKit.kitName')}
                  </h3>
                  <p className="text-emerald-100">{t('founderKit.founderEdition')}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">R$ {kitPrice}</div>
                  <p className="text-sm text-emerald-100">{t('founderKit.oneTimePayment')}</p>
                </div>
              </div>
            </div>

            {/* Kit Benefits */}
            <div className="p-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('founderKit.whatsIncluded')}</h4>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#288664] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong className="text-gray-900">{t('founderKit.items.cap')}</strong> {t('founderKit.items.capDetail')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#288664] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong className="text-gray-900">{t('founderKit.items.shirt')}</strong> {t('founderKit.items.shirtDetail')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#288664] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong className="text-gray-900">{t('founderKit.items.tips')}</strong> {t('founderKit.items.tipsDetail')}</span>
                </li>
              </ul>

              {/* CTA Button */}
              <button
                onClick={onCTAClick}
                className="cta-button w-full inline-flex items-center justify-center"
              >
                <span>{t('founderKit.cta')}</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

              {/* Microcopy */}
              <p className="text-sm text-gray-600 text-center mt-4">
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
