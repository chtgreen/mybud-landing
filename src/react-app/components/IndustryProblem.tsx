import type { FC } from 'react';
import { t } from '../lib/i18n';


const IndustryProblem: FC = () => {
  return (
    <section className="py-20 md:py-28 bg-zinc-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {t('industry.problem.title')}
          </h2>

          <p className="text-lg md:text-xl text-zinc-400 mb-10 font-medium max-w-2xl">
            {t('industry.problem.intro')}
          </p>

          {/* Pain bullets */}
          <ul className="space-y-3 mb-10 max-w-sm">
            {(['pain1', 'pain2', 'pain3', 'pain4'] as const).map((k) => (
              <li key={k} className="flex items-center gap-4 bg-black/40 p-3 rounded-lg border border-black text-lg text-zinc-300">
                <span className="text-red-400 font-bold">×</span>
                {t(`industry.problem.${k}`)}
              </li>
            ))}
          </ul>

          <div className="inline-block px-5 py-3 rounded-xl border border-zinc-700 bg-zinc-900 mb-6">
            <p className="text-white font-mono text-sm tracking-wide">
              👉 {t('industry.problem.pdfNote')}
            </p>
          </div>

          <p className="text-zinc-300 text-lg font-medium">
            {t('industry.problem.solution')}
          </p>
        </div>

        {/* How it works — 3 steps */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">
            {t('industry.howItWorks.title')}
          </h3>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-emerald-500/10 via-emerald-500/50 to-emerald-500/10 z-0" />

            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-zinc-800 border-2 border-emerald-500/30 flex items-center justify-center mb-6 group-hover:bg-emerald-500/10 transition-colors">
                <span className="text-emerald-400 font-mono text-2xl font-bold">1.</span>
              </div>
              <p className="text-lg text-white">{t('industry.howItWorks.step1')}</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-zinc-800 border-2 border-amber-500/30 flex items-center justify-center mb-6 group-hover:bg-amber-500/10 transition-colors">
                <span className="text-amber-400 font-mono text-2xl font-bold">2.</span>
              </div>
              <p className="text-lg text-white">{t('industry.howItWorks.step2')}</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-zinc-800 border-2 border-blue-500/30 flex items-center justify-center mb-6 group-hover:bg-blue-500/10 transition-colors">
                <span className="text-blue-400 font-mono text-2xl font-bold">3.</span>
              </div>
              <p className="text-lg text-white font-medium">{t('industry.howItWorks.step3')}</p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <div className="inline-block px-5 py-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
              <p className="text-white font-mono text-sm tracking-wide">
                {t('industry.howItWorks.noTech')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryProblem;
