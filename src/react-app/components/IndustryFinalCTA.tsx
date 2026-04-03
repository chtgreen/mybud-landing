import type { FC } from 'react';
import { MoveRight } from 'lucide-react';

interface IndustryFinalCTAProps {
  onCTAClick: () => void;
  onDemoClick?: () => void;
}

const IndustryFinalCTA: FC<IndustryFinalCTAProps> = ({ onCTAClick }) => {
  return (
    <section id="contact" className="py-40 md:py-64 bg-zinc-950 relative border-t border-zinc-900/50">
      {/* 2026 Cinematic Finale Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[0%] left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-emerald-500/10 blur-[150px] opacity-40" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center space-y-16">

          <div className="flex justify-center mb-8">
            <div className="w-12 h-12 rounded-full border border-emerald-500/30 flex items-center justify-center animate-bounce">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </div>
          </div>

          <div className="space-y-10">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-[-0.03em] lowercase italic">
              a regra do cultivo.<br />
              <span className="text-emerald-500">na palma da mão.</span>
            </h2>
            <p className="text-xl md:text-2xl text-zinc-500 max-w-2xl mx-auto leading-relaxed font-bold lowercase opacity-70">
              sua marca não precisa de anúncios. precisa de execução consistente.
            </p>
          </div>

          {/* Premium High-End CTAs */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 pt-12">
            <button
              onClick={() => document.getElementById('brand-experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full md:w-auto px-16 py-6 rounded-full text-xl font-black bg-white text-zinc-950 hover:bg-emerald-400 hover:text-zinc-950 transition-all hover:scale-[1.05] active:scale-95 shadow-[0_20px_50px_rgba(255,255,255,0.05)] flex items-center justify-center gap-4 group"
            >
              ver minha marca
              <MoveRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
            </button>
            <button
              onClick={onCTAClick}
              className="w-full md:md:auto px-16 py-6 rounded-full text-xl font-bold text-white border border-zinc-800 bg-zinc-950/40 backdrop-blur-3xl hover:border-zinc-500 transition-all lowercase"
            >
              falar com o time
            </button>
          </div>

          <div className="pt-24 flex flex-col items-center gap-6">
            <div className="flex justify-center gap-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
              ))}
            </div>
            <p className="text-[10px] font-black text-zinc-700 uppercase tracking-[0.5em] opacity-60">
              mybud infrastructure • future of cannabis tech
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryFinalCTA;
