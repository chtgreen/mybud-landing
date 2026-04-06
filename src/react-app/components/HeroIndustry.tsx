import { useState, useEffect, type FC } from 'react';
import { t, tObject } from '../lib/i18n';
import { MoveRight, Droplet } from 'lucide-react';

interface HeroIndustryProps {
}

const HeroIndustry: FC<HeroIndustryProps> = () => {
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
      const fullText = baseText;

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

      <div className="container mx-auto px-6 relative z-10 py-20">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Label */}
            <div className="flex items-center gap-4 mb-16 animate-in fade-in duration-1000">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">
                {t('industry.hero.badge')}
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
                    <span className="w-1 md:w-1.5 h-[0.8em] bg-emerald-500 ml-1 md:ml-1.5 animate-blink shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                  </div>
                </div>
              </h1>
              <p className="mt-8 text-xl md:text-3xl text-zinc-400 font-bold lowercase tracking-tight animate-in fade-in slide-in-from-left-8 duration-1000 delay-300 max-w-2xl leading-tight">
                {t('industry.hero.subtitle')}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row items-center gap-6 animate-in fade-in slide-in-from-left-8 duration-1200 delay-500 w-full md:w-auto mb-10">
              <button
                onClick={() => document.getElementById('brand-experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full md:w-auto px-14 py-5 rounded-full text-xl font-black bg-white text-zinc-950 hover:bg-zinc-100 transition-all hover:scale-[1.05] active:scale-95 shadow-2xl flex items-center justify-center gap-4 group"
              >
                {t('industry.hero.cta')}
                <MoveRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
              </button>
              <button
                onClick={() => document.getElementById('brand-experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full md:w-auto px-14 py-5 rounded-full text-xl font-bold text-white border border-white/20 bg-white/5 backdrop-blur-3xl hover:bg-white/10 transition-all flex items-center justify-center gap-3 lowercase"
              >
                {t('industry.hero.secondaryCta')}
              </button>
            </div>
          </div>

          {/* Right Content - Massive Mockup */}
          <div className="lg:col-span-5 relative hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-[500px] aspect-[9/19] scale-110 translate-x-12 translate-y-12">
              {/* iPhone 16 Pro Frame */}
              <div className="absolute inset-0 bg-zinc-900 rounded-[60px] p-3 shadow-[0_100px_150px_-30px_rgba(0,0,0,0.8)] ring-1 ring-white/10 overflow-hidden">
                <div className="absolute inset-0 bg-black rounded-[50px] overflow-hidden flex flex-col border border-white/5">

                  {/* App Content Simulation */}
                  <div className="bg-emerald-600 p-8 pt-16 flex-shrink-0">
                    <h4 className="text-2xl font-black text-white lowercase">Bio-Grower Lab</h4>
                    <p className="text-sm font-bold text-emerald-100/80 lowercase mt-1">vegetativo — semana 3</p>
                  </div>

                  <div className="flex-1 p-6 bg-zinc-950 space-y-6">
                    <div className="p-6 rounded-[32px] bg-white/[0.03] border border-white/10 shadow-2xl scale-105">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center text-zinc-950 shadow-lg">
                          <Droplet className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest leading-none mb-1">momento certo</p>
                          <h4 className="text-white font-black text-lg lowercase">Grow-A — 2ml/L</h4>
                          <p className="text-xs font-bold text-zinc-500 lowercase mt-0.5">ph alvo: 6.2</p>
                        </div>
                      </div>

                      <button className="w-full py-4 bg-emerald-500 text-zinc-950 font-black rounded-2xl hover:bg-emerald-400 transition-all shadow-[0_10px_20px_rgba(16,185,129,0.3)] animate-pulse">
                        Aplicar agora
                      </button>
                    </div>

                    <div className="space-y-4 opacity-30">
                      <div className="p-5 rounded-2xl bg-zinc-900 border border-white/5 flex items-center gap-4">
                        <div className="w-8 h-8 rounded-lg bg-zinc-800" />
                        <div className="h-4 w-32 bg-zinc-800 rounded-full" />
                      </div>
                      <div className="p-5 rounded-2xl bg-zinc-900 border border-white/5 flex items-center gap-4">
                        <div className="w-8 h-8 rounded-lg bg-zinc-800" />
                        <div className="h-4 w-40 bg-zinc-800 rounded-full" />
                      </div>
                    </div>
                  </div>

                  <div className="h-1 w-32 bg-zinc-800 mx-auto mb-4 rounded-full" />
                </div>
              </div>
            </div>
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
