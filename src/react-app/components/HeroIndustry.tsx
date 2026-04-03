import { useState, useEffect, type FC } from 'react';
import { t } from '../lib/i18n';
import { Rocket, Target, CheckCircle2 } from './icons';

interface HeroIndustryProps {
  onCTAClick: () => void;
  onDemoClick?: () => void;
}

const HeroIndustry: FC<HeroIndustryProps> = ({ onCTAClick, onDemoClick }) => {
  const [brandName, setBrandName] = useState('[SuaMarca]');
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has('brand')) setBrandName(params.get('brand') as string);
  }, []);

  const scenarios = [
    {
      context: t('industry.hero.scenario1.context'),
      task: `${brandName} ${t('industry.hero.scenario1.product')}`,
      detail: t('industry.hero.scenario1.detail'),
      icon: '🌱',
    },
    {
      context: t('industry.hero.scenario2.context'),
      task: `${brandName} ${t('industry.hero.scenario2.product')}`,
      detail: t('industry.hero.scenario2.detail'),
      icon: '✂️',
    },
    {
      context: t('industry.hero.scenario3.context'),
      task: `${brandName} ${t('industry.hero.scenario3.product')}`,
      detail: t('industry.hero.scenario3.detail'),
      icon: '💧',
    },
    {
      context: t('industry.hero.scenario4.context'),
      task: `${brandName} ${t('industry.hero.scenario4.product')}`,
      detail: t('industry.hero.scenario4.detail'),
      icon: '🛡️',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % scenarios.length);
        setVisible(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, [scenarios.length]);

  const scenario = scenarios[active];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-900 to-emerald-950">
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Cpath d='M0 0h1v40H0zM40 0h1v40h-1zM0 0h40v1H0zM0 40h40v1H0z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-semibold text-emerald-300 tracking-wide">
                {t('industry.hero.badge')}
              </span>
            </div>
          </div>

          {/* Headline */}
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              <span className="text-white whitespace-pre-line">{t('industry.hero.title')}</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              {t('industry.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                type="button"
                onClick={() => document.getElementById('brand-experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-bold bg-emerald-500 text-white hover:bg-emerald-400 shadow-lg shadow-emerald-500/25 transition-all"
              >
                {t('industry.hero.cta')}
              </button>
              <button
                type="button"
                onClick={onCTAClick}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold text-zinc-300 border border-zinc-700 hover:border-zinc-500 hover:text-white transition-all"
              >
                <Rocket className="w-5 h-5" />
                {t('industry.hero.secondaryCta')}
              </button>
            </div>
          </div>

          {/* Split Screen */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">

              {/* Left: Without MyBud */}
              <div className="relative rounded-2xl border border-zinc-700/50 bg-zinc-800/50 p-6 md:p-8 backdrop-blur-sm">
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20">
                  <span className="text-xs font-medium text-red-400">{t('industry.hero.visual.left')}</span>
                </div>
                <div className="pt-8 space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-700/30 border border-zinc-700/50">
                    <div className="w-8 h-8 rounded bg-zinc-600/50" />
                    <div className="flex-1 space-y-1.5">
                      <div className="h-2.5 bg-zinc-600/50 rounded w-3/4" />
                      <div className="h-2 bg-zinc-700/50 rounded w-1/2" />
                    </div>
                    <span className="text-xs text-zinc-500">???</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-700/30 border border-zinc-700/50 opacity-60">
                    <div className="w-8 h-8 rounded bg-zinc-600/50" />
                    <div className="flex-1 space-y-1.5">
                      <div className="h-2.5 bg-zinc-600/50 rounded w-2/3" />
                      <div className="h-2 bg-zinc-700/50 rounded w-1/3" />
                    </div>
                    <span className="text-xs text-red-400/60">!</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-700/30 border border-zinc-700/50 opacity-40">
                    <div className="w-8 h-8 rounded bg-zinc-600/50" />
                    <div className="flex-1 space-y-1.5">
                      <div className="h-2.5 bg-zinc-600/50 rounded w-1/2" />
                      <div className="h-2 bg-zinc-700/50 rounded w-2/5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Animated scenarios — brand at every moment */}
              <div className="relative rounded-2xl border border-emerald-500/30 bg-emerald-950/30 p-6 md:p-8 backdrop-blur-sm overflow-hidden">
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <span className="text-xs font-medium text-emerald-400">{t('industry.hero.visual.right')}</span>
                </div>

                <div className="pt-8">
                  {/* Progress dots */}
                  <div className="flex gap-1.5 mb-5">
                    {scenarios.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 rounded-full transition-all duration-500 ${
                          i === active ? 'w-6 bg-emerald-400' : 'w-2 bg-zinc-600'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Animated scenario */}
                  <div
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? 'translateY(0px)' : 'translateY(8px)',
                      transition: 'opacity 0.3s ease, transform 0.3s ease',
                    }}
                  >
                    {/* What grower is doing */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-700/50 border border-zinc-600/40 mb-4">
                      <span className="text-base leading-none">{scenario.icon}</span>
                      <span className="text-xs font-semibold text-zinc-300">{scenario.context}</span>
                    </div>

                    {/* Brand product suggested */}
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-900/40 border border-emerald-500/25 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <Target className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-emerald-100 truncate">{scenario.task}</p>
                        <p className="text-xs text-emerald-400/70 mt-0.5">{scenario.detail}</p>
                      </div>
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    </div>

                    {/* Ghost next tasks */}
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-emerald-900/15 border border-emerald-500/10 opacity-40">
                      <div className="w-7 h-7 rounded bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                        <Target className="w-3.5 h-3.5 text-emerald-400/50" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="h-2 bg-emerald-400/20 rounded w-2/3" />
                        <div className="h-1.5 bg-emerald-400/10 rounded w-1/2" />
                      </div>
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

export default HeroIndustry;
