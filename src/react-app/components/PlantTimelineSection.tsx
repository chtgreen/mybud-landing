import type { FC } from 'react';
import { PlantTimeline } from './PlantTimeline';

const PlantTimelineSection: FC = () => {
  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-20 w-[300px] h-[300px] bg-purple-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-emerald-400/5 rounded-full blur-3xl" />
        
        {/* Decorative plant graphics */}
        <img 
          src="/elemento-5.svg" 
          alt=""
          className="absolute top-20 right-10 w-48 h-48 opacity-[0.03] transform rotate-12"
        />
        <img 
          src="/budzinho-contorno-verde-4.svg" 
          alt=""
          className="absolute bottom-20 left-10 w-56 h-56 opacity-[0.04] transform -rotate-12"
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full border border-purple-200">
            <span className="text-2xl">🌱</span>
            <span className="text-sm font-medium text-purple-700">Complete Journey</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight tracking-tight">
            From Seed to Harvest,<br />
            <span className="text-emerald-600">Every Stage Tracked</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Track your plant's complete lifecycle with our visual timeline.
            Never lose track of where you are in the journey.
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
              Automatic Time Tracking
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Days and weeks calculated automatically for each stage. 
              Know exactly how long your plant has been vegetating or flowering.
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
              Stage Milestones
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Track important transitions: when you topped, when flowering started,
              when trichomes turned amber. Your complete grow story.
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
              Stage-Specific Insights
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Get recommendations tailored to your current stage. 
              AI knows what to track and what matters most right now.
            </p>
          </div>
        </div>

        {/* Visual Example */}
        <div className="mt-20 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border border-gray-200">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-black mb-4">
                See Your Progress
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Visual timeline shows exactly where you are in the grow cycle.
                With automatic day/week counting, you'll always know:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">How long in current stage (days/weeks)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Total days from germination</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Estimated time to harvest</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Historical stage data for future grows</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              {/* Stage Progress Example */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <h4 className="font-semibold text-gray-900">Blue Dream - Flowering</h4>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full font-medium">
                    Week 6
                  </span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Germinating → Rooting</p>
                      <p className="text-xs text-gray-500">Completed in 10 days</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Vegetating</p>
                      <p className="text-xs text-gray-500">Completed in 35 days (5 weeks)</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Flowering</p>
                      <p className="text-xs text-purple-600">Currently at 42 days (6 weeks)</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 opacity-50">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-500">Harvest → Drying → Curing</p>
                      <p className="text-xs text-gray-400">Est. 2-3 weeks remaining</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantTimelineSection;
