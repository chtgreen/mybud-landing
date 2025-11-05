import type { FC } from 'react';
import { t } from '../lib/i18n';

interface HeroEnterpriseProps {
  onCTAClick: () => void;
}

const HeroEnterprise: FC<HeroEnterpriseProps> = ({ onCTAClick }) => {
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

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200">
              <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-sm font-semibold text-emerald-900">
                {t('enterprise.hero.badge')}
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 leading-tight">
              <span className="block">{t('enterprise.hero.title1')}</span>
              <span className="block text-emerald-600">{t('enterprise.hero.title2')}</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
              {t('enterprise.hero.subtitle')}
            </p>

            <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto">
              {t('enterprise.hero.description')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                type="button"
                onClick={onCTAClick}
                className="btn-primary text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all"
              >
                {t('enterprise.hero.primaryCta')}
              </button>
              <a
                href="#contact"
                className="btn-secondary text-lg px-8 py-4"
              >
                {t('enterprise.hero.secondaryCta')}
              </a>
            </div>

            {/* Trust Element */}
            <div className="pt-6">
              <p className="text-sm text-zinc-500 max-w-2xl mx-auto">
                {t('enterprise.hero.trustElement')}
              </p>
            </div>

            {/* Feature Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              {[
                t('enterprise.hero.badges.0'),
                t('enterprise.hero.badges.1'),
                t('enterprise.hero.badges.2'),
                t('enterprise.hero.badges.3'),
              ].map((badge, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm"
                >
                  <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-medium text-zinc-700">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element - Dashboard Preview */}
          <div className="mt-16 relative">
            <div className="relative max-w-4xl mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent blur-3xl" />
              
              {/* Dashboard Card */}
              <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 backdrop-blur-sm">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-900">Dashboard Enterprise</h3>
                      <p className="text-sm text-zinc-500">Controle total em tempo real</p>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-medium text-emerald-700">Ao vivo</span>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="space-y-1">
                      <p className="text-xs text-zinc-500">Plantas ativas</p>
                      <p className="text-2xl font-bold text-zinc-900">124</p>
                      <p className="text-xs text-emerald-600">↑ 12% vs mês anterior</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-zinc-500">Cultivadores</p>
                      <p className="text-2xl font-bold text-zinc-900">8</p>
                      <p className="text-xs text-zinc-500">4 ativos hoje</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-zinc-500">Tarefas pendentes</p>
                      <p className="text-2xl font-bold text-zinc-900">23</p>
                      <p className="text-xs text-amber-600">5 vencendo hoje</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-zinc-500">Relatórios gerados</p>
                      <p className="text-2xl font-bold text-zinc-900">47</p>
                      <p className="text-xs text-zinc-500">Este mês</p>
                    </div>
                  </div>

                  {/* Timeline Preview */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-zinc-700">Atividades recentes</h4>
                    <div className="space-y-2">
                      {[
                        { user: 'João Silva', action: 'Registrou rega em Lote A', time: 'Há 5 min' },
                        { user: 'Maria Santos', action: 'Concluiu relatório semanal', time: 'Há 1 hora' },
                        { user: 'Pedro Costa', action: 'Iniciou colheita Lote B', time: 'Há 2 horas' },
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

export default HeroEnterprise;

