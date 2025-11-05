import type { FC } from 'react';
import { t } from '../lib/i18n';
import { Rocket, Phone } from './icons';

interface IndustryFinalCTAProps {
  onCTAClick: () => void;
}

const IndustryFinalCTA: FC<IndustryFinalCTAProps> = ({ onCTAClick }) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-6 leading-tight">
            {t('industry.finalCta.title')}
          </h2>

          <p className="text-xl text-zinc-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('industry.finalCta.text')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onCTAClick}
              className="inline-flex items-center gap-2 px-10 py-5 rounded-xl text-lg font-bold bg-emerald-700 text-white hover:bg-emerald-800 hover:scale-105 shadow-lg transition-all"
            >
              <Rocket className="w-6 h-6" />
              {t('industry.finalCta.primaryCta')}
            </button>
            <button
              type="button"
              onClick={onCTAClick}
              className="inline-flex items-center gap-2 px-10 py-5 rounded-xl text-lg font-bold bg-white text-zinc-900 hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 hover:scale-105 transition-all"
            >
              <Phone className="w-6 h-6" />
              {t('industry.finalCta.secondaryCta')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryFinalCTA;

