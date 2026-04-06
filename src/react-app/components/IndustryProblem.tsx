import type { FC } from 'react';
import { t } from '../lib/i18n';
import { MoveRight, XCircle, Droplet } from 'lucide-react';

const IndustryProblem: FC = () => {
  return (
    <section id="problem" className="py-24 md:py-48 bg-white text-zinc-950 relative border-b border-zinc-100 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Label */}
        <div className="flex items-center gap-4 mb-20 animate-in fade-in duration-1000">
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 lowercase">
            {t('industry.problem.badge')}
          </span>
        </div>

        {/* Impact Headline */}
        <div className="mb-32">
          <h2 className="text-5xl md:text-8xl font-black text-zinc-950 tracking-[-0.05em] leading-[0.9] lowercase animate-in fade-in slide-in-from-bottom-8 duration-1000 whitespace-pre-line max-w-4xl">
            {t('industry.problem.title')}
          </h2>
        </div>

        {/* The Pain: Binary Choice */}
        <div className="grid lg:grid-cols-2 gap-8 mb-48">

          {/* Legacy side: THE MESS */}
          <div className="bg-zinc-100 rounded-[40px] md:rounded-[60px] p-10 md:p-16 border border-zinc-200 transition-all duration-700 flex flex-col justify-between group relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-12">
                <span className="text-[10px] font-black text-red-500 uppercase tracking-widest flex items-center gap-2">
                  <XCircle className="w-3 h-3" />
                  {t('industry.problem.timeForWatering')}
                </span>
              </div>

              <div className="space-y-6 mb-16">
                <p className="text-3xl md:text-5xl font-black text-zinc-400 lowercase leading-tight">{t('industry.problem.searchGoogle')}</p>
                <p className="text-3xl md:text-5xl font-black text-zinc-400 lowercase leading-tight">{t('industry.problem.checkTable')}</p>
                <p className="text-3xl md:text-5xl font-black text-zinc-950 lowercase leading-tight">{t('industry.problem.rememberDose')}</p>
                <div className="pt-6 space-y-2">
                  <p className="text-xl md:text-2xl font-black text-zinc-400 lowercase leading-tight">{t('industry.problem.blameLabel')}</p>
                  <p className="text-xl md:text-2xl font-black text-red-500 lowercase leading-tight">{t('industry.problem.blamePunch')}</p>
                </div>
              </div>

              <div className="pt-12 border-t border-zinc-200">
                <h4 className="text-2xl font-black text-zinc-950 lowercase mb-4">{t('industry.problem.brandStopsAtPackaging')}</h4>
                <p className="text-zinc-500 font-bold lowercase leading-relaxed italic opacity-80 decoration-red-500/30 line-through">
                  {t('industry.problem.executionHappensOutside')}
                </p>
              </div>
            </div>
          </div>

          {/* Solution Side: THE SYNC */}
          <div className="bg-zinc-950 rounded-[40px] md:rounded-[60px] p-10 md:p-16 relative overflow-hidden shadow-2xl transition-all duration-700 group">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] group-hover:bg-emerald-500/20 transition-all duration-1000" />

            <div className="flex items-center justify-between mb-16 relative z-10">
              <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest flex items-center gap-2">
                <Droplet className="w-3 h-3" />
                {t('industry.problem.atMyBud')}
              </span>
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
            </div>

            <div className="space-y-12 relative z-10">
              <div className="max-w-md">
                <h4 className="text-3xl md:text-5xl font-black text-white lowercase leading-[0.95] mb-12 whitespace-pre-line">
                  {t('industry.problem.tableToTask').replace('{italic}', '')}
                  <span className="text-emerald-500 italic">{t('industry.problem.tableToTaskItalic')}</span>
                </h4>

                <div className="space-y-6 mb-16">
                  <p className="text-xl md:text-2xl text-white/60 font-black lowercase">{t('industry.problem.exactDose')}</p>
                  <p className="text-xl md:text-2xl text-white/60 font-black lowercase">{t('industry.problem.rightWeek')}</p>
                  <p className="text-xl md:text-2xl text-emerald-400 font-black lowercase">{t('industry.problem.errorFreeExecution')}</p>
                </div>

                <div
                  onClick={() => document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-6 group/cta cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-white text-zinc-950 flex items-center justify-center group-hover/cta:scale-110 transition-all">
                    <MoveRight className="w-6 h-6 group-hover/cta:translate-x-1 transition-transform" />
                  </div>
                  <span className="text-xl font-black text-white lowercase group-hover/cta:text-emerald-400 transition-colors">
                    {t('industry.problem.ctaDigitalize')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IndustryProblem;
