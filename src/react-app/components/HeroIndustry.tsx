import { useState, useEffect, type FC } from 'react';
import { t } from '../lib/i18n';
import { Rocket } from './icons';

interface HeroIndustryProps {
  onCTAClick: () => void;
  onDemoClick?: () => void;
}

const HeroIndustry: FC<HeroIndustryProps> = ({ onCTAClick, onDemoClick }) => {
  const [active, setActive] = useState(0);

  const scenarios = [
    { context: 'Preparando o solo', product: 'Solo Mix' },
    { context: 'Tirando clone', product: 'Root Booster' },
    { context: 'Preparando o tanque', product: 'Grow A' },
    { context: 'Protocolo IPM', product: 'Neem Spray' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % scenarios.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [scenarios.length]);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute top-[20%] -right-[10%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* New Dynamic Scenario Badge - REPLACING THE STATIC ONE */}
          <div className="flex justify-center mb-8 h-12">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-zinc-900/80 border border-emerald-500/30 backdrop-blur-xl shadow-2xl transition-all duration-700 animate-in slide-in-from-top-4">
              <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <div className="flex items-center gap-2 overflow-hidden">
                <span className="text-sm font-black text-emerald-400 uppercase tracking-widest whitespace-nowrap">
                  {scenarios[active].context}
                </span>
                <span className="text-zinc-500 font-bold">→</span>
                <span className="text-sm font-bold text-white whitespace-nowrap">
                  {scenarios[active].product}
                </span>
              </div>
            </div>
          </div>

          {/* Headline - Slightly tighter and cleaner */}
          <div className="space-y-6 mb-12">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tighter text-white drop-shadow-2xl whitespace-pre-line">
              {t('industry.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-xl mx-auto leading-relaxed font-semibold">
              {t('industry.hero.subtitle')}
            </p>
          </div>

          {/* Primary Actions - Centered and High Impact */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
            <button
              type="button"
              onClick={() => document.getElementById('brand-experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-12 py-5 rounded-2xl text-xl font-black bg-emerald-500 text-zinc-950 hover:bg-emerald-400 shadow-[0_20px_40px_rgba(16,185,129,0.3)] transition-all hover:scale-105 active:scale-95"
            >
              {t('industry.hero.cta')}
            </button>
            <button
              type="button"
              onClick={onCTAClick}
              className="w-full sm:w-auto px-12 py-5 rounded-2xl text-xl font-bold text-zinc-100 border-2 border-zinc-700 hover:border-zinc-400 hover:text-white transition-all bg-zinc-900/60 backdrop-blur-xl flex items-center justify-center gap-2"
            >
              <Rocket className="w-6 h-6" />
              {t('industry.hero.secondaryCta')}
            </button>
          </div>

          {/* Visual Trust Indicator - Simplified/Tightened */}
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 max-w-2xl mx-auto mt-20 pt-10 border-t border-zinc-900/50">
            <div className="text-center group">
              <p className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em] mb-1 opacity-70 group-hover:opacity-100 transition-opacity">Execution Engine</p>
              <p className="text-sm font-bold text-zinc-500">Protocolo → Tarefa</p>
            </div>
            <div className="text-center group">
              <p className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em] mb-1 opacity-70 group-hover:opacity-100 transition-opacity">Retention</p>
              <p className="text-sm font-bold text-zinc-500">Marca No Cultivo</p>
            </div>
            <div className="text-center group">
              <p className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em] mb-1 opacity-70 group-hover:opacity-100 transition-opacity">Data Ops</p>
              <p className="text-sm font-bold text-zinc-500">Uso Real</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroIndustry;
