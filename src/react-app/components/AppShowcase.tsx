import { useState, type FC } from 'react';
import { t } from '../lib/i18n';

interface IPhoneFeatureMockupProps {
  featureType: 'dashboard' | 'voice' | 'alerts' | 'journal';
}

const IPhoneFeatureMockup: FC<IPhoneFeatureMockupProps> = ({ featureType }) => {
  const getFeatureContent = () => {
    switch (featureType) {
      case 'dashboard':
        return (
          <div className="pt-8 h-full">
            <div className="p-3">
              <div className="text-center mb-3">
                <h2 className="text-emerald-700 text-sm font-semibold mb-1">
                  Painel das Plantas
                </h2>
                <p className="text-emerald-600 text-xs">
                  Todas suas plantas organizadas
                </p>
              </div>
              <div className="space-y-2">
                <div className="bg-emerald-50 p-2 rounded-lg border border-emerald-200">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-emerald-800 font-medium text-xs">Planta A - Semana 8</h3>
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  </div>
                  <p className="text-emerald-700 text-xs">Floração - Tricomas desenvolvendo</p>
                </div>
                <div className="bg-blue-50 p-2 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-blue-800 font-medium text-xs">Planta B - Semana 3</h3>
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <p className="text-blue-700 text-xs">Vegetativo - Crescimento acelerado</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'voice':
        return (
          <div className="pt-8 h-full">
            <div className="p-3">
              <div className="text-center mb-3">
                <h2 className="text-emerald-700 text-sm font-semibold mb-1">
                  Anotação por Voz
                </h2>
                <p className="text-emerald-600 text-xs">
                  Registre observações falando
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                    <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                  </svg>
                </div>
                <div className="bg-emerald-50 p-2 rounded-lg border border-emerald-200 w-full">
                  <p className="text-emerald-800 text-xs text-center">
                    "Reguei as plantas hoje de manhã. Planta A está com folhas mais verdes..."
                  </p>
                </div>
                <div className="text-xs text-gray-500 text-center">
                  Tocando para gravar
                </div>
              </div>
            </div>
          </div>
        );
      case 'alerts':
        return (
          <div className="pt-8 h-full">
            <div className="p-3">
              <div className="text-center mb-3">
                <h2 className="text-emerald-700 text-sm font-semibold mb-1">
                  Alertas Inteligentes
                </h2>
                <p className="text-emerald-600 text-xs">
                  Lembretes personalizados
                </p>
              </div>
              <div className="space-y-2">
                <div className="bg-red-50 p-2 rounded-lg border border-red-200 flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                  <div className="flex-1">
                    <p className="text-red-800 text-xs font-medium">Rega necessária</p>
                    <p className="text-red-600 text-xs">Planta A - há 3 dias</p>
                  </div>
                </div>
                <div className="bg-yellow-50 p-2 rounded-lg border border-yellow-200 flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="flex-1">
                    <p className="text-yellow-800 text-xs font-medium">Nutrientes</p>
                    <p className="text-yellow-600 text-xs">Aplicar NPK amanhã</p>
                  </div>
                </div>
                <div className="bg-blue-50 p-2 rounded-lg border border-blue-200 flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <div className="flex-1">
                    <p className="text-blue-800 text-xs font-medium">Fotoperíodo</p>
                    <p className="text-blue-600 text-xs">Mudar para 12/12</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'journal':
        return (
          <div className="pt-8 h-full">
            <div className="p-3">
              <div className="text-center mb-3">
                <h2 className="text-emerald-700 text-sm font-semibold mb-1">
                  Diário de Cultivo
                </h2>
                <p className="text-emerald-600 text-xs">
                  Histórico completo das plantas
                </p>
              </div>
              <div className="space-y-2">
                <div className="bg-emerald-50 p-2 rounded-lg border border-emerald-200">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-emerald-800 font-medium text-xs">Dia 56 - Floração</h3>
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  </div>
                  <p className="text-emerald-700 text-xs">Tricomas 70% leitosos, quase pronto</p>
                </div>
                <div className="bg-gray-50 p-2 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-gray-800 font-medium text-xs">Dia 21 - Vegetativo</h3>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-700 text-xs">Mudança para vaso maior realizada</p>
                </div>
                <div className="bg-gray-50 p-2 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-gray-800 font-medium text-xs">Dia 1 - Germinação</h3>
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                  <p className="text-gray-700 text-xs">Primeira folha verdadeira apareceu</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="relative w-full max-w-[280px] mx-auto">
      {/* iPhone Frame */}
      <div
        className="iphone-frame relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl"
        style={{
          boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4), inset 0 2px 6px rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Dynamic Island */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20"></div>

        {/* Screen Container */}
        <div className="relative bg-black w-full aspect-[9/19.5] overflow-hidden rounded-[2.5rem] shadow-inner">
          {/* Screen Content */}
          <div className="absolute inset-0 bg-white">
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-white z-10 flex items-center justify-between px-3 text-black text-xs font-medium">
              <span>9:41</span>
              <div className="flex space-x-1 items-center">
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-black rounded-full"></div>
                  <div className="w-1 h-1 bg-black rounded-full"></div>
                  <div className="w-1 h-1 bg-black rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                </div>
                <svg className="w-5 h-3" viewBox="0 0 24 12" fill="none">
                  <rect width="20" height="8" x="1" y="2" fill="none" stroke="black" strokeWidth="1" rx="2"/>
                  <rect width="2" height="4" x="21" y="4" fill="black" rx="1"/>
                  <rect width="16" height="4" x="2" y="4" fill="black" rx="1"/>
                </svg>
              </div>
            </div>

            {/* App Content */}
            {getFeatureContent()}

            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white bg-opacity-40 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AppShowcase: FC = () => {
  const [activeFeature, setActiveFeature] = useState<'dashboard' | 'voice' | 'alerts' | 'journal'>('dashboard');

  const features = [
    { 
      id: 'dashboard' as const, 
      titleKey: 'appShowcase.dashboard.title', 
      descKey: 'appShowcase.dashboard.desc',
      icon: 'M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z'
    },
    { 
      id: 'voice' as const, 
      titleKey: 'appShowcase.voice.title', 
      descKey: 'appShowcase.voice.desc',
      icon: 'M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z'
    },
    { 
      id: 'alerts' as const, 
      titleKey: 'appShowcase.alerts.title', 
      descKey: 'appShowcase.alerts.desc',
      icon: 'M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
    },
    { 
      id: 'journal' as const, 
      titleKey: 'appShowcase.journal.title', 
      descKey: 'appShowcase.journal.desc',
      icon: 'M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H7.5A2.25 2.25 0 005.25 6v12A2.25 2.25 0 007.5 20.25h9A2.25 2.25 0 0018.75 18V6A2.25 2.25 0 0016.5 3.75z'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-6 text-gray-800">
            {t('appShowcase.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('appShowcase.subtitle')}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* iPhone Frame with Interactive Screenshots */}
          <div className="lg:w-1/2">
            <IPhoneFeatureMockup featureType={activeFeature} />
          </div>

          {/* Feature Buttons */}
          <div className="lg:w-1/2 space-y-4">
            {features.map((feature) => (
              <div 
                key={feature.id}
                className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 ${
                  activeFeature === feature.id 
                    ? 'border-emerald-400 bg-emerald-50' 
                    : 'border-gray-200 bg-white hover:border-emerald-200 hover:bg-emerald-25'
                }`}
                onClick={() => setActiveFeature(feature.id)}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      activeFeature === feature.id 
                        ? 'bg-emerald-200' 
                        : 'bg-emerald-100'
                    }`}
                  >
                    <svg
                      className="w-6 h-6 text-emerald-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={feature.icon}
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 ${
                      activeFeature === feature.id ? 'text-emerald-800' : 'text-gray-800'
                    }`}>
                      {t(feature.titleKey)}
                    </h3>
                    <p className={`text-sm leading-relaxed ${
                      activeFeature === feature.id ? 'text-emerald-700' : 'text-gray-600'
                    }`}>
                      {t(feature.descKey)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;