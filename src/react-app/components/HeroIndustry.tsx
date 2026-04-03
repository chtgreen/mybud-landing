import { type FC } from 'react';
import { t } from '../lib/i18n';

interface HeroIndustryProps {
  onCTAClick: () => void;
}

const HeroIndustry: FC<HeroIndustryProps> = ({ onCTAClick }) => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-zinc-900/90 border-b border-zinc-800/50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(16,185,129,0.03)_1.5px,transparent_1.5px)] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/20 via-transparent to-zinc-900" />
      <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[20%] -right-[10%] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tighter text-white lowercase">
              {t('industry.hero.title')}
            </h1>
            <p className="text-base md:text-lg text-zinc-500 max-w-lg mx-auto leading-relaxed font-bold lowercase opacity-80">
              {t('industry.hero.subtitle')}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button
              type="button"
              onClick={() => document.getElementById('brand-experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-10 py-4 rounded-2xl text-lg font-black bg-emerald-500 text-zinc-950 hover:bg-emerald-400 shadow-[0_15px_30px_rgba(16,185,129,0.3)] transition-all hover:scale-105 active:scale-95"
            >
              Ver minha marca
            </button>
            <button
              type="button"
              onClick={onCTAClick}
              className="w-full sm:w-auto px-10 py-4 rounded-2xl text-lg font-bold text-zinc-300 border border-zinc-700 hover:border-zinc-500 hover:text-white transition-all bg-zinc-900/40 backdrop-blur-xl flex items-center justify-center gap-2"
            >
              Falar com o time
            </button>
          </div>

          {/* Visual Trust Indicator */}
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-8 max-w-3xl mx-auto mt-24 pt-10 border-t border-zinc-800/50">
            <div className="text-center group">
              <p className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em] mb-1 opacity-70">Execution Engine</p>
              <p className="text-sm font-bold text-zinc-500 lowercase">protocolo → tarefa</p>
            </div>
            <div className="text-center group">
              <p className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em] mb-1 opacity-70">Retention</p>
              <p className="text-sm font-bold text-zinc-500 lowercase">marca no cultivo</p>
            </div>
            <div className="text-center group">
              <p className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em] mb-1 opacity-70">Data Ops</p>
              <p className="text-sm font-bold text-zinc-500 lowercase">uso real</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroIndustry;
