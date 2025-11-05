import type { FC } from 'react';
import { useState } from 'react';
import { t, tArray } from '../lib/i18n';
import { Target, Wrench, Bolt, BarChart3, Lightbulb, CheckCircle2 } from './icons';
import type { LucideIcon } from './icons';

interface FeaturesMapProps {
  background?: 'white' | 'gray';
}

type PillarType = 'traceability' | 'control' | 'agility' | 'intelligence';

const FeaturesMap: FC<FeaturesMapProps> = ({ background = 'white' }) => {
  const bgClass = background === 'white' ? 'bg-white' : 'bg-gray-50';
  const [activePillar, setActivePillar] = useState<PillarType>('traceability');

  const pillars: PillarType[] = [
    'traceability',
    'control',
    'agility',
    'intelligence'
  ];

  // Consistent color palette - emerald green for active, gray for inactive
  const pillarConfig: Record<PillarType, {
    icon: LucideIcon;
  }> = {
    traceability: {
      icon: Target,
    },
    control: {
      icon: Wrench,
    },
    agility: {
      icon: Bolt,
    },
    intelligence: {
      icon: BarChart3,
    },
  };

  return (
    <section id="features" className={`py-24 ${bgClass} relative overflow-hidden`}>
      {/* Elegant subtle background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-300 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-teal-300 rounded-full blur-[180px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header - thoughtful and inviting */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-5 tracking-tight leading-tight">
            {t('collective.featuresMap.title')}
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
            {t('collective.featuresMap.subtitle')}
          </p>
        </div>

        {/* Two-Column Carousel Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN - Navigation Cards */}
          <div className="space-y-3">
            {pillars.map((pillar, idx) => {
              const config = pillarConfig[pillar];
              const Icon = config.icon;
              const isActive = activePillar === pillar;
              
              return (
                <button
                  key={pillar}
                  onClick={() => setActivePillar(pillar)}
                  className={`
                    group w-full text-left px-6 py-6 rounded-xl 
                    transition-all duration-500 ease-out
                    ${isActive 
                      ? 'bg-white shadow-lg border-2 border-zinc-200 translate-x-2' 
                      : 'bg-white/60 border-2 border-transparent hover:bg-white hover:shadow-md'
                    }
                  `}
                >
                  <div className="flex items-center gap-4">
                    {/* Icon - green when active, gray when inactive */}
                    <div className={`
                      w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0
                      transition-all duration-500
                      ${isActive ? 'bg-emerald-50 shadow-sm' : 'bg-zinc-50'}
                    `}>
                      <Icon className={`
                        w-7 h-7 transition-all duration-500
                        ${isActive ? 'text-emerald-700' : 'text-zinc-400'}
                      `} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`
                          text-xs font-bold transition-colors duration-500
                          ${isActive ? 'text-zinc-400' : 'text-zinc-300'}
                        `}>
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <h3 className={`
                          text-base font-semibold transition-colors duration-500
                          ${isActive ? 'text-zinc-900' : 'text-zinc-600'}
                        `}>
                          {t(`collective.featuresMap.pillars.${pillar}.title`)}
                        </h3>
                      </div>
                      <p className={`
                        text-xs transition-all duration-500
                        ${isActive ? 'text-zinc-500 opacity-100' : 'text-zinc-400 opacity-70'}
                      `}>
                        {t(`collective.featuresMap.pillars.${pillar}.keywords`).split(' • ')[0]}
                      </p>
                    </div>

                    {/* Active indicator - green when active */}
                    <div className={`
                      w-1 h-10 rounded-full transition-all duration-500
                      ${isActive ? 'bg-emerald-500 opacity-100' : 'bg-zinc-200 opacity-0'}
                    `} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT COLUMN - Content Details */}
          <div className="relative">
            {/* Content container with smooth transitions */}
            <div className="relative min-h-[600px]">
              {pillars.map((pillar) => {
                const config = pillarConfig[pillar];
                const Icon = config.icon;
                const pillarFeatures = tArray(`collective.featuresMap.pillars.${pillar}.features`) as string[];
                const isActive = activePillar === pillar;

                return (
                  <div
                    key={pillar}
                    className={`
                      absolute inset-0 transition-all duration-700 ease-out
                      ${isActive 
                        ? 'opacity-100 translate-x-0 pointer-events-auto' 
                        : 'opacity-0 translate-x-8 pointer-events-none'
                      }
                    `}
                  >
                    <div className="bg-white rounded-2xl border border-zinc-200 shadow-lg p-8 md:p-10 h-full">
                      {/* Header - consistent green for all */}
                      <div className="flex items-start gap-5 mb-8 pb-6 border-b border-zinc-100">
                        <div className="w-16 h-16 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0 shadow-sm">
                          <Icon className="w-8 h-8 text-emerald-700" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-4xl font-bold text-zinc-100">
                              {t(`collective.featuresMap.pillars.${pillar}.number`)}
                            </span>
                            <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight">
                              {t(`collective.featuresMap.pillars.${pillar}.title`)}
                            </h3>
                          </div>
                          <p className="text-sm text-zinc-500 leading-relaxed">
                            {t(`collective.featuresMap.pillars.${pillar}.keywords`)}
                          </p>
                        </div>
                      </div>

                      {/* Features List - consistent green checkmarks */}
                      <div className="space-y-3 mb-8">
                        {pillarFeatures.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 group"
                            style={{
                              animation: isActive ? `fadeInUp 0.5s ease-out ${idx * 0.1}s both` : 'none'
                            }}
                          >
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5 transition-transform group-hover:scale-110">
                              <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                            </div>
                            <span className="text-zinc-700 leading-relaxed flex-1">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Impact Section - consistent green accent */}
                      <div className="bg-gradient-to-br from-zinc-50 to-white rounded-xl p-6 border border-emerald-100">
                        <div className="flex items-start gap-4">
                          <div className="w-11 h-11 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                            <Lightbulb className="w-6 h-6 text-emerald-700" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-zinc-900 mb-2">
                              Impacto Real
                            </h4>
                            <p className="text-zinc-600 leading-relaxed text-sm">
                              {t(`collective.featuresMap.pillars.${pillar}.impact`)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom message - caring and clear */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-8 py-4 shadow-sm border border-zinc-200">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-zinc-700">
              <strong className="font-semibold">Tudo integrado em um único sistema.</strong>
              <span className="text-zinc-500 ml-2">Sem planilhas, sem improviso, sem falhas humanas.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesMap;
