import { useState, useEffect, type FC } from 'react';
import { t } from '../lib/i18n';
import { MoveRight } from 'lucide-react';

interface HeroIndustryProps {
  onCTAClick: () => void;
}

const HeroIndustry: FC<HeroIndustryProps> = ({ onCTAClick }) => {
  // Senior Marketing Words: Focusing on Authority, Habit, and the bottom line (Recompra)
  const words = ['sugestão.', 'presença.', 'rotina.', 'plano.', 'rega.', 'referência.'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState(words[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const fullText = words[currentWordIndex];

      if (isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(50);
      } else {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2500); // Slightly longer pause on full words
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setTypingSpeed(200);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentWordIndex, words, typingSpeed]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-zinc-950 text-white border-b border-white/5">
      {/* Cinematic 2026 Dark Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[1000px] h-[1000px] bg-emerald-600/10 rounded-full blur-[200px] opacity-40 animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-emerald-400/5 rounded-full blur-[140px] opacity-20" />

        {/* Subtle grid for a technical, software feel */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(9,9,11,0.8)_100%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-10">
        <div className="max-w-6xl mx-auto text-center">

          {/* Status Label */}
          <div className="flex justify-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1200">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-3xl shadow-2xl group cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 group-hover:text-zinc-300 transition-colors">
                execução dentro do cultivo
              </span>
            </div>
          </div>

          {/* Headline - High-Impact Marketing Copy */}
          <div className="space-y-10 mb-20 px-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-white lowercase animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-150">
              sua marca dentro do cultivo.<br />
              como <span className="relative inline-block text-white">
                <span className="absolute inset-x-0 bottom-1 h-[30%] bg-emerald-500/30 -z-10 animate-in fade-in duration-1000" />
                {displayText}
                <span className="inline-block w-[2px] h-[0.9em] bg-emerald-500 ml-1 translate-y-[0.1em] animate-pulse" />
              </span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-bold lowercase opacity-90 animate-in fade-in slide-in-from-bottom-10 duration-1200 delay-500">
              o MyBud garante que seu produto seja usado do jeito certo.<br />
              todo dia. até a colheita. até a recompra.
            </p>
          </div>

          {/* Premium Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-in fade-in slide-in-from-bottom-10 duration-1200 delay-700">
            <button
              onClick={() => document.getElementById('brand-experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-12 py-4 rounded-full text-lg font-black bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-all hover:scale-[1.05] active:scale-95 flex items-center justify-center gap-3 group shadow-[0_20px_60px_rgba(16,185,129,0.15)]"
            >
              ver minha marca
              <MoveRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
            </button>
            <button
              onClick={onCTAClick}
              className="w-full sm:w-auto px-12 py-4 rounded-full text-lg font-bold text-white border border-white/20 bg-white/5 backdrop-blur-3xl hover:border-white/40 hover:bg-white/10 transition-all flex items-center justify-center gap-2 lowercase"
            >
              falar com o time
            </button>
          </div>

          <div className="mt-24 flex justify-center animate-in fade-in duration-1000 delay-1000">
            <div className="w-px h-16 bg-gradient-to-b from-emerald-500/40 via-emerald-500/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroIndustry;
