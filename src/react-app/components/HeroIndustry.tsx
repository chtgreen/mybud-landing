import type { FC } from 'react';
import { t } from '../lib/i18n';
import { Rocket, Phone } from './icons';

interface HeroIndustryProps {
  onCTAClick: () => void;
}

const HeroIndustry: FC<HeroIndustryProps> = ({ onCTAClick }) => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-50/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 pt-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-50 border border-emerald-200/50">
              <span className="text-sm font-semibold text-emerald-800 tracking-wide">
                MyBud Industry
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block text-zinc-900">{t('industry.hero.title')}</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
              {t('industry.hero.subtitle')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <button
                type="button"
                onClick={onCTAClick}
                className="btn-primary text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                <Rocket className="w-5 h-5" />
                {t('industry.hero.cta')}
              </button>
              <button
                type="button"
                onClick={onCTAClick}
                className="btn-secondary text-lg px-8 py-4 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                {t('industry.hero.secondaryCta')}
              </button>
            </div>

            {/* Trust Element */}
            <div className="pt-6">
              <p className="text-sm text-zinc-500 max-w-2xl mx-auto">
                {t('industry.hero.trustElement')}
              </p>
            </div>
          </div>

          {/* Visual Element - Partnership Metrics */}
          <div className="mt-16 relative">
            <div className="relative max-w-4xl mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent blur-3xl" />
              
              {/* Metrics Card */}
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 backdrop-blur-sm">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-900">{t('industry.hero.dashboard.title')}</h3>
                      <p className="text-sm text-zinc-500">{t('industry.hero.dashboard.subtitle')}</p>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50/80 border border-emerald-100">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-medium text-emerald-700">{t('industry.hero.dashboard.live')}</span>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="space-y-1">
                      <p className="text-xs text-zinc-500">{t('industry.hero.dashboard.stats.activeGrowers')}</p>
                      <p className="text-2xl font-bold text-zinc-900">2.4K</p>
                      <p className="text-xs text-emerald-600">+127 {t('industry.hero.dashboard.stats.thisMonth')}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-zinc-500">{t('industry.hero.dashboard.stats.touchpoints')}</p>
                      <p className="text-2xl font-bold text-zinc-900">18K</p>
                      <p className="text-xs text-zinc-500">{t('industry.hero.dashboard.stats.perMonth')}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-zinc-500">{t('industry.hero.dashboard.stats.engagement')}</p>
                      <p className="text-2xl font-bold text-zinc-900">87%</p>
                      <p className="text-xs text-emerald-600">{t('industry.hero.dashboard.stats.openRate')}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-zinc-500">{t('industry.hero.dashboard.stats.avgRoi')}</p>
                      <p className="text-2xl font-bold text-emerald-700">3.2x</p>
                      <p className="text-xs text-zinc-500">{t('industry.hero.dashboard.stats.partners')}</p>
                    </div>
                  </div>

                  {/* Opportunities */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-zinc-700">{t('industry.hero.dashboard.opportunities.title')}</h4>
                    <div className="space-y-2">
                      {[
                        { stage: t('industry.hero.dashboard.opportunities.veg.stage'), users: t('industry.hero.dashboard.opportunities.veg.users'), action: t('industry.hero.dashboard.opportunities.veg.action') },
                        { stage: t('industry.hero.dashboard.opportunities.flower.stage'), users: t('industry.hero.dashboard.opportunities.flower.users'), action: t('industry.hero.dashboard.opportunities.flower.action') },
                        { stage: t('industry.hero.dashboard.opportunities.drying.stage'), users: t('industry.hero.dashboard.opportunities.drying.users'), action: t('industry.hero.dashboard.opportunities.drying.action') },
                      ].map((opportunity, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50/50 border border-gray-100">
                          <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                            <span className="text-xs font-bold text-emerald-700">
                              {opportunity.stage.charAt(0)}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-zinc-900 truncate">{opportunity.stage}</p>
                            <p className="text-xs text-zinc-500 truncate">{opportunity.users}</p>
                          </div>
                          <span className="text-xs text-emerald-700 font-medium flex-shrink-0">{opportunity.action}</span>
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

export default HeroIndustry;

