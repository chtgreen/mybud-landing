import type { FC } from 'react';
import { t } from '../lib/i18n';
import { Target, CheckCircle2 } from './icons';

const IndustryEcosystem: FC = () => {
  return (
    <section className="py-24 md:py-40 bg-zinc-950 text-white relative border-b border-white/5">
      {/* 2026 Dark Background Layering */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-700/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="bg-zinc-900/10 backdrop-blur-3xl rounded-[60px] p-10 md:p-20 border border-white/5 shadow-2xl relative overflow-hidden group">

          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400">
                {t('industry.ecosystem.badge')}
              </div>

              <div className="space-y-6">
                <h2 className="text-5xl md:text-6xl font-black text-white leading-[0.95] tracking-tight lowercase">
                  {t('industry.ecosystem.title')}
                </h2>
                <p className="text-xl text-zinc-400 font-bold leading-relaxed lowercase opacity-80 backdrop-blur-sm">
                  {t('industry.ecosystem.subtitle')}
                </p>
              </div>

              <div className="space-y-4 pt-6">
                {[1, 2].map((num) => (
                  <div key={num} className="flex items-start gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-emerald-500/20 transition-all duration-500 group/item">
                    <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-zinc-950" />
                    </div>
                    <div>
                      <h4 className="font-black text-white mb-2 lowercase text-lg tracking-tight transition-colors">{t(`industry.ecosystem.benefit${num}.title`)}</h4>
                      <p className="text-sm text-zinc-500 font-bold leading-relaxed lowercase opacity-80">{t(`industry.ecosystem.benefit${num}.desc`)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium Industrial Card Concept */}
            <div className="relative group/card">
              <div className="absolute -inset-4 blur-3xl bg-emerald-500/10 opacity-30 group-hover/card:opacity-60 transition-opacity duration-1000" />
              <div className="bg-zinc-950 rounded-[48px] p-12 shadow-[0_40px_80px_rgba(0,0,0,0.6)] border border-white/5 relative z-10 flex flex-col items-center text-center hover:border-emerald-500/30 transition-all duration-700">
                <div className="w-24 h-24 rounded-[32px] bg-emerald-500/10 mb-10 flex items-center justify-center border border-emerald-500/20 group-hover/card:bg-emerald-500 group-hover/card:text-zinc-950 transition-all duration-700">
                  <Target className="w-10 h-10 transition-transform group-hover/card:scale-110" />
                </div>

                <h3 className="text-3xl font-black text-white mb-4 tracking-tight lowercase">
                  {t('industry.ecosystem.card.line1')}
                </h3>
                <div className="w-12 h-px bg-zinc-800 my-4 rounded-full group-hover/card:w-20 group-hover/card:bg-emerald-500 transition-all duration-500" />
                <h3 className="text-3xl font-black text-emerald-400 mb-8 tracking-tight lowercase">
                  {t('industry.ecosystem.card.line2')}
                </h3>

                <p className="text-sm text-zinc-500 leading-relaxed font-bold lowercase opacity-70 px-4">
                  {t('industry.ecosystem.card.desc')}
                </p>

                <div className="mt-16 pt-8 border-t border-zinc-900 w-full flex flex-col items-center gap-3">
                  <div className="flex justify-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                    <div className="w-2 h-2 rounded-full bg-zinc-800" />
                    <div className="w-2 h-2 rounded-full bg-zinc-800" />
                  </div>
                  <p className="text-[9px] font-black text-zinc-700 uppercase tracking-widest">protocol infrastructure enabled</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryEcosystem;
