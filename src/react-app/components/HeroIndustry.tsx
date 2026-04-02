import type { FC } from 'react';
import { t } from '../lib/i18n';
import { Rocket, Target, CheckCircle2 } from './icons';

interface HeroIndustryProps {
  onCTAClick: () => void;
  onDemoClick?: () => void;
}

const HeroIndustry: FC<HeroIndustryProps> = ({ onCTAClick, onDemoClick }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-900 to-emerald-950">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Cpath d='M0 0h1v40H0zM40 0h1v40h-1zM0 0h40v1H0zM0 40h40v1H0z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-semibold text-emerald-300 tracking-wide">
                {t('industry.hero.badge')}
              </span>
            </div>
          </div>

          {/* Headline */}
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              <span className="text-white">{t('industry.hero.title')}</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              {t('industry.hero.subtitle')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                type="button"
                onClick={onDemoClick || onCTAClick}
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-bold bg-emerald-500 text-white hover:bg-emerald-400 shadow-lg shadow-emerald-500/25 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                {t('industry.hero.cta')}
              </button>
              <button
                type="button"
                onClick={onCTAClick}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold text-zinc-300 border border-zinc-700 hover:border-zinc-500 hover:text-white transition-all"
              >
                <Rocket className="w-5 h-5" />
                {t('industry.hero.secondaryCta')}
              </button>
            </div>
          </div>

          {/* Split Screen Visual */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {/* Left: Without MyBud */}
              <div className="relative rounded-2xl border border-zinc-700/50 bg-zinc-800/50 p-6 md:p-8 backdrop-blur-sm">
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20">
                  <span className="text-xs font-medium text-red-400">{t('industry.hero.visual.left')}</span>
                </div>
                <div className="pt-8 space-y-4">
                  {/* Fake messy UI */}
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-700/30 border border-zinc-700/50">
                    <div className="w-8 h-8 rounded bg-zinc-600/50" />
                    <div className="flex-1 space-y-1.5">
                      <div className="h-2.5 bg-zinc-600/50 rounded w-3/4" />
                      <div className="h-2 bg-zinc-700/50 rounded w-1/2" />
                    </div>
                    <span className="text-xs text-zinc-500">???</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-700/30 border border-zinc-700/50 opacity-60">
                    <div className="w-8 h-8 rounded bg-zinc-600/50" />
                    <div className="flex-1 space-y-1.5">
                      <div className="h-2.5 bg-zinc-600/50 rounded w-2/3" />
                      <div className="h-2 bg-zinc-700/50 rounded w-1/3" />
                    </div>
                    <span className="text-xs text-red-400/60">!</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-700/30 border border-zinc-700/50 opacity-40">
                    <div className="w-8 h-8 rounded bg-zinc-600/50" />
                    <div className="flex-1 space-y-1.5">
                      <div className="h-2.5 bg-zinc-600/50 rounded w-1/2" />
                      <div className="h-2 bg-zinc-700/50 rounded w-2/5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: With MyBud */}
              <div className="relative rounded-2xl border border-emerald-500/30 bg-emerald-950/30 p-6 md:p-8 backdrop-blur-sm">
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <span className="text-xs font-medium text-emerald-400">{t('industry.hero.visual.right')}</span>
                </div>
                <div className="pt-8 space-y-4">
                  {/* MyBud task with product */}
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-emerald-900/30 border border-emerald-500/20">
                    <div className="w-8 h-8 rounded bg-emerald-500/20 flex items-center justify-center">
                      <Target className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-emerald-200">Apply MyBud Fert</p>
                      <p className="text-xs text-emerald-400/60">2ml/L — Week 3</p>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-emerald-900/20 border border-emerald-500/10">
                    <div className="w-8 h-8 rounded bg-emerald-500/15 flex items-center justify-center">
                      <Target className="w-4 h-4 text-emerald-400/70" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-emerald-200/80">pH Check</p>
                      <p className="text-xs text-emerald-400/40">6.2 — Optimal</p>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-emerald-500/40" />
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-emerald-900/10 border border-emerald-500/10">
                    <div className="w-8 h-8 rounded bg-emerald-500/10 flex items-center justify-center">
                      <Target className="w-4 h-4 text-emerald-400/50" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-emerald-200/60">CalMag Boost</p>
                      <p className="text-xs text-emerald-400/30">1ml/L — Flowering</p>
                    </div>
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

export default HeroIndustry;
