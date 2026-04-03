import type { FC } from 'react';

interface IndustryFinalCTAProps {
  onCTAClick: () => void;
  onDemoClick?: () => void;
}

const IndustryFinalCTA: FC<IndustryFinalCTAProps> = ({ onCTAClick }) => {
  return (
    <section id="contact" className="py-32 md:py-48 bg-zinc-900 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tighter">
              A regra do cultivo.<br />
              Na palma da mão.
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-medium">
              Sua marca não precisa de anúncios. Precisa de execução consistente.
            </p>
          </div>

          {/* Big Premium CTAs */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
            <button
              type="button"
              onClick={() => document.getElementById('brand-experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full md:w-auto px-10 py-4 rounded-[20px] text-lg font-black bg-emerald-500 text-zinc-950 hover:bg-emerald-400 shadow-[0_15px_30px_rgba(16,185,129,0.3)] transition-all hover:scale-105 active:scale-95"
            >
              Ver minha marca
            </button>
            <button
              type="button"
              onClick={onCTAClick}
              className="w-full md:w-auto px-10 py-4 rounded-[20px] text-lg font-bold text-white border border-zinc-700 bg-zinc-900/40 backdrop-blur-xl hover:border-zinc-500 transition-all flex items-center justify-center gap-3"
            >
              Falar com o time
            </button>
          </div>

          <p className="text-zinc-600 font-bold uppercase tracking-widest text-[10px] pt-12">
            Resultados reais. Sem fricção técnica.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustryFinalCTA;
