import { type FC, useEffect, useRef } from 'react';
import { t } from '../lib/i18n';
import { MoveRight } from 'lucide-react';

interface HeroIndustryProps {
  onCTAClick: () => void;
}

const HeroIndustry: FC<HeroIndustryProps> = ({ onCTAClick }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white text-zinc-950 border-b border-zinc-100">
      {/* 2026 Minimalist High-End Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle mesh light glow */}
        <div className="absolute top-[-10%] right-[-10%] w-[1000px] h-[1000px] bg-emerald-100 rounded-full blur-[160px] opacity-20" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-emerald-50 rounded-full blur-[140px] opacity-10" />

        {/* Fine grid texture */}
        <div className="absolute inset-0 opacity-[0.01]"
          style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-6xl mx-auto text-center">

          {/* Minimal Live Status */}
          <div className="flex justify-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1200">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-zinc-100 bg-zinc-50/50 backdrop-blur-2xl shadow-sm hover:border-emerald-500/20 transition-all cursor-default group">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 group-hover:text-zinc-600 transition-colors">
                standard protocol software
              </span>
            </div>
          </div>

          {/* Headline - Bold, Lowercase, High-Contrast Black */}
          <div className="space-y-12 mb-24">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-[-0.04em] text-zinc-950 lowercase animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-150">
              {t('industry.hero.title')}
            </h1>

            <div className="flex justify-center animate-in fade-in slide-in-from-bottom-10 duration-1200 delay-300">
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
            </div>

            <p className="text-xl md:text-2xl text-zinc-600 max-w-2xl mx-auto leading-relaxed font-bold lowercase opacity-80 animate-in fade-in slide-in-from-bottom-10 duration-1200 delay-500">
              {t('industry.hero.subtitle')}
            </p>
          </div>

          {/* Clean High-Contrast Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-in fade-in slide-in-from-bottom-10 duration-1200 delay-700">
            <button
              onClick={() => document.getElementById('brand-experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-14 py-5 rounded-full text-xl font-black bg-zinc-950 text-white hover:bg-emerald-500 hover:text-zinc-950 transition-all hover:scale-[1.05] active:scale-95 flex items-center justify-center gap-4 group shadow-2xl"
            >
              ver minha marca
              <MoveRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
            </button>
            <button
              onClick={onCTAClick}
              className="w-full sm:w-auto px-14 py-5 rounded-full text-xl font-bold text-zinc-950 border border-zinc-200 bg-white hover:border-zinc-400 hover:bg-zinc-50 transition-all flex items-center justify-center gap-3 lowercase"
            >
              falar com o time
            </button>
          </div>

          {/* Minimal Vertical Link */}
          <div className="mt-32 flex justify-center animate-in fade-in duration-1000 delay-1000">
            <div className="w-px h-24 bg-gradient-to-b from-emerald-500/40 via-emerald-500/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroIndustry;
