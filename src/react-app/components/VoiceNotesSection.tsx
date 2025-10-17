import type { FC } from 'react';
import { t } from '../lib/i18n';
import { VoiceNoteDemo } from './VoiceNoteDemo';

const VoiceNotesSection: FC = () => {
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
            <span className="text-sm font-medium text-emerald-700">Unique Feature</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight tracking-tight">
            Just Speak,<br />
            <span className="text-emerald-600">We Track Everything</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            The only grow journal with AI-powered voice recognition. 
            No typing, no forms — just talk naturally.
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
                  <span className="text-2xl">🎤</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Natural Language Understanding
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Say "I watered Blue Dream with 500ml" and AI automatically creates
                    the activity with all details. No forms, no dropdowns.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Smart Activity Classification
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    AI recognizes 25+ activity types from your speech: watering, training,
                    transplanting, noting issues — all automatically categorized.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Context-Aware
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Knows your plants, grows, and recent activities. AI fills in the details
                    automatically, making logging instant and effortless.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">⏱️</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Save 10+ Minutes Per Day
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    What used to take 5 minutes of typing now takes 10 seconds of speaking.
                    More time growing, less time logging.
                  </p>
                </div>
              </div>
            </div>

            {/* Keywords */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100">
              <p className="text-sm font-semibold text-gray-700 mb-3">
                AI understands keywords like:
              </p>
              <div className="flex flex-wrap gap-2">
                {['watered', 'fed', 'transplanted', 'topped', 'defoliated', 'harvested', 'pH', 'temperature', 'flowering', 'yellowing', 'pests'].map((keyword) => (
                  <span key={keyword} className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full border border-emerald-200">
                    {keyword}
                  </span>
                ))}
                <span className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-200">
                  +100 more
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Join growers who've saved <strong className="text-emerald-600">hours of manual logging</strong>
          </p>
          <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Try Voice Recording Beta
          </button>
        </div>
      </div>
    </section>
  );
};

export default VoiceNotesSection;

