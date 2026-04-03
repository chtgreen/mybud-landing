import type { FC } from 'react';
import { t } from '../lib/i18n';
import { MoveRight, Layers, FileCode2, Play } from 'lucide-react';

const IndustryProblem: FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white text-zinc-950 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-zinc-100" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Label */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
            industrial infrastructure
          </span>
        </div>

        {/* Impact Headline - Clean, High-Contrast */}
        <div className="grid lg:grid-cols-2 gap-20 items-end mb-32">
          <h2 className="text-5xl md:text-7xl font-black text-zinc-950 tracking-tight leading-[0.95] lowercase">
            {t('industry.problem.title')}
          </h2>
          <p className="text-xl text-zinc-600 font-bold leading-relaxed lowercase max-w-lg mb-2">
            {t('industry.problem.intro')}
          </p>
        </div>

        {/* Side-by-Side: Legacy vs. Standard (Clean Cards) */}
        <div className="grid lg:grid-cols-2 gap-6 mb-40">
          {/* Legacy Card */}
          <div className="bg-zinc-50 rounded-[40px] p-12 border border-zinc-100">
            <div className="flex items-center justify-between mb-12">
              <span className="text-[10px] font-black text-zinc-300 uppercase tracking-widest">método antigo</span>
              <div className="w-2 h-2 rounded-full bg-zinc-200" />
            </div>

            <div className="space-y-8">
              <div className="p-6 bg-white border border-zinc-200 rounded-2xl shadow-sm">
                <p className="text-zinc-400 font-mono text-sm mb-4">nutrition_table_v2.pdf</p>
                <div className="space-y-2 opacity-10">
                  <div className="h-1 bg-zinc-950 rounded-full w-full" />
                  <div className="h-1 bg-zinc-950 rounded-full w-4/5" />
                </div>
              </div>
              <p className="text-zinc-500 font-bold text-base lowercase leading-relaxed italic">{t('industry.problem.pdfNote')}</p>
            </div>
          </div>

          {/* Solution Card - The "Standard" */}
          <div className="bg-zinc-950 rounded-[40px] p-12 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]" />
            <div className="flex items-center justify-between mb-12 relative z-10">
              <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">mybud execution</span>
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
            </div>

            <div className="space-y-8 relative z-10">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center text-zinc-950">
                  <MoveRight className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-black text-white lowercase tracking-tight">{t('industry.problem.solution')}</h4>
              </div>

              <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-black text-white lowercase">apply grow a</span>
                  <span className="text-xs font-black text-emerald-400 border border-emerald-500/30 px-4 py-1.5 rounded-full uppercase tracking-widest bg-emerald-500/5">2ml/L</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Ecosystem (Wow Row) */}
        <div className="mb-48 flex flex-col items-center">
          <div className="w-px h-12 bg-zinc-200 mb-12" />
          <p className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.6em] mb-16">trusted by industry leaders</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-20 gap-y-12 items-center opacity-40 hover:opacity-100 transition-opacity duration-700">
            <div className="text-3xl font-black text-zinc-950 tracking-tighter lowercase">ceres core</div>
            <div className="text-3xl font-black text-zinc-950 tracking-tighter lowercase">novagrow</div>
            <div className="text-3xl font-black text-zinc-950 tracking-tighter lowercase">apex fert</div>
            <div className="text-3xl font-black text-zinc-950 tracking-tighter lowercase">soil logic</div>
          </div>
        </div>

        {/* 3 Step Workflow - High Hierarchy */}
        <div className="grid md:grid-cols-3 gap-12 pt-32 border-t border-zinc-100">
          {[
            { id: 1, Icon: Layers, title: t('industry.howItWorks.step1Title'), desc: t('industry.howItWorks.step1') },
            { id: 2, Icon: FileCode2, title: t('industry.howItWorks.step2Title'), desc: t('industry.howItWorks.step2') },
            { id: 3, Icon: Play, title: t('industry.howItWorks.step3Title'), desc: t('industry.howItWorks.step3') },
          ].map((step) => (
            <div key={step.id} className="space-y-6 group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400 group-hover:bg-emerald-500 group-hover:text-zinc-950 group-hover:border-emerald-500 transition-all duration-500">
                  <step.Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-zinc-950 tracking-tight lowercase">{step.title}</h3>
              </div>
              <p className="text-base text-zinc-500 font-bold leading-relaxed lowercase">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Stability Badge */}
        <div className="mt-40 flex justify-center">
          <div className="px-8 py-4 rounded-full bg-zinc-50 border border-zinc-100 flex items-center gap-5 group hover:bg-white hover:border-emerald-500/30 transition-all cursor-default">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:animate-ping" />
            <p className="text-[9px] font-black text-zinc-400 uppercase tracking-[0.4em] group-hover:text-zinc-950 transition-colors">
              {t('industry.howItWorks.noTech')}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IndustryProblem;
