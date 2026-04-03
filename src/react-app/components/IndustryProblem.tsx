import type { FC } from 'react';
import { t } from '../lib/i18n';

const IndustryProblem: FC = () => {
  return (
    <section className="py-24 md:py-32 bg-zinc-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">

        {/* Headline block */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            {t('industry.problem.title')}
          </h2>
          <p className="text-xl md:text-2xl text-zinc-400 mb-4 leading-relaxed">
            {t('industry.problem.intro')}
          </p>
          <p className="text-lg text-zinc-500 leading-relaxed">
            {t('industry.problem.narrative')}
          </p>
        </div>

        {/* PDF → Engine transition */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-20">
          <div className="px-5 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-400 font-mono text-sm">
            📄 {t('industry.problem.pdfNote')}
          </div>
          <div className="text-zinc-600 text-2xl hidden sm:block">→</div>
          <div className="px-5 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-semibold text-sm">
            ⚡ {t('industry.problem.solution')}
          </div>
        </div>

        {/* 3 steps — looks like a real product */}
        <div className="mb-4">
          <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-8">
            {t('industry.howItWorks.title')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-0 relative">
          {/* Connector line desktop */}
          <div className="hidden md:block absolute top-8 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-gradient-to-r from-zinc-700 via-emerald-500/40 to-zinc-700" />

          {/* Step 1 — Mapeamento */}
          <div className="relative group">
            <div className="md:pr-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0 relative z-10 group-hover:border-zinc-500 transition-colors">
                  <svg className="w-7 h-7 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-zinc-600 uppercase tracking-widest">01</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{t('industry.howItWorks.step1Title')}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{t('industry.howItWorks.step1')}</p>
            </div>
          </div>

          {/* Step 2 — Digitalização */}
          <div className="relative group mt-8 md:mt-0">
            <div className="md:px-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-zinc-800 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 relative z-10 group-hover:border-emerald-500/60 transition-colors">
                  <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-zinc-600 uppercase tracking-widest">02</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{t('industry.howItWorks.step2Title')}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{t('industry.howItWorks.step2')}</p>
            </div>
          </div>

          {/* Step 3 — Execução Guiada */}
          <div className="relative group mt-8 md:mt-0">
            <div className="md:pl-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 relative z-10 group-hover:bg-emerald-500/20 transition-colors">
                  <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">03</span>
              </div>
              <h3 className="text-lg font-bold text-emerald-300 mb-2">{t('industry.howItWorks.step3Title')}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{t('industry.howItWorks.step3')}</p>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-12 pt-8 border-t border-zinc-800">
          <p className="text-sm text-zinc-500 font-medium">
            {t('industry.howItWorks.noTech')}
          </p>
        </div>

      </div>
    </section>
  );
};

export default IndustryProblem;
