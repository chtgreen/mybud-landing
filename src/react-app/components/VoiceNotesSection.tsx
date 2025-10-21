import type { FC } from 'react';
import { VoiceNoteDemo } from './VoiceNoteDemo';
import { Bolt, Bot, Mic, Timer } from './icons';
import { t, getLoadedTranslations } from '../lib/i18n';

const VoiceNotesSection: FC = () => {
  // Get array from translations (t() only returns strings)
  const translations = getLoadedTranslations();
  const keywords = (translations.b2c as any)?.voiceNotes?.keywords?.words || [];
  
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-emerald-50 via-white to-emerald-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-emerald-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-[300px] h-[300px] bg-emerald-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600/10 backdrop-blur-sm rounded-full border border-emerald-600/20">
            <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm font-medium text-emerald-700">{t('b2c.voiceNotes.badge')}</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight tracking-tight">
            {t('b2c.voiceNotes.title1')}<br />
            <span className="text-emerald-600">{t('b2c.voiceNotes.title2')}</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t('b2c.voiceNotes.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Interactive Demo */}
          <div className="order-2 lg:order-1">
            <VoiceNoteDemo />
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
          <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            {t('b2c.voiceNotes.cta.button')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default VoiceNotesSection;
