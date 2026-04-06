import type { FC } from 'react';
import { t } from '../lib/i18n';
import { MoveRight } from 'lucide-react';

const IndustryProblem: FC = () => {
  return (
    <section className="py-24 md:py-48 bg-white text-zinc-950 relative border-b border-zinc-100">
      {/* Structural Accents */}
      <div className="absolute top-0 inset-x-0 h-px bg-zinc-50" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Label */}
        <div className="flex items-center gap-4 mb-20 animate-in fade-in duration-1000">
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">
            {t('industry.problem.badge')}
          </span>
        </div>

        {/* Impact Headline - High Contrast, No Fluff */}
        <div className="grid lg:grid-cols-2 gap-24 items-end mb-40">
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-zinc-950 tracking-[-0.03em] leading-[0.95] md:leading-[0.9] lowercase animate-in fade-in slide-in-from-bottom-8 duration-1000 whitespace-pre-line">
            {t('industry.problem.title')}
          </h2>
          <p className="text-xl md:text-2xl text-zinc-950 font-black leading-relaxed lowercase max-w-lg mb-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
            {t('industry.problem.intro')}
          </p>
        </div>

        {/* Binary Choice: Legacy vs. Standardized Execution */}
        <div className="grid lg:grid-cols-2 gap-8 mb-48">
          {/* Legacy side: The problem we solve */}
          <div className="bg-zinc-50 rounded-[40px] md:rounded-[60px] p-10 md:p-16 border border-zinc-100 transition-all duration-700 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-12">
                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">{t('industry.problem.legacyBadge')}</span>
                <div className="w-2 h-2 rounded-full bg-zinc-200" />
              </div>
              <div className="p-8 bg-zinc-100/50 border border-zinc-200/50 rounded-3xl opacity-40 blur-[0.5px] grayscale mb-10 transition-all duration-700">
                <p className="text-zinc-400 font-mono text-sm mb-6 pb-2 border-b border-zinc-100 italic">nutrition_table_v2.pdf</p>
                <div className="space-y-4">
                  {[1, 2, 3].map((n) => (
                    <div key={n} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                      <span className="text-sm font-bold text-zinc-300 lowercase line-through">{t(`industry.problem.legacyPain${n}`)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xl text-zinc-400 font-bold lowercase leading-relaxed italic border-l-2 border-zinc-200 pl-8 opacity-60">{t('industry.problem.pdfNote')}</p>
          </div>

          {/* Evolution Side: Software Execution */}
          <div className="bg-zinc-950 rounded-[40px] md:rounded-[60px] p-10 md:p-16 relative overflow-hidden shadow-2xl transition-all duration-700 group">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] group-hover:bg-emerald-500/20 transition-all duration-1000" />

            <div className="flex items-center justify-between mb-16 relative z-10">
              <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">{t('industry.problem.standardBadge')}</span>
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
            </div>

            <div className="space-y-12 relative z-10">
              <div className="flex items-center gap-8">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-[28px] md:rounded-[32px] bg-emerald-500 flex items-center justify-center text-zinc-950 shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
                  <MoveRight className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                <h4 className="text-2xl md:text-3xl font-black text-white lowercase tracking-tight">{t('industry.problem.solution')}</h4>
              </div>

              <div className="space-y-4">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="p-5 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-500 flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                    <span className="text-lg font-black text-white lowercase">{t(`industry.problem.standardBenefit${n}`)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IndustryProblem;

