import type { FC } from 'react';
import { t } from '../lib/i18n';
import { Target, CheckCircle2 } from './icons';

const IndustryEcosystem: FC = () => {
  return (
    <section className="py-24 md:py-32 bg-zinc-900/50 relative border-b border-zinc-800">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.015)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(16,185,129,0.015)_1.5px,transparent_1.5px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="bg-zinc-900/50 rounded-[48px] p-8 md:p-16 border border-zinc-800 shadow-2xl relative overflow-hidden">
          {/* Subtle decoration */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-black uppercase tracking-widest border border-emerald-500/20">
                🚀 {t('industry.ecosystem.badge')}
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tighter">
                  {t('industry.ecosystem.title')}
                </h2>
                <p className="text-xl text-zinc-400 font-medium leading-relaxed">
                  {t('industry.ecosystem.subtitle')}
                </p>
              </div>

              <div className="space-y-6 pt-4">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-zinc-950/50 border border-zinc-800">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white mb-1">{t('industry.ecosystem.benefit1.title')}</h4>
                    <p className="text-sm text-zinc-500 leading-relaxed">{t('industry.ecosystem.benefit1.desc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-zinc-950/50 border border-zinc-800">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white mb-1">{t('industry.ecosystem.benefit2.title')}</h4>
                    <p className="text-sm text-zinc-500 leading-relaxed">{t('industry.ecosystem.benefit2.desc')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 blur-2xl bg-gradient-to-tr from-emerald-500/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="bg-zinc-950 rounded-[40px] p-10 shadow-2xl border border-zinc-800 relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-3xl bg-emerald-500 mb-8 flex items-center justify-center shadow-[0_10px_20px_rgba(16,185,129,0.3)]">
                  <Target className="w-10 h-10 text-zinc-950" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2 tracking-tight">
                  {t('industry.ecosystem.card.line1')}
                </h3>
                <div className="w-8 h-1 bg-zinc-800 my-4 rounded-full" />
                <h3 className="text-2xl font-black text-emerald-400 mb-6 tracking-tight">
                  {t('industry.ecosystem.card.line2')}
                </h3>
                <p className="text-sm text-zinc-500 mt-2 leading-relaxed font-medium">
                  {t('industry.ecosystem.card.desc')}
                </p>

                <div className="mt-10 pt-8 border-t border-zinc-900 w-full">
                  <div className="flex justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
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
