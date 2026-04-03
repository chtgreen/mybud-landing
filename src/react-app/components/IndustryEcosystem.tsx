import type { FC } from 'react';
import { t } from '../lib/i18n';
import { Target, CheckCircle2 } from './icons';

const IndustryEcosystem: FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="bg-emerald-50 rounded-3xl p-8 md:p-12 border border-emerald-200">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-bold mb-6">
                🚀 {t('industry.ecosystem.badge')}
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-6 leading-tight">
                {t('industry.ecosystem.title')}
              </h2>
              <p className="text-lg text-emerald-700/80 mb-8 font-medium">
                {t('industry.ecosystem.subtitle')}
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-zinc-900">{t('industry.ecosystem.benefit1.title')}</h4>
                    <p className="text-sm text-zinc-600">{t('industry.ecosystem.benefit1.desc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-zinc-900">{t('industry.ecosystem.benefit2.title')}</h4>
                    <p className="text-sm text-zinc-600">{t('industry.ecosystem.benefit2.desc')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400 to-emerald-300 rounded-3xl transform rotate-3 scale-105 opacity-20" />
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">{t('industry.ecosystem.card.line1')}</h3>
                <div className="w-0.5 h-6 bg-gray-200 my-2" />
                <h3 className="text-xl font-bold text-emerald-600 mb-2">{t('industry.ecosystem.card.line2')}</h3>
                <p className="text-sm text-zinc-500 mt-4 leading-relaxed">{t('industry.ecosystem.card.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryEcosystem;
