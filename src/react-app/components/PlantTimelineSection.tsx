import type { FC } from 'react';
import { PlantTimeline } from './PlantTimeline';
import { SproutIcon } from './icons/LucideStageIcons';
import { t } from '../lib/i18n';

const PlantTimelineSection: FC = () => {
  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-20 w-[300px] h-[300px] bg-purple-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-emerald-400/5 rounded-full blur-3xl" />
        
        {/* Budzinho 2 in the garden - middle of page */}
        <img 
          src="/MyBud - Budzinho Colorido 2.png" 
          alt="Budzinho no jardim"
          className="absolute bottom-10 left-10 w-32 h-32 md:w-40 md:h-40 opacity-20 transform -rotate-6 hover:opacity-30 transition-opacity duration-300"
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full border border-purple-200/70 shadow-sm">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-200/60 text-purple-600">
              <SproutIcon className="h-4 w-4" />
            </span>
            <span className="text-sm font-medium text-purple-700">{t('plantTimeline.badge')}</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight tracking-tight">
            {t('plantTimeline.title1')}<br />
            <span className="text-emerald-600">{t('plantTimeline.title2')}</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t('plantTimeline.subtitle')}
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <PlantTimeline />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {/* Feature 1 */}
          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border border-emerald-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-black mb-3">
              Contagem de tempo automática
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Dias e semanas calculados para cada estágio. 
              Saiba exatamente há quanto tempo a planta está vegetativa ou florindo.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border border-purple-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-black mb-3">
              {t('plantTimeline.features.visual.title')}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t('plantTimeline.features.visual.description')}
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-black mb-3">
              {t('plantTimeline.features.predict.title')}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t('plantTimeline.features.predict.description')}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PlantTimelineSection;
