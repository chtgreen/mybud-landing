import type { FC } from 'react';
import { VoiceNoteDemo } from './VoiceNoteDemo';
import { Bolt, Bot, Mic, Timer } from './icons';
import { t, getLoadedTranslations } from '../lib/i18n';
import { trackButtonClick } from '../lib/analytics';

interface VoiceNotesSectionProps {
  onCTAClick?: () => void;
}

const VoiceNotesSection: FC<VoiceNotesSectionProps> = ({ onCTAClick }) => {
  // Get array from translations (t() only returns strings)
  const translations = getLoadedTranslations();
  const keywords = (translations.b2c as any)?.voiceNotes?.keywords?.words || [];

  const handleCtaClick = () => {
    // Track Voice Notes CTA click
    trackButtonClick('Voice Notes CTA', 'Voice Notes Section', {
      featureSection: 'voice_notes',
      ctaPosition: 'bottom_section'
    });
    
    if (onCTAClick) {
      onCTAClick();
      return;
    }

    const betaSection = document.getElementById('beta');
    betaSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  
  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Background Elements - Luz suave e sombra */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-emerald-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-[300px] h-[300px] bg-emerald-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header com Selo Beta */}
        <div className="text-center mb-16 space-y-6 relative">
          {/* Selo Beta - Canto superior direito */}
          <div className="absolute -top-4 right-4 md:right-8 lg:right-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-xs font-bold shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>BETA ABERTO</span>
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600/10 backdrop-blur-sm rounded-full border border-emerald-600/20">
            <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm font-medium text-emerald-700">{t('b2c.voiceNotes.badge')}</span>
          </div>

          {/* Title - Aumentado para parecer momento mágico */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight tracking-tight">
            {t('b2c.voiceNotes.title1')}<br />
            <span className="text-emerald-600">{t('b2c.voiceNotes.title2')}</span>
          </h2>
          
          {/* Subtitle - Maior para dar ênfase */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t('b2c.voiceNotes.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Interactive Demo com sombra suave */}
          <div className="order-2 lg:order-1 relative">
            {/* Container com sombra suave */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100">
              <VoiceNoteDemo />
            </div>
            
            {/* Microfone pulsante decorativo - como se estivesse ouvindo */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
              {/* Ondas de som pulsantes */}
              <div className="absolute inset-0 rounded-full border-2 border-emerald-400 animate-ping opacity-75"></div>
              <div className="absolute inset-0 rounded-full border-2 border-emerald-400 animate-ping opacity-50" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>

          {/* Right - Features */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-6">
              {/* Feature 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                <Mic className="w-6 h-6 text-emerald-600" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">
                    {t('b2c.voiceNotes.features.natural.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                    {t('b2c.voiceNotes.features.natural.description')}
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Bot className="w-6 h-6 text-blue-600" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">
                    {t('b2c.voiceNotes.features.classification.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                    {t('b2c.voiceNotes.features.classification.description')}
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Bolt className="w-6 h-6 text-purple-600" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">
                    {t('b2c.voiceNotes.features.context.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                    {t('b2c.voiceNotes.features.context.description')}
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                <Timer className="w-6 h-6 text-amber-600" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">
                    {t('b2c.voiceNotes.features.timeSaver.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                    {t('b2c.voiceNotes.features.timeSaver.description')}
                </p>
              </div>
            </div>
            </div>

            {/* Keywords */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100">
              <p className="text-sm font-semibold text-gray-700 mb-3">
                {t('b2c.voiceNotes.keywords.title')}
              </p>
              <div className="flex flex-wrap gap-2">
                {Array.isArray(keywords) && keywords.map((keyword: string) => (
                  <span key={keyword} className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full border border-emerald-200">
                    {keyword}
                  </span>
                ))}
                <span className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-200">
                  {t('b2c.voiceNotes.keywords.more')}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-lg text-gray-600 mb-6" dangerouslySetInnerHTML={{ __html: t('b2c.voiceNotes.cta.text') }} />
          <button
            onClick={handleCtaClick}
            className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            {t('b2c.voiceNotes.cta.button')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default VoiceNotesSection;
