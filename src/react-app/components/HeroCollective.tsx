import type { FC } from 'react';
import { t } from '../lib/i18n';
import { Rocket, Phone } from './icons';

interface HeroCollectiveProps {
  onCTAClick: () => void;
}

const HeroCollective: FC<HeroCollectiveProps> = ({ onCTAClick }) => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-50/50">


      <div className="container mx-auto px-6 pt-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge - split by • */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-50 border border-emerald-100 shadow-sm">
              <span className="text-xs font-black tracking-[0.2em] text-emerald-900 uppercase">
                {t('collective.hero.badge')}
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-zinc-950 leading-[0.95] tracking-tight display-text">
              <span className="block">{t('collective.hero.title1')}</span>
              <span className="block text-[#288664] drop-shadow-sm">{t('collective.hero.title2')}</span>
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl text-zinc-800 max-w-4xl mx-auto leading-relaxed text-serif-italic bg-gradient-to-r from-zinc-950 to-zinc-700 bg-clip-text text-transparent">
              {t('collective.hero.subtitle')}
            </p>

            <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto font-medium tracking-wide">
              {t('collective.hero.description')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <button
                type="button"
                onClick={onCTAClick}
                className="w-full sm:w-auto px-8 py-4 rounded-full text-lg font-black bg-[#EB4C80] text-white shadow-[0_10px_30px_rgba(235,76,128,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Rocket className="w-5 h-5" />
                {t('collective.hero.primaryCta')}
              </button>
              <button
                type="button"
                onClick={() => {
                  const pilotSection = document.getElementById('pilot');
                  if (pilotSection) {
                    pilotSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-full text-lg font-black text-[#288664] border-2 border-[#288664]/10 bg-white shadow-sm hover:bg-emerald-50/50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                {t('collective.hero.secondaryCta')}
              </button>
            </div>

            {/* Trust Element */}
            <div className="pt-6">
              <p className="text-sm text-zinc-500 max-w-2xl mx-auto">
                {t('collective.hero.trustElement')}
              </p>
            </div>
          </div>

          {/* Visual Element - Dashboard Preview */}
          <div className="mt-16 relative">
            <div className="relative max-w-4xl mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent blur-3xl" />

              {/* Dashboard Card */}
              <div className="relative bg-white/80 rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-white p-8 backdrop-blur-xl">
                <div className="space-y-8">
                  {/* Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <div>
                      <h3 className="text-lg font-black text-zinc-950 tracking-widest uppercase display-text">{t('collective.hero.dashboard.title')}</h3>
                      <p className="text-sm text-zinc-500 font-medium italic">{t('collective.hero.dashboard.subtitle')}</p>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-medium text-emerald-700">{t('collective.hero.dashboard.live')}</span>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="space-y-1">
                      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">{t('collective.hero.dashboard.metrics.plants.label')}</p>
                      <p className="text-4xl font-bold text-zinc-950 display-text">52</p>
                      <p className="text-xs font-semibold text-[#288664] italic">{t('collective.hero.dashboard.metrics.plants.detail')}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">{t('collective.hero.dashboard.metrics.members.label')}</p>
                      <p className="text-4xl font-bold text-zinc-950 display-text">12</p>
                      <p className="text-xs font-medium text-zinc-400 italic">{t('collective.hero.dashboard.metrics.members.detail')}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">{t('collective.hero.dashboard.metrics.tasks.label')}</p>
                      <p className="text-4xl font-bold text-zinc-950 display-text">8</p>
                      <p className="text-xs font-medium text-teal-600 italic">{t('collective.hero.dashboard.metrics.tasks.detail')}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">{t('collective.hero.dashboard.metrics.compliance.label')}</p>
                      <p className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent display-text">98%</p>
                      <p className="text-xs font-medium text-zinc-400 italic">{t('collective.hero.dashboard.metrics.compliance.detail')}</p>
                    </div>
                  </div>

                  {/* Timeline Preview */}
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">{t('collective.hero.dashboard.timeline.title')}</h4>
                    <div className="space-y-2">
                      {[
                        {
                          user: t('collective.hero.dashboard.timeline.entries.entry1.user'),
                          action: t('collective.hero.dashboard.timeline.entries.entry1.action'),
                          time: t('collective.hero.dashboard.timeline.entries.entry1.time')
                        },
                        {
                          user: t('collective.hero.dashboard.timeline.entries.entry2.user'),
                          action: t('collective.hero.dashboard.timeline.entries.entry2.action'),
                          time: t('collective.hero.dashboard.timeline.entries.entry2.time')
                        },
                        {
                          user: t('collective.hero.dashboard.timeline.entries.entry3.user'),
                          action: t('collective.hero.dashboard.timeline.entries.entry3.action'),
                          time: t('collective.hero.dashboard.timeline.entries.entry3.time')
                        },
                      ].map((activity, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
                          <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                            <span className="text-xs font-semibold text-emerald-700">
                              {activity.user.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-zinc-900 truncate">{activity.user}</p>
                            <p className="text-xs text-zinc-500 truncate">{activity.action}</p>
                          </div>
                          <span className="text-xs text-zinc-400 flex-shrink-0">{activity.time}</span>
                        </div>
                      ))}
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

export default HeroCollective;

