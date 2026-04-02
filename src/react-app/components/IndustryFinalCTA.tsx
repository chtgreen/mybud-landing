import type { FC } from 'react';
import { t } from '../lib/i18n';
import { Phone } from './icons';

interface IndustryFinalCTAProps {
  onCTAClick: () => void;
  onDemoClick?: () => void;
}

const IndustryFinalCTA: FC<IndustryFinalCTAProps> = ({ onCTAClick, onDemoClick }) => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-br from-zinc-900 via-zinc-900 to-emerald-950">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center">
          <p className="text-xl md:text-2xl lg:text-3xl text-zinc-300 mb-12 max-w-3xl mx-auto leading-relaxed whitespace-pre-line">
            {t('industry.finalCta.text')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onDemoClick || onCTAClick}
              className="inline-flex items-center gap-2 px-10 py-5 rounded-xl text-lg font-bold bg-emerald-500 text-white hover:bg-emerald-400 shadow-lg shadow-emerald-500/25 transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              {t('industry.finalCta.primaryCta')}
            </button>
            <button
              type="button"
              onClick={onCTAClick}
              className="inline-flex items-center gap-2 px-10 py-5 rounded-xl text-lg font-semibold text-zinc-300 border border-zinc-700 hover:border-zinc-500 hover:text-white transition-all"
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
