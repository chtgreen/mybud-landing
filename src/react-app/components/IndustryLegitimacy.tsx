import type { FC } from 'react';
import { t } from '../lib/i18n';
import { Lock, CheckCircle2 } from './icons';

const IndustryLegitimacy: FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
            {t('industry.legitimacy.title')}
          </h2>

          <p className="text-lg text-zinc-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            {t('industry.legitimacy.intro')}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Privacy */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-emerald-300 transition-colors flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6 text-emerald-700" />
              </div>
              <div className="text-left">
                <p className="text-base font-semibold text-zinc-800 leading-relaxed">
                  {t('industry.legitimacy.privacy')}
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-emerald-300 transition-colors flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-emerald-700" />
              </div>
              <div className="text-left">
                <p className="text-base font-semibold text-zinc-800 leading-relaxed">
                  {t('industry.legitimacy.mission')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryLegitimacy;

