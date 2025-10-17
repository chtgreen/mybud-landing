import type { FC } from 'react';
import { t } from '../lib/i18n';
import { PhoneScreenshot } from './PhoneMockup';

const ProblemSection: FC = () => {
  return (
    <section className="relative py-20 md:py-32 bg-[#E6E7E8] overflow-hidden">
      {/* Organic Background Elements - Grafismos proprietários do Budzinho */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Bolhas orgânicas sutis */}
        <div className="absolute top-10 right-20 w-[300px] h-[300px] bg-[#288664]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-[#288664]/5 rounded-full blur-3xl" />
        
        {/* Grafismo Orgânico 1 - Elemento do Budzinho (canto superior esquerdo) */}
        <img 
          src="/elemento-1.svg" 
          alt=""
          className="absolute -top-16 -left-16 w-64 h-64 opacity-[0.04] transform -rotate-12"
        />
        
        {/* Contorno Verde do Budzinho - translúcido (canto superior direito) */}
        <img 
          src="/budzinho-contorno-verde-4.svg" 
          alt=""
          className="absolute top-20 -right-12 w-48 h-48 opacity-[0.05]"
        />
        
        {/* Elemento Orgânico 5 - meio da página esquerda */}
        <img 
          src="/elemento-5.svg" 
          alt=""
          className="absolute top-1/3 -left-20 w-56 h-56 opacity-[0.04] transform rotate-45"
        />
        
        {/* Elemento Orgânico 12 - inferior direita */}
        <img 
          src="/elemento-12.svg" 
          alt=""
          className="absolute bottom-32 -right-16 w-72 h-72 opacity-[0.04] transform rotate-12"
        />
        
        {/* Contorno Verde 5 - meio-baixo esquerda */}
        <img 
          src="/budzinho-contorno-verde-5.svg" 
          alt=""
          className="absolute bottom-20 left-10 w-40 h-40 opacity-[0.06] transform -rotate-6"
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
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#D5C0FD]">
              {/* Screenshot with iPhone Mockup */}
              <div className="py-8 px-4 bg-gradient-to-br from-purple-50 to-white">
                <PhoneScreenshot 
                  src="/Screenshot_1760407521.png" 
                  alt="Timeline da planta"
                  className="transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="w-12 h-12 bg-[#D5C0FD]/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#D5C0FD]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  {t('problem.timeline.title')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('problem.timeline.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 - Voice */}
          <div className="group">
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#288664]">
              {/* Screenshot with iPhone Mockup */}
              <div className="py-8 px-4 bg-gradient-to-br from-emerald-50 to-white">
                <PhoneScreenshot 
                  src="/Screenshot_1760407521.png" 
                  alt="Registro por voz"
                  className="transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="w-12 h-12 bg-[#288664]/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#288664]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  {t('problem.voice.title')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('problem.voice.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 - Tasks */}
          <div className="group">
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#3b82f6]">
              {/* Screenshot with iPhone Mockup */}
              <div className="py-8 px-4 bg-gradient-to-br from-blue-50 to-white">
                <PhoneScreenshot 
                  src="/Screenshot_1760407521.png" 
                  alt="Tarefas e lembretes"
                  className="transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  {t('problem.tasks.title')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('problem.tasks.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 - Insights */}
          <div className="group">
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#EB4C80]">
              {/* Screenshot with iPhone Mockup */}
              <div className="py-8 px-4 bg-gradient-to-br from-pink-50 to-white">
                <PhoneScreenshot 
                  src="/Screenshot_1760407521.png" 
                  alt="Insights inteligentes"
                  className="transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="w-12 h-12 bg-[#EB4C80]/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#EB4C80]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  {t('problem.stickers.title')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('problem.stickers.description')}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

