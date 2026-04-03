import { useState, useEffect, type FC } from 'react';
import { tObject } from '../lib/i18n';
import { MoveRight } from 'lucide-react';

interface HeroIndustryProps {
  onCTAClick: () => void;
}

const HeroIndustry: FC<HeroIndustryProps> = ({ onCTAClick }) => {
  const [words, setWords] = useState<string[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const heroWords = tObject('industry.hero.words');
    const wordList = Object.values(heroWords);
    if (wordList.length > 0) {
      setWords(wordList);
    }
  }, []);

  useEffect(() => {
    if (words.length === 0) return;

    const handleType = () => {
      const baseText = words[currentWordIndex];
      const fullText = `${baseText}.`;

      if (isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(50);
      } else {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2500);
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950 text-white border-b border-white/5 font-primary">

      {/* Cinematic Tech Backdrop */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.03)_0%,transparent_70%)]" />
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-emerald-600/5 rounded-full blur-[160px] opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col items-start text-left">

          {/* Status Badge */}
          <div className="mb-12 animate-in fade-in slide-in-from-left-4 duration-1200 transition-all">
            <div className="flex items-center gap-3 px-5 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-xl group">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">
                execução dentro do cultivo
              </span>
            </div>
          </div>

          {/* Justified Headline - White with Minimal Glow */}
          <div className="flex flex-col items-start justify-center mb-16 w-full">
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-white lowercase flex flex-col items-start select-none w-full">
              <div className="flex justify-between w-full md:w-auto md:gap-x-12 lg:gap-x-20">
                <span>sua</span>
                <span>marca</span>
                <span>dentro</span>
                <span>do</span>
              </div>
              <div className="flex items-center flex-wrap gap-x-4 md:gap-x-8">
                <span>cultivo. como</span>
                <div className="relative h-[1.1em] flex items-center justify-start min-w-[300px]">
                  <span
                    className="text-white drop-shadow-[0_0_20px_rgba(16,185,129,0.4)] animate-in fade-in duration-300"
                  >
                    {displayText}
                  </span>
                  <span className="w-1.5 h-[0.8em] bg-emerald-500 ml-1 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                </div>
              </div>
            </h1>
          </div>

          {/* Action Buttons - Per Image Standard */}
          <div className="flex flex-col md:flex-row items-center gap-6 animate-in fade-in slide-in-from-left-8 duration-1200 delay-500 w-full md:w-auto mb-20">
            <button
              onClick={() => document.getElementById('brand-experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full md:w-auto px-14 py-5 rounded-full text-xl font-black bg-white text-zinc-950 hover:bg-zinc-100 transition-all hover:scale-[1.05] active:scale-95 shadow-2xl flex items-center justify-center gap-4 group"
            >
              ver minha marca
              <MoveRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
            </button>
            <button
              onClick={onCTAClick}
              className="w-full md:w-auto px-14 py-5 rounded-full text-xl font-bold text-white border border-white/20 bg-white/5 backdrop-blur-3xl hover:bg-white/10 transition-all flex items-center justify-center gap-3 lowercase"
            >
              falar com o time
            </button>
          </div>
        </div>
      </div>

      {/* Persistence Discovery Indicator */}
      <div className="absolute bottom-12 inset-x-0 flex flex-col items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1200 delay-1000">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">discovery how</span>
        <div className="w-px h-12 bg-gradient-to-b from-emerald-500 via-emerald-500/40 to-transparent animate-bounce" />
      </div>
    </section>
  );
};

export default HeroIndustry;
