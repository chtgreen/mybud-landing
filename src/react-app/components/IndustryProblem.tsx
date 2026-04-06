import type { FC } from 'react';
import { t } from '../lib/i18n';
import { MoveRight, Layers, FileCode2, Play } from 'lucide-react';

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
              <div className="p-8 bg-white border border-zinc-200 rounded-3xl shadow-sm mb-10 group-hover:border-zinc-300 transition-colors">
                <p className="text-zinc-400 font-mono text-sm mb-6 pb-2 border-b border-zinc-50">nutrition_table_v2.pdf</p>
                <div className="space-y-4">
                  {[1, 2, 3].map((n) => (
                    <div key={n} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400/50" />
                      <span className="text-sm font-bold text-zinc-400 lowercase">{t(`industry.problem.legacyPain${n}`)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xl text-zinc-500 font-bold lowercase leading-relaxed italic border-l-2 border-zinc-200 pl-8 transition-colors group-hover:text-zinc-700">{t('industry.problem.pdfNote')}</p>
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

        {/* Section Transition / Separator */}
        <div className="flex flex-col items-center mb-40">
          <div className="w-px h-24 bg-gradient-to-b from-emerald-500/50 to-transparent" />
        </div>

        {/* Process Hierarchy - Standardized Software Flow */}
        <div className="grid md:grid-cols-3 gap-20 pt-48 border-t border-zinc-100 relative">
          {[
            { id: 1, Icon: Layers, title: t('industry.howItWorks.step1Title'), desc: t('industry.howItWorks.step1') },
            { id: 2, Icon: FileCode2, title: t('industry.howItWorks.step2Title'), desc: t('industry.howItWorks.step2') },
            { id: 3, Icon: Play, title: t('industry.howItWorks.step3Title'), desc: t('industry.howItWorks.step3') },
          ].map((step) => (
            <div key={step.id} className="space-y-12 group">
              <div className="flex items-center gap-8">
                <div className="w-24 h-24 rounded-[36px] bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400 group-hover:bg-emerald-500 group-hover:text-zinc-950 group-hover:border-emerald-500 transition-all duration-700">
                  <step.Icon className="w-12 h-12 transition-transform group-hover:scale-110" />
                </div>
                <h3 className="text-4xl font-black text-zinc-950 tracking-tighter lowercase">{step.title}</h3>
              </div>
              <p className="text-2xl text-zinc-600 font-black leading-relaxed lowercase opacity-90 pl-2 group-hover:text-zinc-950 transition-colors">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Frictionless Operational Badge */}
        <div className="mt-48 flex justify-center">
          <div className="px-10 py-5 rounded-full bg-zinc-50 border border-zinc-100 flex items-center gap-6 group hover:bg-white hover:border-emerald-500 transition-all duration-500 cursor-default shadow-sm hover:shadow-xl">
            <div className="w-2 h-2 rounded-full bg-emerald-500 group-hover:animate-ping" />
            <p className="text-[11px] font-black text-zinc-400 uppercase tracking-[0.5em] group-hover:text-zinc-950 transition-colors">
              {t('industry.howItWorks.noTech')}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IndustryProblem;

