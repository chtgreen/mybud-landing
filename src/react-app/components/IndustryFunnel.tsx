import { t } from '../lib/i18n';

interface IndustryFunnelProps {
  onCTAClick: () => void;
}

export default function IndustryFunnel({ onCTAClick }: IndustryFunnelProps) {
  const scrollToTransformation = () => {
    document.getElementById('transformation')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="font-sans">

      {/* Section 1 — HERO */}
      <section className="bg-zinc-900 text-white pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/30 via-zinc-900 to-zinc-900" />
        <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] whitespace-pre-line">
              {t('industry.funnel.hero.headline')}
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
              {t('industry.funnel.hero.subheadline')}
            </p>
            <ul className="space-y-3">
              {[
                t('industry.funnel.hero.bullet1'),
                t('industry.funnel.hero.bullet2'),
                t('industry.funnel.hero.bullet3'),
              ].map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-200">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="font-medium">{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={onCTAClick}
                className="px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-lg transition-colors shadow-lg shadow-emerald-500/20"
              >
                {t('industry.funnel.hero.cta')}
              </button>
              <button
                onClick={scrollToTransformation}
                className="px-8 py-4 rounded-xl bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 text-white font-bold text-lg transition-colors"
              >
                {t('industry.funnel.hero.secondaryCta')}
              </button>
            </div>
          </div>

          {/* App mock */}
          <div className="relative rounded-[2rem] bg-zinc-800 border border-zinc-700 p-6 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full" />
            <div className="relative z-10 space-y-2">
              <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">MyBud — Tarefa de hoje</p>
              <div className="bg-zinc-900 border border-emerald-500/30 rounded-2xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-emerald-50 text-base">{t('industry.funnel.hero.mock.taskName')}</p>
                  <p className="text-emerald-400 font-medium text-sm mt-0.5">{t('industry.funnel.hero.mock.taskDetail')}</p>
                  <p className="text-zinc-400 text-sm mt-1">{t('industry.funnel.hero.mock.taskPhase')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — PROBLEM */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 mb-12 whitespace-pre-line">
            {t('industry.funnel.problem.headline')}
          </h2>
          <p className="text-lg text-zinc-600 mb-10 leading-relaxed">
            {t('industry.funnel.problem.channels')}
          </p>
          <div className="space-y-4 mb-12">
            {[
              t('industry.funnel.problem.pain1'),
              t('industry.funnel.problem.pain2'),
              t('industry.funnel.problem.pain3'),
            ].map((pain, i) => (
              <div key={i} className="flex items-center gap-4 bg-zinc-50 border border-zinc-200 rounded-xl px-5 py-4">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400 flex-shrink-0" />
                <p className="text-lg font-semibold text-zinc-700">{pain}</p>
              </div>
            ))}
          </div>
          <div className="bg-zinc-900 rounded-2xl px-8 py-6">
            <p className="text-xl font-bold text-white">
              {t('industry.funnel.problem.punchline')}
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 — TRANSFORMATION */}
      <section id="transformation" className="bg-zinc-900 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-16 text-center">
            {t('industry.funnel.transformation.headline')}
          </h2>

          {/* Before / After visual */}
          <div className="flex flex-col md:flex-row items-center gap-6 justify-center mb-16">
            {/* Before */}
            <div className="flex-1 max-w-xs bg-zinc-800 border border-red-500/20 rounded-2xl p-6 text-center">
              <span className="inline-block text-xs font-bold text-red-400 uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20">
                {t('industry.funnel.transformation.beforeLabel')}
              </span>
              <p className="text-lg font-semibold text-zinc-300 italic whitespace-pre-line">
                {t('industry.funnel.transformation.beforeContent')}
              </p>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center">
              <svg className="w-10 h-10 text-emerald-500 rotate-90 md:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>

            {/* After */}
            <div className="flex-1 max-w-xs bg-emerald-950/40 border border-emerald-500/30 rounded-2xl p-6 text-center">
              <span className="inline-block text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                {t('industry.funnel.transformation.afterLabel')}
              </span>
              <p className="text-lg font-bold text-emerald-50 whitespace-pre-line">
                {t('industry.funnel.transformation.afterContent')}
              </p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto mb-10">
            <p className="text-zinc-300 text-lg mb-6 text-center">{t('industry.funnel.transformation.body')}</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                t('industry.funnel.transformation.item1'),
                t('industry.funnel.transformation.item2'),
                t('industry.funnel.transformation.item3'),
                t('industry.funnel.transformation.item4'),
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-zinc-800/60 border border-zinc-700/50 rounded-xl px-4 py-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                  <span className="text-zinc-200 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-2xl md:text-3xl font-extrabold text-emerald-400 whitespace-pre-line leading-snug">
              {t('industry.funnel.transformation.punchline')}
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 — NEW GROWERS */}
      <section className="bg-zinc-900 text-white py-24 px-6 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              {t('industry.funnel.newGrowers.headline')}
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed">
              {t('industry.funnel.newGrowers.problem')}
            </p>
            <ul className="space-y-3">
              {[
                t('industry.funnel.newGrowers.bullet1'),
                t('industry.funnel.newGrowers.bullet2'),
                t('industry.funnel.newGrowers.bullet3'),
              ].map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-200">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="font-medium">{bullet}</span>
                </li>
              ))}
            </ul>
            <p className="text-xl font-bold text-emerald-400">
              {t('industry.funnel.newGrowers.punchline')}
            </p>
          </div>

          {/* Mock screen */}
          <div className="bg-zinc-800 border border-zinc-700 rounded-2xl p-6 space-y-4">
            <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">MyBud — Para novos growers</p>
            <div className="bg-zinc-900 border border-emerald-500/20 rounded-xl p-5">
              <p className="text-emerald-300 font-semibold text-sm mb-3">{t('industry.funnel.newGrowers.mockPlan')}</p>
              <button className="w-full py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white font-bold transition-colors text-sm">
                {t('industry.funnel.newGrowers.mockCta')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — HOW BRAND APPEARS */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 mb-16 text-center">
            {t('industry.funnel.appearance.headline')}
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { title: t('industry.funnel.appearance.block1Title'), desc: t('industry.funnel.appearance.block1Desc') },
              { title: t('industry.funnel.appearance.block2Title'), desc: t('industry.funnel.appearance.block2Desc') },
              { title: t('industry.funnel.appearance.block3Title'), desc: t('industry.funnel.appearance.block3Desc') },
            ].map((block, i) => (
              <div key={i} className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8 text-center">
                <h3 className="text-xl font-extrabold text-zinc-900 mb-3">{block.title}</h3>
                <p className="text-zinc-500 font-medium">{block.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-xl mx-auto text-center">
            <p className="text-lg text-zinc-600 mb-6">{t('industry.funnel.appearance.body')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {[
                t('industry.funnel.appearance.when'),
                t('industry.funnel.appearance.how'),
                t('industry.funnel.appearance.why'),
              ].map((item, i) => (
                <span key={i} className="px-5 py-2.5 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-100 text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — HOW IT GENERATES SALES */}
      <section className="bg-zinc-900 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-12">
            {t('industry.funnel.sales.headline')}
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            {[
              t('industry.funnel.sales.item1'),
              t('industry.funnel.sales.item2'),
              t('industry.funnel.sales.item3'),
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-zinc-800 border border-zinc-700 rounded-xl px-6 py-4">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 flex-shrink-0" />
                <span className="font-bold text-zinc-100">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-2xl md:text-3xl font-extrabold text-emerald-400 whitespace-pre-line leading-snug">
            {t('industry.funnel.sales.punchline')}
          </p>
        </div>
      </section>

      {/* Section 7 — DATA */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 mb-6 text-center">
            {t('industry.funnel.data.headline')}
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-16">
            {[
              t('industry.funnel.data.item1'),
              t('industry.funnel.data.item2'),
              t('industry.funnel.data.item3'),
              t('industry.funnel.data.item4'),
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-zinc-50 border border-zinc-200 rounded-xl px-5 py-4">
                <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                <span className="font-medium text-zinc-700">{item}</span>
              </div>
            ))}
          </div>

          {/* Mock dashboard */}
          <div className="max-w-sm mx-auto bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Dashboard</p>
            <div className="space-y-3">
              {[
                { label: t('industry.funnel.data.mockLabel1'), value: '—' },
                { label: t('industry.funnel.data.mockLabel2'), value: '—' },
                { label: t('industry.funnel.data.mockLabel3'), value: '—' },
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-zinc-800">
                  <span className="text-zinc-400 text-sm font-medium">{row.label}</span>
                  <span className="text-emerald-400 font-bold">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 — HOW IT WORKS */}
      <section className="bg-zinc-50 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 mb-16">
            {t('industry.funnel.howItWorks.headline')}
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { num: '1', label: t('industry.funnel.howItWorks.step1') },
              { num: '2', label: t('industry.funnel.howItWorks.step2') },
              { num: '3', label: t('industry.funnel.howItWorks.step3') },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-extrabold mb-5 ${i === 2 ? 'bg-emerald-500 text-white' : 'bg-zinc-200 text-zinc-500'}`}>
                  {step.num}
                </div>
                <p className="text-lg font-bold text-zinc-800">{step.label}</p>
              </div>
            ))}
          </div>

          <p className="text-zinc-500 font-semibold">
            {t('industry.funnel.howItWorks.footer')}
          </p>
        </div>
      </section>

      {/* Section 9 — POSITIONING / URGENCY */}
      <section className="bg-zinc-900 text-white py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
            {t('industry.funnel.positioning.headline')}
          </h2>
          <p className="text-lg text-zinc-300 mb-12 leading-relaxed">
            {t('industry.funnel.positioning.body')}
          </p>
          <button
            onClick={onCTAClick}
            className="px-10 py-5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xl transition-colors shadow-lg shadow-emerald-500/20"
          >
            {t('industry.funnel.positioning.cta')}
          </button>
        </div>
      </section>

      {/* Section 10 — FINAL */}
      <section className="bg-gradient-to-b from-zinc-900 to-zinc-950 text-white py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 whitespace-pre-line leading-tight">
            {t('industry.funnel.final.headline')}
          </h2>
          <p className="text-xl text-zinc-400 mb-12 font-medium">
            {t('industry.funnel.final.sub')}
          </p>
          <button
            onClick={onCTAClick}
            className="px-10 py-5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xl transition-colors shadow-lg shadow-emerald-500/20"
          >
            {t('industry.funnel.final.cta')}
          </button>
        </div>
      </section>

    </div>
  );
}
