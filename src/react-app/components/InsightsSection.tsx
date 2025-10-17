import type { FC } from 'react';
import { t } from '../lib/i18n';
import { InsightCards } from './InsightCards';
import { ActivityFeed } from './ActivityFeed';

const InsightsSection: FC = () => {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 right-20 w-[350px] h-[350px] bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-purple-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full border border-blue-200">
            <span className="text-2xl">🤖</span>
            <span className="text-sm font-medium text-blue-700">AI-Powered Intelligence</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight tracking-tight">
            Your Personal<br />
            <span className="text-emerald-600">Grow Coach</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            AI analyzes your grow in real-time and provides expert recommendations
            tailored to your plants, stage, and environment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto mb-20">
          {/* Left - Insights */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-6">
              Smart Recommendations
            </h3>
            <InsightCards limit={4} />
            
            <div className="mt-6 p-6 bg-white rounded-xl border border-blue-100">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900 mb-1">
                    Context-Aware Insights
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Insights adapt to your plant stage, grow week, environment metrics,
                    and recent activities. It's like having a master grower watching 24/7.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Activity Feed */}
          <div>
            <ActivityFeed limit={5} />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {/* Feature 1 */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h4 className="font-semibold text-black mb-2">Stage-Specific</h4>
            <p className="text-sm text-gray-600">
              Different advice for vegetating vs flowering plants
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h4 className="font-semibold text-black mb-2">Metric Tracking</h4>
            <p className="text-sm text-gray-600">
              Alerts when temperature, humidity, VPD are out of range
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🔬</span>
            </div>
            <h4 className="font-semibold text-black mb-2">Problem Detection</h4>
            <p className="text-sm text-gray-600">
              AI spots patterns that indicate nutrient issues or stress
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">📚</span>
            </div>
            <h4 className="font-semibold text-black mb-2">Educational</h4>
            <p className="text-sm text-gray-600">
              Learn why metrics matter and best practices for each stage
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200">
          <h3 className="text-3xl font-bold text-black mb-8 text-center">
            How AI Coaching Works
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📝</span>
              </div>
              <div className="mb-3">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-emerald-600 text-white rounded-full font-bold text-sm mb-2">
                  1
                </span>
              </div>
              <h4 className="font-semibold text-black mb-2">You Track Activities</h4>
              <p className="text-sm text-gray-600">
                Log watering, metrics, observations using voice or manual entry
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤖</span>
              </div>
              <div className="mb-3">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full font-bold text-sm mb-2">
                  2
                </span>
              </div>
              <h4 className="font-semibold text-black mb-2">AI Analyzes</h4>
              <p className="text-sm text-gray-600">
                Engine checks stage, metrics, patterns against 1000+ expert rules
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💡</span>
              </div>
              <div className="mb-3">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-purple-600 text-white rounded-full font-bold text-sm mb-2">
                  3
                </span>
              </div>
              <h4 className="font-semibold text-black mb-2">Get Recommendations</h4>
              <p className="text-sm text-gray-600">
                Receive timely, actionable insights specific to your grow
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">
              1000+
            </div>
            <p className="text-gray-600">Expert Rules</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
              19
            </div>
            <p className="text-gray-600">Tracked Metrics</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
              9
            </div>
            <p className="text-gray-600">Growth Stages</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">
              24/7
            </div>
            <p className="text-gray-600">Monitoring</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Stop guessing. Start growing with <strong className="text-emerald-600">AI-powered confidence</strong>
          </p>
          <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Get Your AI Coach
          </button>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;

