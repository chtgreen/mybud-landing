import type { FC } from 'react';
import { t } from '../lib/i18n';
import { Clock3, BarChart3, Sprout, TrendingUp } from './icons';

const IndustryLegitimacy: FC = () => {
  const dataPoints = [
    { icon: Clock3, key: 'industry.data.point1' },
    { icon: BarChart3, key: 'industry.data.point2' },
    { icon: Sprout, key: 'industry.data.point3' },
    { icon: TrendingUp, key: 'industry.data.point4' },
  ];

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900">
            {t('industry.data.title')}
          </h2>
        </div>

        {/* Data Points */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
          {dataPoints.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:border-emerald-300 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-emerald-700" />
                </div>
                <p className="text-sm md:text-base font-medium text-zinc-700">
                  {t(item.key)}
                </p>
              </div>
            );
          })}
        </div>

        {/* Future hint */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100">
            <span className="text-sm text-emerald-700 font-medium">
              + {t('industry.data.future')}
            </span>
          </div>
        </div>

        {/* Punchline */}
        <div className="text-center">
          <p className="text-xl md:text-2xl font-bold text-emerald-700">
            {t('industry.data.punchline')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustryLegitimacy;
