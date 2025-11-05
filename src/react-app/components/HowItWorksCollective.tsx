import type { FC } from 'react';
import { t } from '../lib/i18n';
import { Sprout, Mic, BarChart3, Users } from './icons';
import type { LucideIcon } from './icons';

interface Step {
  title: string;
  description: string;
  icon: LucideIcon;
}

const HowItWorksCollective: FC = () => {
  const steps: Step[] = [
    {
      title: t('collective.howItWorks.step1.title'),
      description: t('collective.howItWorks.step1.description'),
      icon: Sprout,
    },
    {
      title: t('collective.howItWorks.step2.title'),
      description: t('collective.howItWorks.step2.description'),
      icon: Mic,
    },
    {
      title: t('collective.howItWorks.step3.title'),
      description: t('collective.howItWorks.step3.description'),
      icon: BarChart3,
    },
    {
      title: t('collective.howItWorks.step4.title'),
      description: t('collective.howItWorks.step4.description'),
      icon: Users,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900">
            {t('collective.howItWorks.title')}
          </h2>
        </div>

        {/* Steps Flow - Clean Professional Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index} 
                className="relative group"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full hover:border-emerald-300 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  {/* Step Number */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-emerald-600 text-white text-xl font-bold rounded-xl">
                      {index + 1}
                    </div>
                    <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl group-hover:bg-emerald-50 transition-colors">
                      <Icon className="w-6 h-6 text-emerald-600" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 text-zinc-900">
                    {step.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Clean Arrow Connector */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <svg 
                      className="w-6 h-6 text-gray-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M13 7l5 5m0 0l-5 5m5-5H6" 
                      />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <a href="#collective-lead-form" className="btn-primary text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all">
            {t('collective.howItWorks.cta')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksCollective;

