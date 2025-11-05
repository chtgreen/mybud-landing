import type { FC } from 'react';
import { t } from '../lib/i18n';
import { AlertCircle, TrendingUp, Lightbulb } from './icons';

const IndustryProblem: FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900">
              {t('industry.problem.title')}
            </h2>
            <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
              {t('industry.problem.text')}
            </p>
          </div>

          {/* Key Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {/* Truth Card */}
            <div className="card p-8 border border-zinc-200 bg-white hover:border-zinc-300 transition-colors">
              <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 bg-zinc-100 rounded-xl">
                <AlertCircle className="w-7 h-7 text-zinc-600" />
              </div>
              <p className="text-lg font-semibold text-zinc-800 text-center leading-relaxed">
                {t('industry.problem.truth')}
              </p>
            </div>

            {/* Solution Card */}
            <div className="card p-8 border border-emerald-200 bg-gradient-to-br from-emerald-50/50 to-white hover:border-emerald-300 transition-colors">
              <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 bg-emerald-100/80 rounded-xl">
                <TrendingUp className="w-7 h-7 text-emerald-700" />
              </div>
              <p className="text-lg font-semibold text-emerald-800 text-center leading-relaxed">
                {t('industry.problem.solution')}
              </p>
            </div>
          </div>

          {/* Bottom Highlight */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-br from-emerald-50/50 to-white rounded-2xl border border-emerald-200/50">
              <Lightbulb className="w-6 h-6 text-emerald-700" />
              <p className="text-base font-semibold text-zinc-800">
                {t('industry.problem.highlight')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryProblem;

