import type { FC } from 'react';
import { PlantTimeline } from './PlantTimeline';
import {
  SproutIcon,
  BeanIcon,
  LeafIcon,
  FlowerIcon,
  ScissorsIcon,
  CheckIcon,
  type StageIconComponent,
} from './icons/LucideStageIcons';

type ProgressStatus = 'completed' | 'current' | 'upcoming';

interface ProgressEntry {
  icon: StageIconComponent;
  title: string;
  meta: string;
  status: ProgressStatus;
  iconClass: string;
  metaClass: string;
  connectorClass: string;
}

const progressEntries: ProgressEntry[] = [
  {
    icon: BeanIcon,
    title: 'Germinação → Enraizando',
    meta: 'Concluído em 10 dias',
    status: 'completed',
    iconClass: 'border-amber-200/90 bg-amber-50 text-amber-600',
    metaClass: 'text-amber-700/80',
    connectorClass: 'from-amber-200/80 via-emerald-200/80 to-emerald-200/70',
  },
  {
    icon: LeafIcon,
    title: 'Vegetativo',
    meta: 'Concluído em 35 dias (5 semanas)',
    status: 'completed',
    iconClass: 'border-emerald-200/90 bg-emerald-50 text-emerald-600',
    metaClass: 'text-emerald-700/80',
    connectorClass: 'from-emerald-200/80 via-purple-200/80 to-purple-200/70',
  },
  {
    icon: FlowerIcon,
    title: 'Floração',
    meta: 'Atual • 42 dias (6 semanas)',
    status: 'current',
    iconClass: 'border-purple-200 bg-purple-50 text-purple-600',
    metaClass: 'text-purple-600',
    connectorClass: 'from-purple-200/70 via-blue-200/70 to-blue-200/60',
  },
  {
    icon: ScissorsIcon,
    title: 'Colheita → Secagem → Cura',
    meta: 'Estimativa: faltam 2-3 semanas',
    status: 'upcoming',
    iconClass: 'border-blue-200/80 bg-blue-50 text-blue-600',
    metaClass: 'text-blue-600/80',
    connectorClass: 'from-blue-200/60 via-slate-200/60 to-slate-200/40',
  },
];

const PlantTimelineSection: FC = () => {
  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-20 w-[300px] h-[300px] bg-purple-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-emerald-400/5 rounded-full blur-3xl" />
        
        {/* Decorative plant graphics */}
        <img 
          src="/elemento-5.svg" 
          alt=""
          className="absolute top-20 right-10 w-48 h-48 opacity-[0.03] transform rotate-12"
        />
        <img 
          src="/budzinho-contorno-verde-4.svg" 
          alt=""
          className="absolute bottom-20 left-10 w-56 h-56 opacity-[0.04] transform -rotate-12"
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full border border-purple-200/70 shadow-sm">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-200/60 text-purple-600">
              <SproutIcon className="h-4 w-4" />
            </span>
            <span className="text-sm font-medium text-purple-700">Jornada completa</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight tracking-tight">
            Da semente à colheita,<br />
            <span className="text-emerald-600">cada etapa monitorada</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Acompanhe todo o ciclo da planta com uma timeline visual.
            Nunca mais se perca em que fase está o cultivo.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <PlantTimeline />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {/* Feature 1 */}
          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border border-emerald-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-black mb-3">
              Contagem de tempo automática
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Dias e semanas calculados para cada estágio. 
              Saiba exatamente há quanto tempo a planta está vegetativa ou florindo.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border border-purple-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-black mb-3">
              Marcos do cultivo
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Acompanhe transições importantes: quando fez topping, quando a floração começou,
              quando os tricomas ficaram âmbar. A história completa do seu cultivo.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-black mb-3">
              Insights por estágio
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Receba recomendações alinhadas ao estágio atual. 
              O mybud destaca o que acompanhar e o que realmente importa agora.
            </p>
          </div>
        </div>

        {/* Visual Example */}
        <div className="mt-20 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border border-gray-200">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-black mb-4">
                Veja sua evolução
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A timeline visual mostra exatamente em que ponto do ciclo você está.
                Com contagem automática de dias e semanas, você sempre sabe:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-emerald-100 text-emerald-600">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span className="text-gray-700">Há quanto tempo está no estágio atual (dias/semanas)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-emerald-100 text-emerald-600">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span className="text-gray-700">Total de dias desde a germinação</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-emerald-100 text-emerald-600">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span className="text-gray-700">Tempo estimado até a colheita</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-emerald-100 text-emerald-600">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span className="text-gray-700">Histórico de estágios para cultivos futuros</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              {/* Stage Progress Example */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-200 bg-purple-50 text-purple-600 shadow-sm">
                      <FlowerIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Blue Dream</h4>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-600">
                        Floração
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full font-medium border border-purple-200/70 shadow-sm">
                    Semana 6
                  </span>
                </div>
                
                <div className="space-y-5">
                  {progressEntries.map((entry, index) => {
                    const showConnector = index < progressEntries.length - 1;
                    const titleClass =
                      entry.status === 'current'
                        ? 'text-purple-700'
                        : entry.status === 'upcoming'
                          ? 'text-gray-600'
                          : 'text-gray-900';

                    return (
                      <div key={entry.title} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div
                            className={`relative flex h-12 w-12 items-center justify-center rounded-xl border backdrop-blur-sm ${entry.iconClass} ${
                              entry.status === 'upcoming' ? 'opacity-75 border-dashed' : ''
                            } ${
                              entry.status === 'current'
                                ? 'ring-2 ring-purple-200/80 shadow-[0_12px_28px_-12px_rgba(147,51,234,0.45)]'
                                : ''
                            }`}
                          >
                            <entry.icon className="h-6 w-6" />
                            {entry.status === 'completed' && (
                              <span className="absolute -bottom-1 -right-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-white bg-emerald-500 text-white text-[10px] shadow-sm">
                                <CheckIcon className="w-3 h-3" aria-hidden="true" />
                              </span>
                            )}
                          </div>
                          {showConnector && (
                            <div
                              className={`mt-3 h-10 w-[2px] bg-gradient-to-b ${entry.connectorClass} ${
                                entry.status === 'upcoming' ? 'opacity-45' : 'opacity-80'
                              }`}
                            />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className={`text-sm font-semibold ${titleClass}`}>{entry.title}</p>
                          <p className={`mt-1 text-xs ${entry.metaClass}`}>{entry.meta}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantTimelineSection;
