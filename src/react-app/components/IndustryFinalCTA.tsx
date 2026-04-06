import { Fragment, type FC } from 'react';
import { t } from '../lib/i18n';
import { MoveRight } from 'lucide-react';

interface IndustryFinalCTAProps {
  onCTAClick: () => void;
}

const IndustryFinalCTA: FC<IndustryFinalCTAProps> = ({ onCTAClick }) => {
  return (
    <section id="contact" className="py-40 md:py-64 bg-white relative border-t border-zinc-100">
      {/* Structural Accents */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-zinc-200" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-emerald-50 rounded-full blur-[180px] opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center space-y-16">

          <div className="flex justify-center mb-12">
            <div className="w-16 h-16 rounded-full border-2 border-emerald-500/30 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
            </div>
          </div>

          <div className="space-y-10">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-zinc-950 leading-[0.9] tracking-[-0.04em] lowercase animate-in fade-in slide-in-from-bottom-12 duration-1200">
              {t('industry.finalCta.headline').split('\n').map((line, i) => (
                <Fragment key={i}>
                  {line.includes('{italic}') ? (
                    <>
                      {line.replace('{italic}', '')}
                      <span className="text-emerald-500 italic">{t('industry.finalCta.headlineItalic')}</span>
                    </>
                  ) : line}
                  {i === 0 && <br />}
                </Fragment>
              ))}
            </h2>
            <p className="text-xl md:text-2xl text-zinc-200 max-w-2xl mx-auto leading-relaxed font-bold lowercase opacity-90 backdrop-blur-sm">
              {t('industry.finalCta.punchline')}
            </p>
          </div>

          {/* SaaS High-Contrast Actions */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 pt-16">
            <button
              onClick={() => document.getElementById('brand-experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full md:w-auto px-16 py-6 rounded-full text-xl font-black bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-all hover:scale-[1.05] active:scale-95 shadow-2xl flex items-center justify-center gap-4 group"
            >
              {t('industry.hero.cta')}
              <MoveRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
            </button>
            <button
              onClick={onCTAClick}
              className="w-full md:w-auto px-16 py-6 rounded-full text-xl font-bold text-zinc-950 border-2 border-zinc-100 bg-white hover:border-zinc-300 transition-all lowercase shadow-sm"
            >
              {t('industry.ecosystem.secondaryFinalCta')}
            </button>
          </div>

          {/* Simple decoration */}
          <div className="pt-32 flex justify-center gap-3">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-zinc-200" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryFinalCTA;

