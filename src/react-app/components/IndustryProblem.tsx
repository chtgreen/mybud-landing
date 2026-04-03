import type { FC } from 'react';
import { t } from '../lib/i18n';

const IndustryProblem: FC = () => {
  return (
    <section className="py-20 md:py-28 bg-zinc-900 text-white relative border-y border-zinc-800">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(255,255,255,0.015)_1.5px,transparent_1.5px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">

        {/* Impact Headline */}
        <div className="text-center md:text-left max-w-3xl mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-[1.1]">
            {t('industry.problem.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <p className="text-lg text-zinc-400 font-medium leading-relaxed">
              {t('industry.problem.intro')}
            </p>
            <p className="text-lg text-zinc-500 font-medium leading-relaxed">
              {t('industry.problem.narrative')}
            </p>
          </div>
        </div>

        {/* Visual Transformation */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          {/* Legacy Side */}
          <div className="bg-zinc-900/50 rounded-3xl p-8 border border-zinc-800 relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-3 bg-zinc-800 rounded-bl-2xl">
              <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Legacy</span>
            </div>
            <p className="text-zinc-500 font-mono text-sm mb-4">nutrition_table_v2.pdf</p>
            <div className="space-y-3 opacity-40">
              <div className="h-2 bg-zinc-700 rounded-full w-3/4" />
              <div className="h-2 bg-zinc-700 rounded-full w-1/2" />
              <div className="h-2 bg-zinc-700 rounded-full w-2/3" />
            </div>
            <p className="mt-8 text-zinc-400 font-bold italic">{t('industry.problem.pdfNote')}</p>
          </div>

          {/* MyBud Side */}
          <div className="bg-emerald-500/5 rounded-3xl p-8 border-2 border-emerald-500/30 relative group shadow-[0_20px_40px_rgba(16,185,129,0.1)]">
            <div className="absolute top-0 right-0 p-3 bg-emerald-500/20 rounded-bl-2xl">
              <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Powered by MyBud</span>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-zinc-950">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-black text-white">{t('industry.problem.solution')}</h4>
            </div>
            <div className="space-y-4">
              <div className="bg-zinc-900/80 rounded-xl p-4 border border-emerald-500/20 flex justify-between items-center">
                <span className="text-sm font-bold text-emerald-400">Apply Grow A</span>
                <span className="text-xs font-black text-white bg-emerald-500 px-2 py-0.5 rounded">2ml/L</span>
              </div>
              <div className="bg-zinc-900/80 rounded-xl p-4 border border-emerald-500/10 opacity-60">
                <span className="text-sm font-bold text-zinc-400">Week 4 - Flush</span>
              </div>
            </div>
          </div>
        </div>

        <div className="order-2 md:order-1 grid md:grid-cols-3 gap-16 pt-24 border-t border-zinc-800/80">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-6">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-zinc-950/50 border border-zinc-800 flex items-center justify-center">
                  <span className="text-xl font-black text-emerald-500">0{i}</span>
                </div>
                <h3 className="text-xl font-black text-white tracking-tight">{t(`industry.howItWorks.step${i}Title`)}</h3>
              </div>
              <p className="text-zinc-500 leading-relaxed font-bold text-sm">
                {t(`industry.howItWorks.step${i}`)}
              </p>
            </div>
          ))}
        </div>

        {/* Frictionless Footer */}
        <div className="mt-20 py-6 px-8 rounded-2xl bg-zinc-900/30 border border-zinc-800 text-center">
          <p className="text-sm text-emerald-500/70 font-black uppercase tracking-[0.3em]">
            {t('industry.howItWorks.noTech')}
          </p>
        </div>

      </div>
    </section>
  );
};

export default IndustryProblem;
