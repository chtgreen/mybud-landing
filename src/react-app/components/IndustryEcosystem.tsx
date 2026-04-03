import type { FC } from 'react';
import { t } from '../lib/i18n';
import { Target, CheckCircle2 } from './icons';

const IndustryEcosystem: FC = () => {
  return (
    <section className="py-32 md:py-48 bg-zinc-950 relative border-b border-zinc-900/50">
      {/* 2026 Background Glows */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-emerald-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="bg-zinc-900/20 backdrop-blur-3xl rounded-[60px] p-10 md:p-20 border border-zinc-800/60 shadow-2xl relative overflow-hidden group">
          {/* Subtle light effect that follows text */}
          <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none group-hover:bg-emerald-500/15 transition-all duration-1000" />

          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full bg-emerald-500/5 text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] border border-emerald-500/15">
                {t('industry.ecosystem.badge')}
              </div>

              <div className="space-y-6">
                <h2 className="text-5xl md:text-6xl font-black text-white leading-[0.95] tracking-tight lowercase">
                  {t('industry.ecosystem.title')}
                </h2>
                <p className="text-xl text-zinc-500 font-bold leading-relaxed lowercase opacity-70">
                  {t('industry.ecosystem.subtitle')}
                </p>
              </div>

              <div className="space-y-4 pt-6">
                {[1, 2].map((num) => (
                  <div key={num} className="flex items-start gap-6 p-6 rounded-3xl bg-zinc-950/40 border border-zinc-800/50 hover:bg-zinc-950/60 hover:border-emerald-500/20 transition-all duration-500 group/item">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500/40 group-hover/item:text-emerald-500 flex-shrink-0 mt-0.5 transition-colors" />
                    <div>
                      <h4 className="font-bold text-white mb-2 lowercase text-lg tracking-tight transition-colors">{t(`industry.ecosystem.benefit${num}.title`)}</h4>
                      <p className="text-sm text-zinc-500 font-medium leading-relaxed lowercase opacity-80">{t(`industry.ecosystem.benefit${num}.desc`)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium 2026 High-Tech Card */}
            <div className="relative group/card animate-in fade-in zoom-in-95 duration-1000">
              <div className="absolute -inset-4 blur-3xl bg-emerald-500/10 opacity-30 group-hover/card:opacity-60 transition-opacity duration-1000" />
              <div className="bg-zinc-950 rounded-[50px] p-12 shadow-[0_40px_80px_rgba(0,0,0,0.6)] border border-white/5 relative z-10 flex flex-col items-center text-center hover:border-emerald-500/30 transition-all duration-700">
                <div className="w-24 h-24 rounded-[32px] bg-emerald-500/10 mb-10 flex items-center justify-center border border-emerald-500/20 group-hover/card:bg-emerald-500 group-hover/card:text-zinc-950 transition-all duration-700">
                  <Target className="w-10 h-10 transition-transform group-hover/card:scale-110" />
                </div>

                <h3 className="text-3xl font-black text-white mb-4 tracking-tight lowercase">
                  {t('industry.ecosystem.card.line1')}
                </h3>
                <div className="w-12 h-0.5 bg-zinc-800 my-4 rounded-full group-hover/card:w-20 group-hover/card:bg-emerald-500/50 transition-all duration-500" />
                <h3 className="text-3xl font-black text-emerald-400 mb-8 tracking-tight lowercase">
                  {t('industry.ecosystem.card.line2')}
                </h3>

                <p className="text-sm text-zinc-500 leading-relaxed font-bold lowercase opacity-70 px-4">
                  {t('industry.ecosystem.card.desc')}
                </p>

                <div className="mt-16 pt-8 border-t border-zinc-900/50 w-full">
                  <div className="flex justify-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                    <div className="w-2 h-2 rounded-full bg-zinc-800" />
                    <div className="w-2 h-2 rounded-full bg-zinc-800" />
                  </div>
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
