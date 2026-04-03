import { useState, useEffect, type FC } from 'react';
import { t, tObject } from '../lib/i18n';
import { MoveRight } from 'lucide-react';

interface HeroIndustryProps {
  onCTAClick: () => void;
}

const HeroIndustry: FC<HeroIndustryProps> = ({ onCTAClick }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const heroWords = tObject('industry.hero.words');
  const words = heroWords ? Object.values(heroWords as Record<string, string>) : [
    'as a rule',
    'as a suggestion',
    'as a presence',
    'as a routine',
    'as a plan',
    'as a belonging',
    'as a representation',
    'as instructions',
    'as a nutritional plan',
    'as a usage suggestion',
    'as a dosage',
  ];

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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(16,185,129,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.05)_0%,transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col items-start text-left">

          {/* Label */}
          <div className="flex items-center gap-4 mb-16 animate-in fade-in duration-1000">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">
              {t('industry.hero.discoveryHow')}
            </span>
          </div>

          {/* High-Impact Headline */}
          <div className="flex flex-col items-start justify-center mb-12 md:mb-16 w-full">
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black leading-[1.05] md:leading-[0.9] tracking-tighter text-white lowercase flex flex-col items-start select-none w-full whitespace-pre-line">
              <div className="flex flex-col items-start gap-y-2 md:gap-y-4">
                <span className="max-w-[12ch] md:max-w-none">{t('industry.hero.title')}</span>
                <div className="relative h-[1.1em] flex items-center justify-start min-h-[1.1em]">
                  <span className="text-emerald-500 italic drop-shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                    {displayText}
                  </span>
                  <span className="w-1 md:w-1.5 h-[0.8em] bg-emerald-500 ml-1 md:ml-1.5 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                </div>
              </div>
            </h1>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row items-center gap-6 animate-in fade-in slide-in-from-left-8 duration-1200 delay-500 w-full md:w-auto mb-20">
            <button
              onClick={() => document.getElementById('brand-experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full md:w-auto px-14 py-5 rounded-full text-xl font-black bg-white text-zinc-950 hover:bg-zinc-100 transition-all hover:scale-[1.05] active:scale-95 shadow-2xl flex items-center justify-center gap-4 group"
            >
              {t('industry.hero.cta')}
              <MoveRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
            </button>
            <button
              onClick={onCTAClick}
              className="w-full md:w-auto px-14 py-5 rounded-full text-xl font-bold text-white border border-white/20 bg-white/5 backdrop-blur-3xl hover:bg-white/10 transition-all flex items-center justify-center gap-3 lowercase"
            >
              {t('industry.hero.secondaryCta')}
            </button>
          </div>
        </div>
      </div>

      {/* Persistence Discovery Indicator */}
      <div className="absolute bottom-12 inset-x-0 flex flex-col items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1200 delay-1000">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">
          {t('industry.hero.discoveryHow')}
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-emerald-500 via-emerald-500/40 to-transparent animate-bounce" />
      </div>
    </section>
  );
};

export default HeroIndustry;
