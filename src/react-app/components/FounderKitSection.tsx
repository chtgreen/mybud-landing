import type { FC } from 'react';
import { t } from '../lib/i18n';

interface FounderKitSectionProps {
  background?: 'white' | 'gray';
  onCTAClick: () => void;
  remainingKits?: number;
}

const FounderKitSection: FC<FounderKitSectionProps> = ({ 
  background = 'white', 
  onCTAClick,
  remainingKits = 72 
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
                    Kit BUD
                  </h3>
                  <p className="text-emerald-100">Founder Edition</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">R$ 299</div>
                  <p className="text-sm text-emerald-100">Pagamento único</p>
                </div>
              </div>
            </div>

            {/* Kit Benefits */}
            <div className="p-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">O que está incluído:</h4>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#288664] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong className="text-gray-900">6 meses Premium</strong> no app My Bud</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#288664] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong className="text-gray-900">Camisa exclusiva</strong> My Bud (edição limitada)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#288664] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong className="text-gray-900">Pipeira premium</strong> de alta qualidade</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#288664] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong className="text-gray-900">Cartaz</strong> com arte canábica exclusiva</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#288664] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong className="text-gray-900">Acesso antecipado</strong> ao app antes do lançamento</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#288664] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong className="text-gray-900">Founder Badge</strong> no perfil do app</span>
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
              <span className="font-semibold text-gray-900">Edição limitada:</span> {remainingKits} kits restantes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderKitSection;
