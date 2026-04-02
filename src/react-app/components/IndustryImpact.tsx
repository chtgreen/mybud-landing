import type { FC } from 'react';
import { t } from '../lib/i18n';
import { Shield } from './icons';

const IndustryImpact: FC = () => {
  const principles = [
    t('industry.experience.principle1'),
    t('industry.experience.principle2'),
    t('industry.experience.principle3'),
    t('industry.experience.principle4'),
  ];

  const effects = [
    t('industry.experience.effect1'),
    t('industry.experience.effect2'),
    t('industry.experience.effect3'),
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 leading-tight">
            {t('industry.experience.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Principles */}
          <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-200">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-zinc-500" />
              <span className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">Principles</span>
            </div>
            <div className="space-y-4">
              {principles.map((principle, i) => (
                <div key={i} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-zinc-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                  <span className="text-lg font-medium text-zinc-700">{principle}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Effects */}
          <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-200">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">Effect</span>
            </div>
            <div className="space-y-4">
              {effects.map((effect, i) => (
                <div key={i} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg font-medium text-emerald-800">{effect}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryImpact;
