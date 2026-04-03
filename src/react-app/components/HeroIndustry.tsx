import { type FC, useEffect, useRef } from 'react';
import { t } from '../lib/i18n';
import { MoveRight } from 'lucide-react';

interface HeroIndustryProps {
  onCTAClick: () => void;
}

const HeroIndustry: FC<HeroIndustryProps> = ({ onCTAClick }) => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return;
      const scrolled = window.scrollY;
      bgRef.current.style.transform = `translateY(${scrolled * 0.15}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#050505] border-b border-white/5">
      {/* 2026 Ultra-Premium Background */}
      <div ref={bgRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Cinematic Mesh Gradients */}
        <div className="absolute top-[-20%] right-[-10%] w-[1200px] h-[1200px] bg-emerald-600/10 rounded-full blur-[200px] animate-pulse duration-[10000ms]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-emerald-400/5 rounded-full blur-[180px]" />

        {/* Strategic Grid for depth */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{ backgroundImage: 'linear-gradient(#34d399 1px, transparent 1px), linear-gradient(90deg, #34d399 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

        {/* Dynamic Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-6xl mx-auto text-center">

          {/* Subtle Label with Live Status */}
          <div className="flex justify-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-3xl shadow-2xl group cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 group-hover:text-zinc-200 transition-colors">
                industrial protocol infrastructure
              </span>
            </div>
          </div>

          {/* Headline - Bold, Lowercase, High-Contrast */}
          <div className="space-y-12 mb-24">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-[-0.05em] text-white lowercase animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-150">
              {t('industry.hero.title')}
            </h1>

            <div className="flex justify-center animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />
            </div>

            <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto leading-relaxed font-bold lowercase opacity-90 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
              {t('industry.hero.subtitle')}
            </p>
          </div>

          {/* Cinematic Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-700">
            <button
              onClick={() => document.getElementById('brand-experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-14 py-5 rounded-full text-xl font-black bg-white text-black hover:bg-emerald-400 transition-all hover:scale-[1.05] active:scale-95 flex items-center justify-center gap-4 group shadow-[0_20px_60px_rgba(255,255,255,0.1)]"
            >
              ver minha marca
              <MoveRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
            </button>
            <button
              onClick={onCTAClick}
              className="w-full sm:w-auto px-14 py-5 rounded-full text-xl font-bold text-white border border-white/20 bg-white/5 backdrop-blur-3xl hover:border-white/40 hover:bg-white/10 transition-all flex items-center justify-center gap-3 lowercase"
            >
              falar com o time
            </button>
          </div>

          {/* Premium Vertical Line */}
          <div className="mt-32 flex justify-center animate-in fade-in duration-1000 delay-1000">
            <div className="w-px h-24 bg-gradient-to-b from-emerald-500/60 via-emerald-500/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroIndustry;
