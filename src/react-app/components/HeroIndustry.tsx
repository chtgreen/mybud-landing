import { useState, useEffect, type FC } from 'react';
import { t } from '../lib/i18n';

interface HeroIndustryProps {
  onCTAClick: () => void;
  onDemoClick?: () => void;
}

const HeroIndustry: FC<HeroIndustryProps> = ({ onCTAClick }) => {
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
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-zinc-900/90 border-b border-zinc-800/50">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(16,185,129,0.03)_1.5px,transparent_1.5px)] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/20 via-transparent to-zinc-900" />
      <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute top-[20%] -right-[10%] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Removed the floting badge overlay to avoid header overlapping issues */}

          {/* Headline - Slightly tighter and cleaner */}
          <div className="space-y-6 mb-12 relative flex flex-col items-center">
            {/* New Dynamic Scenario Inline - moved from above to inside the layout for stability */}
            <div className="mb-8 h-8 opacity-60">
              <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400 animate-in fade-in duration-500">
                <span>{scenarios[active].context}</span>
                <span className="text-zinc-700">|</span>
                <span className="text-white">{scenarios[active].product}</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tighter text-white drop-shadow-2xl whitespace-pre-line mb-4">
              {t('industry.hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto leading-relaxed font-bold">
              {t('industry.hero.subtitle')}
            </p>
          </div>

          {/* Primary Actions - Centered and High Impact */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
            <button
              type="button"
              onClick={() => document.getElementById('brand-experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl text-lg font-black bg-emerald-500 text-zinc-950 hover:bg-emerald-400 shadow-[0_15px_30px_rgba(16,185,129,0.3)] transition-all hover:scale-105 active:scale-95"
            >
              Ver minha marca
            </button>
            <button
              type="button"
              onClick={onCTAClick}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl text-lg font-bold text-zinc-300 border border-zinc-700 hover:border-zinc-500 hover:text-white transition-all bg-zinc-900/40 backdrop-blur-xl flex items-center justify-center gap-2"
            >
              Falar com o time
            </button>
          </div>

          {/* Visual Trust Indicator - More space and cleaner */}
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-8 max-w-3xl mx-auto mt-32 pt-12 border-t border-zinc-800/50">
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
