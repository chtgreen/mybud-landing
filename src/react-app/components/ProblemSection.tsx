import type { FC } from 'react';
import { t } from '../lib/i18n';

const ProblemSection: FC = () => {
  return (
    <section className="relative py-20 md:py-32 bg-[#E6E7E8] overflow-hidden">
      {/* Background Elements with Budzinho */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Bolhas orgânicas sutis */}
        <div className="absolute top-10 right-20 w-[300px] h-[300px] bg-[#288664]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-[#288664]/5 rounded-full blur-3xl" />
        
        {/* Budzinho 1 - Top right */}
        <img 
          src="/MyBud - Budzinho Colorido 1.png" 
          alt=""
          className="absolute top-10 right-10 w-28 h-28 md:w-36 md:h-36 opacity-15 transform rotate-12 hover:opacity-25 transition-opacity duration-300"
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Title and Subtitle - Hierarquia Clara */}
        <div className="text-center mb-20 space-y-6">
          {/* Badge de contexto */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#288664]/20">
            <span className="w-2 h-2 bg-[#288664] rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-[#288664]">Feito de grower pra grower</span>
          </div>

          {/* Título principal - Uncut Sans */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-black leading-tight tracking-tight">
            {t('problem.title')}
          </h2>
          
          {/* Subtítulo - Instrument Serif Italic (toque humano) */}
          <p className="text-2xl md:text-3xl text-[#288664] serif-accent leading-relaxed max-w-2xl mx-auto">
            {t('problem.subtitle')}
          </p>
          
          {/* Descrição com mais respiro */}
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mt-8">
            {t('problem.description')}
          </p>
        </div>

        {/* Layout Simples e Limpo - Grid de 4 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-[1400px] mx-auto">
          
          {/* Card 1 - Timeline */}
          <div className="group">
            <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#D5C0FD] p-6 flex flex-col gap-4">
              <div className="w-12 h-12 bg-[#D5C0FD]/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-[#D5C0FD]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black">
                {t('problem.timeline.title')}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {t('problem.timeline.description')}
              </p>
            </div>
          </div>

          {/* Card 2 - Voice */}
          <div className="group">
            <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#288664] p-6 flex flex-col gap-4">
              <div className="w-12 h-12 bg-[#288664]/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-[#288664]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black">
                {t('problem.voice.title')}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {t('problem.voice.description')}
              </p>
            </div>
          </div>

          {/* Card 3 - Tasks */}
          <div className="group">
            <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#3b82f6] p-6 flex flex-col gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black">
                {t('problem.tasks.title')}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {t('problem.tasks.description')}
              </p>
            </div>
          </div>

          {/* Card 4 - Insights */}
          <div className="group">
            <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#EB4C80] p-6 flex flex-col gap-4">
              <div className="w-12 h-12 bg-[#EB4C80]/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-[#EB4C80]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black">
                {t('problem.stickers.title')}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {t('problem.stickers.description')}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
