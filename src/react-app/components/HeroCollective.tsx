import type { FC } from 'react';
import { t } from '../lib/i18n';
import { Rocket, Phone } from './icons';

interface HeroCollectiveProps {
  onCTAClick: () => void;
}

const HeroCollective: FC<HeroCollectiveProps> = ({ onCTAClick }) => {
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
          {/* Badge - split by • */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-100 border border-emerald-200">
              <span className="text-sm font-semibold text-emerald-900">
                {t('collective.hero.badge')}
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 leading-tight">
              <span className="block">{t('collective.hero.title1')}</span>
              <span className="block text-emerald-600">{t('collective.hero.title2')}</span>
            </h1>

            <p className="text-lg md:text-xl font-medium text-zinc-700 max-w-3xl mx-auto leading-relaxed">
              {t('collective.hero.subtitle')}
            </p>

            <p className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto">
              {t('collective.hero.description')}
            </p>

            <p className="text-sm md:text-base text-zinc-500 max-w-2xl mx-auto italic">
              {t('collective.hero.microcopy')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                type="button"
                onClick={onCTAClick}
                className="btn-primary text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
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
                className="btn-secondary text-lg px-8 py-4 flex items-center gap-2"
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
              <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 backdrop-blur-sm">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-900">Dashboard Associação</h3>
                      <p className="text-sm text-zinc-500">Gestão coletiva em tempo real</p>
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
                      <p className="text-2xl font-bold text-zinc-900">52</p>
                      <p className="text-xs text-emerald-600">4 batches ativos</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-zinc-500">Associados</p>
                      <p className="text-2xl font-bold text-zinc-900">12</p>
                      <p className="text-xs text-zinc-500">3 técnicos</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-zinc-500">Tarefas hoje</p>
                      <p className="text-2xl font-bold text-zinc-900">8</p>
                      <p className="text-xs text-teal-600">3 em andamento</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-zinc-500">Conformidade</p>
                      <p className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">98%</p>
                      <p className="text-xs text-zinc-500">Auditorias ok</p>
                    </div>
                  </div>

                  {/* Timeline Preview */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-zinc-700">Atividades recentes</h4>
                    <div className="space-y-2">
                      {[
                        { user: 'Ana Costa', action: 'Registrou irrigação - Área B', time: 'Há 10 min' },
                        { user: 'Carlos Lima', action: 'Atualizou protocolo de nutrição', time: 'Há 45 min' },
                        { user: 'Paula Santos', action: 'Gerou relatório semanal', time: 'Há 2 horas' },
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

