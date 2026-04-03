import type { FC } from 'react';
import { t } from '../lib/i18n';
import { Target, CheckCircle2 } from './icons';

const IndustryEcosystem: FC = () => {
  return (
    <section className="py-24 md:py-40 bg-zinc-50 relative overflow-hidden">
      {/* Structural Accents */}
      <div className="absolute inset-x-0 top-0 h-px bg-zinc-200" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="bg-white rounded-[40px] p-10 md:p-20 border border-zinc-200 shadow-xl relative overflow-hidden group">

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-zinc-50 border border-zinc-100 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                {t('industry.ecosystem.badge')}
              </div>

              <div className="space-y-6">
                <h2 className="text-5xl md:text-6xl font-black text-zinc-950 leading-[0.95] tracking-tight lowercase">
                  {t('industry.ecosystem.title')}
                </h2>
                <p className="text-xl text-zinc-600 font-bold leading-relaxed lowercase opacity-80">
                  {t('industry.ecosystem.subtitle')}
                </p>
              </div>

              <div className="space-y-5 pt-6">
                {[1, 2].map((num) => (
                  <div key={num} className="flex items-start gap-6 p-6 rounded-3xl bg-zinc-50 border border-zinc-100 hover:bg-white hover:border-emerald-500/30 hover:shadow-lg transition-all duration-500 group/item">
                    <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-zinc-950" />
                    </div>
                    <div>
                      <h4 className="font-black text-zinc-950 mb-1 lowercase text-lg tracking-tight transition-colors">{t(`industry.ecosystem.benefit${num}.title`)}</h4>
                      <p className="text-sm text-zinc-500 font-bold leading-relaxed lowercase">{t(`industry.ecosystem.benefit${num}.desc`)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Industrial Card Concept */}
            <div className="relative group/card">
              <div className="bg-zinc-950 rounded-[48px] p-12 shadow-2xl relative z-10 flex flex-col items-center text-center">
                {/* Floating Glow */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-[60px]" />

                <div className="w-20 h-20 rounded-3xl bg-emerald-500 mb-10 flex items-center justify-center shadow-[0_15px_30px_rgba(16,185,129,0.3)]">
                  <Target className="w-10 h-10 text-zinc-950" />
                </div>

                <h3 className="text-2xl font-black text-white mb-3 tracking-tight lowercase">
                  {t('industry.ecosystem.card.line1')}
                </h3>
                <div className="w-10 h-1 bg-white/10 my-4 rounded-full" />
                <h3 className="text-2xl font-black text-emerald-400 mb-8 tracking-tight lowercase">
                  {t('industry.ecosystem.card.line2')}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed font-bold lowercase px-6">
                  {t('industry.ecosystem.card.desc')}
                </p>

                <div className="mt-16 pt-10 border-t border-white/5 w-full">
                  <div className="flex justify-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                    <div className="w-2 h-2 rounded-full bg-zinc-800" />
                    <div className="w-2 h-2 rounded-full bg-zinc-800" />
                  </div>
                  <p className="mt-4 text-[9px] font-black text-zinc-600 uppercase tracking-widest">protocol compliance verified</p>
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
