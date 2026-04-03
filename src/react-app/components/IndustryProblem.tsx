import type { FC } from 'react';
import { t } from '../lib/i18n';
import { MoveRight } from 'lucide-react';

const IndustryProblem: FC = () => {
  return (
    <section className="py-32 md:py-56 bg-[#050505] text-white relative border-b border-white/5">
      {/* Dynamic Cinematic Layering */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(16,185,129,0.06)_0%,transparent_40%)] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Modern Section Tag */}
        <div className="flex justify-center md:justify-start mb-16 animate-in fade-in slide-in-from-left-4 duration-1200">
          <div className="px-5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400 backdrop-blur-3xl">
            problem • solution
          </div>
        </div>

        {/* Cinematic Headline Layout - High Readability */}
        <div className="text-center md:text-left max-w-6xl mb-40 group">
          <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white mb-16 tracking-[-0.04em] leading-[0.8] lowercase animate-in fade-in slide-in-from-bottom-12 duration-1000">
            {t('industry.problem.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-20 md:gap-32 animate-in fade-in slide-in-from-bottom-12 duration-1200 delay-300">
            <p className="text-2xl text-zinc-200 font-bold leading-relaxed lowercase border-l-2 border-emerald-500/30 pl-10 shadow-[0_0_20px_rgba(255,255,255,0.02)]">
              {t('industry.problem.intro')}
            </p>
            <p className="text-2xl text-zinc-400 font-medium leading-relaxed lowercase opacity-80 backdrop-blur-sm">
              {t('industry.problem.narrative')}
            </p>
          </div>
        </div>

        {/* 2026 Visual Metaphor Cards - Refined for Contrast */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-48">
          {/* Legacy Side */}
          <div className="bg-zinc-900/10 backdrop-blur-3xl rounded-[60px] p-12 border border-white/[0.03] relative group flex flex-col justify-between hover:bg-zinc-900/20 transition-all duration-700">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
              <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">legacy static workflow</span>
            </div>

            <div className="space-y-12 transition-transform duration-700 group-hover:translate-y-[-5px]">
              <p className="text-zinc-500 font-mono text-lg border-b border-white/[0.05] pb-6">nutrition_table_v2.pdf</p>
              <div className="space-y-4 opacity-[0.05]">
                <div className="h-0.5 bg-white rounded-full w-full" />
                <div className="h-0.5 bg-white rounded-full w-4/5" />
                <div className="h-0.5 bg-white rounded-full w-5/6" />
                <div className="h-0.5 bg-white rounded-full w-3/4" />
              </div>
              <p className="text-zinc-500 font-bold text-lg lowercase italic leading-relaxed pt-6">{t('industry.problem.pdfNote')}</p>
            </div>

            <div className="mt-24 opacity-20">
              <div className="w-full h-px bg-white/5" />
            </div>
          </div>

          {/* New Execution Card - Ultra Contrast "WOW" Side */}
          <div className="bg-[#0c0c0c] rounded-[60px] p-12 border border-emerald-500/40 relative group shadow-[0_0_120px_rgba(16,185,129,0.08)] flex flex-col hover:border-emerald-500 transition-all duration-700 overflow-hidden">
            {/* Mesh light effect */}
            <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] bg-emerald-500/10 blur-[80px] group-hover:bg-emerald-500/20 transition-all duration-1000" />

            <div className="flex items-center gap-3 mb-12 relative z-10">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,1)]" />
              <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">mybud active protocol engine</span>
            </div>

            <div className="flex flex-col gap-12 relative z-10 mb-20">
              <div className="flex items-center gap-8">
                <div className="w-20 h-20 rounded-[30px] bg-emerald-500 flex items-center justify-center text-zinc-950 group-hover:scale-110 transition-all duration-700 shadow-[0_20px_40px_rgba(16,185,129,0.3)]">
                  <MoveRight className="w-10 h-10" />
                </div>
                <h4 className="text-4xl font-black text-white lowercase tracking-tight">{t('industry.problem.solution')}</h4>
              </div>

              <div className="space-y-6">
                <div className="bg-white/[0.04] backdrop-blur-3xl rounded-3xl p-8 border border-white/5 flex justify-between items-center group-hover:bg-white/[0.08] group-hover:border-emerald-500/20 transition-all duration-500">
                  <span className="text-xl font-black text-white lowercase tracking-wide">apply grow a</span>
                  <span className="text-sm font-black text-emerald-400 border-2 border-emerald-500/40 px-6 py-2 rounded-full uppercase tracking-widest bg-emerald-500/5 shadow-[0_0_20px_rgba(16,185,129,0.1)]">2ml/L</span>
                </div>
                <div className="bg-white/1 backdrop-blur-sm rounded-3xl p-8 border border-white/5 opacity-40 group-hover:opacity-80 transition-opacity">
                  <span className="text-lg font-bold text-zinc-400 lowercase italic">week 4 • vegetative transition</span>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-10 border-t border-white/5 relative z-10">
              <div className="flex items-center gap-4">
                <div className="flex h-1.5 w-1.5">
                  <div className="animate-ping absolute h-1.5 w-1.5 rounded-full bg-emerald-400/50" />
                  <div className="relative h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <span className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.5em]">active infrastructure status</span>
              </div>
            </div>
          </div>
        </div>

        {/* Partner / Solid Proof Section (Wow Animation Placeholder) */}
        <div className="flex flex-col items-center gap-16 mb-48 animate-in fade-in duration-1000 delay-500">
          <p className="text-[10px] font-black text-zinc-700 uppercase tracking-[0.8em]">the standard for industrial scale</p>
          <div className="flex flex-wrap justify-center gap-x-24 gap-y-12 opacity-30 grayscale hover:grayscale-0 transition-all hover:opacity-100 duration-1000">
            {/* These are conceptual partner placeholders with 2026 tech aesthetics */}
            <div className="text-4xl font-black text-white lowercase tracking-tighter opacity-70 hover:opacity-100 transition-opacity">Ceres Core</div>
            <div className="text-4xl font-black text-white lowercase tracking-tighter opacity-70 hover:opacity-100 transition-opacity">Novagrow</div>
            <div className="text-4xl font-black text-white lowercase tracking-tighter opacity-70 hover:opacity-100 transition-opacity">Apex Fert</div>
            <div className="text-4xl font-black text-white lowercase tracking-tighter opacity-70 hover:opacity-100 transition-opacity">Soil Logic</div>
          </div>
        </div>

        {/* Large Scale Transitions */}
        <div className="grid md:grid-cols-3 gap-32 pt-40 border-t border-white/5">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group relative">
              <div className="absolute top-[-140px] left-[-30px] text-[240px] font-black text-zinc-800/[0.05] select-none group-hover:text-emerald-500/[0.05] transition-all duration-1000 pointer-events-none">
                {i}
              </div>
              <div className="relative z-10 pt-16">
                <h3 className="text-3xl font-black text-white tracking-tight lowercase mb-8 group-hover:translate-x-2 transition-transform duration-700">
                  {t(`industry.howItWorks.step${i}Title`)}
                </h3>
                <p className="text-lg text-zinc-400 leading-relaxed font-bold lowercase group-hover:text-zinc-200 transition-colors">
                  {t(`industry.howItWorks.step${i}`)}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IndustryProblem;
