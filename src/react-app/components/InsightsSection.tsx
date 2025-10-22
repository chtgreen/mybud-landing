import type { FC } from 'react';
import { InsightCards } from './InsightCards';
import { ActivityFeed } from './ActivityFeed';
import {
  BarChart3,
  BookOpenCheck,
  Bot,
  Lightbulb,
  Microscope,
  NotebookPen,
  Target,
} from './icons';

interface InsightsSectionProps {
  onActivate?: () => void;
}

const InsightsSection: FC<InsightsSectionProps> = ({ onActivate }) => {
  const handleActivateClick = () => {
    if (onActivate) {
      onActivate();
      return;
    }

    const betaSection = document.getElementById('beta');
    betaSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 right-20 w-[350px] h-[350px] bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-purple-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full border border-blue-200">
            <Bot className="w-5 h-5 text-blue-700" aria-hidden="true" />
            <span className="text-sm font-medium text-blue-700">Inteligência do mybud</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight tracking-tight">
            Seu parceiro<br />
            <span className="text-emerald-600">de cultivo pessoal</span>
          </h2>
          
          {/* Subtitle */}
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-6">
            <img
              src="/MyBud - Budzinho Colorido 2.png"
              alt="Ilustração do Budzinho, seu parceiro de cultivo"
              className="w-20 h-20 md:w-24 md:h-24 drop-shadow-[0_12px_24px_rgba(40,134,100,0.25)] rounded-full object-cover"
            />
            <p className="text-lg md:text-xl text-gray-700 max-w-xl leading-relaxed">
              Conheça o Budzinho: o parceiro que já cultivou muita planta e acompanha você do início ao fim, trazendo apoio humano em cada ciclo.
            </p>
          </div>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Ele combina experiência prática com a inteligência do mybud para entregar insights
            personalizados para suas plantas, fases e ambiente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto mb-20">
          {/* Left - Insights */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-6">
              Recomendações inteligentes
            </h3>
            <InsightCards limit={4} />
            
            <div className="mt-6 p-6 bg-white rounded-xl border border-blue-100">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900 mb-1">
                    Insights com contexto
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    As orientações consideram a fase da planta, semana do cultivo, métricas do ambiente
                    e atividades recentes. É como ter um mestre grower acompanhando 24/7.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Activity Feed */}
          <div>
            <ActivityFeed limit={5} onViewAll={handleActivateClick} />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {/* Feature 1 */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-emerald-600" aria-hidden="true" />
            </div>
            <h4 className="font-semibold text-black mb-2">Por estágio</h4>
            <p className="text-sm text-gray-600">
              Orientações diferentes para plantas em vegetativo ou floração
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-blue-600" aria-hidden="true" />
            </div>
            <h4 className="font-semibold text-black mb-2">Monitoramento de métricas</h4>
            <p className="text-sm text-gray-600">
              Alertas quando temperatura, umidade ou VPD saem da faixa ideal
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <Microscope className="w-6 h-6 text-purple-600" aria-hidden="true" />
            </div>
            <h4 className="font-semibold text-black mb-2">Detecção de problemas</h4>
            <p className="text-sm text-gray-600">
              Identifica padrões que indicam estresse ou falta de nutrientes
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
              <BookOpenCheck className="w-6 h-6 text-amber-600" aria-hidden="true" />
            </div>
            <h4 className="font-semibold text-black mb-2">Aprendizado contínuo</h4>
            <p className="text-sm text-gray-600">
              Entenda por que as métricas importam e as melhores práticas de cada fase
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200">
          <h3 className="text-3xl font-bold text-black mb-8 text-center">
            Como o mybud orienta você
          </h3>
          
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-8">
            {/* Step 1 */}
            <div className="text-center md:flex-1 md:max-w-xs md:mx-auto">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <NotebookPen className="w-8 h-8 text-emerald-600" aria-hidden="true" />
              </div>
              <div className="mb-3">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-emerald-600 text-white rounded-full font-bold text-sm mb-2">
                  1
                </span>
              </div>
              <h4 className="font-semibold text-black mb-2">Você registra as atividades</h4>
              <p className="text-sm text-gray-600">
                Registre regas, métricas e observações por voz ou manualmente
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center md:px-2">
              <svg className="w-12 h-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>

            {/* Step 2 */}
            <div className="text-center md:flex-1 md:max-w-xs md:mx-auto">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Bot className="w-8 h-8 text-blue-600" aria-hidden="true" />
              </div>
              <div className="mb-3">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full font-bold text-sm mb-2">
                  2
                </span>
              </div>
              <h4 className="font-semibold text-black mb-2">O motor analisa</h4>
              <p className="text-sm text-gray-600">
                O motor avalia estágio, métricas e padrões com base em 1000+ regras de especialistas
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center md:px-2">
              <svg className="w-12 h-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>

            {/* Step 3 */}
            <div className="text-center md:flex-1 md:max-w-xs md:mx-auto">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-purple-600" aria-hidden="true" />
              </div>
              <div className="mb-3">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-purple-600 text-white rounded-full font-bold text-sm mb-2">
                  3
                </span>
              </div>
              <h4 className="font-semibold text-black mb-2">Receba recomendações</h4>
              <p className="text-sm text-gray-600">
                Receba insights práticos e no momento certo para o seu cultivo
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">
              1000+
            </div>
            <p className="text-gray-600">Regras de especialistas</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
              19
            </div>
            <p className="text-gray-600">Métricas acompanhadas</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
              9
            </div>
            <p className="text-gray-600">Fases de crescimento</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">
              24/7
            </div>
            <p className="text-gray-600">Monitoramento</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Pare de adivinhar. Cultive com <strong className="text-emerald-600">a confiança inteligente do mybud</strong>
          </p>
          <button
            onClick={handleActivateClick}
            className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Ativar orientações inteligentes
          </button>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
