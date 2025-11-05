import type { FC } from 'react';
import { t } from '../lib/i18n';
import { Target, Clock3, Building2 } from './icons';

const IndustryWays: FC = () => {
  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
      {/* Subtle Decorative Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-300 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-6">
            {t('industry.ways.title')}
          </h2>
          <p className="text-xl text-zinc-600 max-w-4xl mx-auto leading-relaxed">
            {t('industry.ways.subtitle')}
          </p>
        </div>

        {/* Unified Professional Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Way 1 - Technical Presence */}
          <div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-xl bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                <Target className="w-8 h-8 text-emerald-700" />
              </div>
            </div>
            <div className="mb-4">
              <span className="text-xs font-semibold text-emerald-600/60 tracking-wider uppercase">Step 01</span>
              <h3 className="text-xl font-bold text-zinc-900 mt-2">
                {t('industry.ways.way1.title')}
              </h3>
            </div>
            <p className="text-base text-zinc-600 leading-relaxed">
              {t('industry.ways.way1.desc')}
            </p>
          </div>

          {/* Way 2 - Protocols */}
          <div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-xl bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                <Clock3 className="w-8 h-8 text-emerald-700" />
              </div>
            </div>
            <div className="mb-4">
              <span className="text-xs font-semibold text-emerald-600/60 tracking-wider uppercase">Step 02</span>
              <h3 className="text-xl font-bold text-zinc-900 mt-2">
                {t('industry.ways.way2.title')}
              </h3>
            </div>
            <p className="text-base text-zinc-600 leading-relaxed">
              {t('industry.ways.way2.desc')}
            </p>
          </div>

          {/* Way 3 - Hub */}
          <div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-xl bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                <Building2 className="w-8 h-8 text-emerald-700" />
              </div>
            </div>
            <div className="mb-4">
              <span className="text-xs font-semibold text-emerald-600/60 tracking-wider uppercase">Step 03</span>
              <h3 className="text-xl font-bold text-zinc-900 mt-2">
                {t('industry.ways.way3.title')}
              </h3>
            </div>
            <p className="text-base text-zinc-600 leading-relaxed">
              {t('industry.ways.way3.desc')}
            </p>
          </div>
        </div>

        {/* Reinforcement */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-emerald-50/50 to-white rounded-2xl p-8 border border-emerald-200/50">
            <p className="text-lg text-zinc-700 leading-relaxed">
              <strong className="text-zinc-900">{t('industry.ways.reinforcement')}</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryWays;

