import { useState } from 'react';
import posthog from 'posthog-js';

interface AppShowcaseProps {
  currentLanguage?: string;
}

const AppShowcase: React.FC<AppShowcaseProps> = ({ currentLanguage = 'pt' }) => {
  const [activeFeature, setActiveFeature] = useState('dashboard');

  const texts = {
    pt: {
      title: 'Veja o My Bud em ação',
      subtitle: 'Clique nas funcionalidades para ver como o My Bud simplifica cada etapa do seu cultivo',
      dashboard: {
        title: 'painel das plantas',
        desc: 'acompanhe todas as suas plantas em uma tela. veja fases, status e próximas ações de forma organizada.'
      },
      voice: {
        title: 'anotações por voz',
        desc: 'mãos na terra? apenas fale. o mybud transcreve e organiza suas observações automaticamente no diário.'
      },
      alerts: {
        title: 'alertas inteligentes',
        desc: 'receba lembretes personalizados para rega, nutrientes e mudanças de fotoperíodo. nunca mais esqueça nada.'
      },
      journal: {
        title: 'diário de cultivo',
        desc: 'histórico completo e organizado de cada etapa. acompanhe a evolução e aprenda com cada ciclo.'
      }
    },
    en: {
      title: 'See My Bud in action',
      subtitle: 'Click on the features to see how My Bud simplifies every stage of your grow',
      dashboard: {
        title: 'plant dashboard',
        desc: 'track all your plants on one screen. see phases, status and next actions in an organized way.'
      },
      voice: {
        title: 'voice notes',
        desc: 'hands in the dirt? just talk. My Bud transcribes and organizes your observations automatically in the journal.'
      },
      alerts: {
        title: 'smart alerts',
        desc: 'get personalized reminders for watering, nutrients and photoperiod changes. never forget anything again.'
      },
      journal: {
        title: 'grow journal',
        desc: 'complete and organized history of every stage. track evolution and learn from each cycle.'
      }
    },
    es: {
      title: 'Ve My Bud en acción',
      subtitle: 'Haz clic en las funcionalidades para ver cómo My Bud simplifica cada etapa de tu cultivo',
      dashboard: {
        title: 'panel de plantas',
        desc: 'sigue todas tus plantas en una pantalla. ve fases, estado y próximas acciones de forma organizada.'
      },
      voice: {
        title: 'notas por voz',
        desc: '¿manos en la tierra? solo habla. My Bud transcribe y organiza tus observaciones automáticamente en el diario.'
      },
      alerts: {
        title: 'alertas inteligentes',
        desc: 'recibe recordatorios personalizados para riego, nutrientes y cambios de fotoperíodo. nunca más olvides nada.'
      },
      journal: {
        title: 'diario de cultivo',
        desc: 'historia completa y organizada de cada etapa. sigue la evolución y aprende de cada ciclo.'
      }
    }
  };

  const t = texts[currentLanguage as keyof typeof texts] || texts.pt;

  const showScreenshot = (feature: string) => {
    setActiveFeature(feature);
    
    // PostHog tracking
    if (typeof posthog !== 'undefined') {
      posthog.capture('app_feature_viewed', {
        feature_name: feature,
        page_section: 'app_showcase',
      });
    }
  };

  const StatusBar = () => (
    <div className="absolute top-0 left-0 right-0 h-10 bg-white z-10 flex items-center justify-between px-4 text-black text-xs font-medium">
      <span>9:41</span>
      <div className="flex space-x-1 items-center">
        <div className="flex space-x-1">
          <div className="w-1 h-1 bg-black rounded-full"></div>
          <div className="w-1 h-1 bg-black rounded-full"></div>
          <div className="w-1 h-1 bg-black rounded-full"></div>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
        </div>
        <svg className="w-5 h-3" viewBox="0 0 24 12" fill="none">
          <rect width="20" height="8" x="1" y="2" fill="none" stroke="black" strokeWidth="1" rx="2" />
          <rect width="2" height="4" x="21" y="4" fill="black" rx="1" />
          <rect width="16" height="4" x="2" y="4" fill="black" rx="1" />
        </svg>
      </div>
    </div>
  );

  const DashboardScreen = () => (
    <div className={`screenshot-content absolute inset-0 bg-white transition-opacity duration-500 ${activeFeature === 'dashboard' ? 'opacity-100' : 'opacity-0'}`}>
      <StatusBar />
      <div className="pt-10 p-4">
        <h3 className="text-emerald-700 text-base font-semibold mb-1">
          {currentLanguage === 'pt' ? 'Minhas plantas' : currentLanguage === 'en' ? 'My plants' : 'Mis plantas'}
        </h3>
        <p className="text-emerald-600 text-xs mb-4">
          {currentLanguage === 'pt' ? 'Acompanhe o desenvolvimento' : currentLanguage === 'en' ? 'Track development' : 'Seguir desarrollo'}
        </p>

        <div className="space-y-3">
          {/* Plant Card 1 */}
          <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-emerald-800 font-medium text-xs">
                {currentLanguage === 'pt' ? 'Planta #1' : currentLanguage === 'en' ? 'Plant #1' : 'Planta #1'}
              </h4>
              <span className="text-emerald-600 text-xs">
                {currentLanguage === 'pt' ? 'Semana 8' : currentLanguage === 'en' ? 'Week 8' : 'Semana 8'}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-200 rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
              </div>
              <div>
                <p className="text-emerald-800 text-xs font-medium">
                  {currentLanguage === 'pt' ? 'Floração' : currentLanguage === 'en' ? 'Flowering' : 'Floración'}
                </p>
                <p className="text-emerald-600 text-xs">
                  {currentLanguage === 'pt' ? 'Tudo certo' : currentLanguage === 'en' ? 'All good' : 'Todo bien'}
                </p>
              </div>
            </div>
          </div>
          
          {/* Plant Card 2 */}
          <div className="bg-gray-50 p-3 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-gray-800 font-medium text-xs">
                {currentLanguage === 'pt' ? 'Planta #2' : currentLanguage === 'en' ? 'Plant #2' : 'Planta #2'}
              </h4>
              <span className="text-gray-600 text-xs">
                {currentLanguage === 'pt' ? 'Semana 4' : currentLanguage === 'en' ? 'Week 4' : 'Semana 4'}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-200 rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-green-600 rounded-full"></div>
              </div>
              <div>
                <p className="text-gray-800 text-xs font-medium">
                  {currentLanguage === 'pt' ? 'Vegetativa' : currentLanguage === 'en' ? 'Vegetative' : 'Vegetativa'}
                </p>
                <p className="text-gray-600 text-xs">
                  {currentLanguage === 'pt' ? 'Crescendo bem' : currentLanguage === 'en' ? 'Growing well' : 'Creciendo bien'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const VoiceScreen = () => (
    <div className={`screenshot-content absolute inset-0 bg-white transition-opacity duration-500 ${activeFeature === 'voice' ? 'opacity-100' : 'opacity-0'}`}>
      <StatusBar />
      <div className="pt-10 p-4">
        <h3 className="text-emerald-700 text-base font-semibold mb-1">
          {currentLanguage === 'pt' ? 'Anotação por voz' : currentLanguage === 'en' ? 'Voice note' : 'Nota por voz'}
        </h3>
        <p className="text-emerald-600 text-xs mb-4">
          {currentLanguage === 'pt' ? 'Fale e o My Bud organiza' : currentLanguage === 'en' ? 'Speak and My Bud organizes' : 'Habla y My Bud organiza'}
        </p>

        <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 mb-4">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center animate-pulse">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" />
              </svg>
            </div>
          </div>
          <p className="text-center text-emerald-700 text-xs mt-2">
            {currentLanguage === 'pt' ? 'Gravando...' : currentLanguage === 'en' ? 'Recording...' : 'Grabando...'}
          </p>
        </div>

        <div className="space-y-2">
          <div className="bg-emerald-50 p-2 rounded-lg">
            <p className="text-emerald-800 text-xs">
              {currentLanguage === 'pt' ? '"Reguei a planta 1 hoje de manhã"' : currentLanguage === 'en' ? '"Watered plant 1 this morning"' : '"Regué la planta 1 esta mañana"'}
            </p>
            <p className="text-emerald-600 text-xs">
              {currentLanguage === 'pt' ? 'Há 2 horas' : currentLanguage === 'en' ? '2 hours ago' : 'Hace 2 horas'}
            </p>
          </div>
          <div className="bg-gray-50 p-2 rounded-lg">
            <p className="text-gray-800 text-xs">
              {currentLanguage === 'pt' ? '"Mudança para floração semana que vem"' : currentLanguage === 'en' ? '"Change to flowering next week"' : '"Cambio a floración la próxima semana"'}
            </p>
            <p className="text-gray-600 text-xs">
              {currentLanguage === 'pt' ? 'Ontem' : currentLanguage === 'en' ? 'Yesterday' : 'Ayer'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const AlertsScreen = () => (
    <div className={`screenshot-content absolute inset-0 bg-white transition-opacity duration-500 ${activeFeature === 'alerts' ? 'opacity-100' : 'opacity-0'}`}>
      <StatusBar />
      <div className="pt-10 p-4">
        <h3 className="text-emerald-700 text-base font-semibold mb-1">
          {currentLanguage === 'pt' ? 'Alertas inteligentes' : currentLanguage === 'en' ? 'Smart alerts' : 'Alertas inteligentes'}
        </h3>
        <p className="text-emerald-600 text-xs mb-4">
          {currentLanguage === 'pt' ? 'Nunca mais esqueça nada' : currentLanguage === 'en' ? 'Never forget anything' : 'Nunca olvides nada'}
        </p>

        <div className="space-y-3">
          <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <div>
                <p className="text-emerald-800 text-xs font-medium">
                  {currentLanguage === 'pt' ? 'Hora de regar' : currentLanguage === 'en' ? 'Time to water' : 'Hora de regar'}
                </p>
                <p className="text-emerald-600 text-xs">
                  {currentLanguage === 'pt' ? 'Planta #1 - em 2 horas' : currentLanguage === 'en' ? 'Plant #1 - in 2 hours' : 'Planta #1 - en 2 horas'}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-3 rounded-xl border border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-800 text-xs font-medium">
                  {currentLanguage === 'pt' ? 'Nutrientes' : currentLanguage === 'en' ? 'Nutrients' : 'Nutrientes'}
                </p>
                <p className="text-gray-600 text-xs">
                  {currentLanguage === 'pt' ? 'Aplicar amanhã' : currentLanguage === 'en' ? 'Apply tomorrow' : 'Aplicar mañana'}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-3 rounded-xl border border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zM4 19h16v2H4z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-800 text-xs font-medium">
                  {currentLanguage === 'pt' ? 'Fotoperíodo' : currentLanguage === 'en' ? 'Photoperiod' : 'Fotoperíodo'}
                </p>
                <p className="text-gray-600 text-xs">
                  {currentLanguage === 'pt' ? 'Mudar para 12/12' : currentLanguage === 'en' ? 'Change to 12/12' : 'Cambiar a 12/12'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const JournalScreen = () => (
    <div className={`screenshot-content absolute inset-0 bg-white transition-opacity duration-500 ${activeFeature === 'journal' ? 'opacity-100' : 'opacity-0'}`}>
      <StatusBar />
      <div className="pt-10 p-4">
        <h3 className="text-emerald-700 text-base font-semibold mb-1">
          {currentLanguage === 'pt' ? 'Diário de cultivo' : currentLanguage === 'en' ? 'Grow journal' : 'Diario de cultivo'}
        </h3>
        <p className="text-emerald-600 text-xs mb-4">
          {currentLanguage === 'pt' ? 'Histórico completo organizado' : currentLanguage === 'en' ? 'Complete organized history' : 'Historia completa organizada'}
        </p>

        <div className="space-y-3">
          <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-emerald-800 text-xs font-medium">17 Jan</h4>
              <span className="text-emerald-600 text-xs">
                {currentLanguage === 'pt' ? 'semana 8' : currentLanguage === 'en' ? 'week 8' : 'semana 8'}
              </span>
            </div>
            <p className="text-emerald-700 text-xs">
              {currentLanguage === 'pt' ? 'Rega realizada. Plantas respondendo bem à floração.' : currentLanguage === 'en' ? 'Watering done. Plants responding well to flowering.' : 'Riego realizado. Plantas respondiendo bien a la floración.'}
            </p>
          </div>
          
          <div className="bg-gray-50 p-3 rounded-xl border border-gray-200">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-gray-800 text-xs font-medium">15 Jan</h4>
              <span className="text-gray-600 text-xs">
                {currentLanguage === 'pt' ? 'semana 8' : currentLanguage === 'en' ? 'week 8' : 'semana 8'}
              </span>
            </div>
            <p className="text-gray-700 text-xs">
              {currentLanguage === 'pt' ? 'Aplicação de nutrientes. Folhas com cor saudável.' : currentLanguage === 'en' ? 'Nutrient application. Leaves with healthy color.' : 'Aplicación de nutrientes. Hojas con color saludable.'}
            </p>
          </div>

          <div className="bg-gray-50 p-3 rounded-xl border border-gray-200">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-gray-800 text-xs font-medium">10 Jan</h4>
              <span className="text-gray-600 text-xs">
                {currentLanguage === 'pt' ? 'semana 7' : currentLanguage === 'en' ? 'week 7' : 'semana 7'}
              </span>
            </div>
            <p className="text-gray-700 text-xs">
              {currentLanguage === 'pt' ? 'Mudança para fotoperíodo 12/12. Início da floração.' : currentLanguage === 'en' ? 'Change to 12/12 photoperiod. Start of flowering.' : 'Cambio a fotoperíodo 12/12. Inicio de la floración.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const FeatureButton = ({ 
    feature, 
    icon, 
    title, 
    description 
  }: { 
    feature: string; 
    icon: React.ReactNode; 
    title: string; 
    description: string; 
  }) => (
    <div
      className={`feature-button cursor-pointer bg-emerald-50 border-2 rounded-2xl p-6 hover:border-emerald-300 transition-all duration-300 ${
        activeFeature === feature 
          ? 'active bg-emerald-100 border-emerald-300' 
          : 'border-emerald-200'
      }`}
      onClick={() => showScreenshot(feature)}
      data-feature={feature}
    >
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-emerald-200 rounded-xl flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-emerald-800 font-semibold text-lg mb-2">
            {title}
          </h3>
          <p className="text-emerald-700 text-sm">
            {description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-gray-800">
              {t.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* iPhone Frame with Screenshots */}
            <div className="lg:w-1/2">
              <div className="relative max-w-xs mx-auto">
                {/* iPhone Frame */}
                <div
                  className="iphone-frame relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl"
                  style={{
                    boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4), inset 0 2px 6px rgba(255, 255, 255, 0.1)'
                  }}
                >
                  {/* Dynamic Island */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20"></div>

                  {/* Screenshot Container */}
                  <div className="relative bg-black w-full aspect-[9/19.5] overflow-hidden rounded-[2.5rem] shadow-inner">
                    <DashboardScreen />
                    <VoiceScreen />
                    <AlertsScreen />
                    <JournalScreen />
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Feature Buttons */}
            <div className="lg:w-1/2">
              <div className="space-y-4">
                <FeatureButton
                  feature="dashboard"
                  title={t.dashboard.title}
                  description={t.dashboard.desc}
                  icon={
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                    </svg>
                  }
                />

                <FeatureButton
                  feature="voice"
                  title={t.voice.title}
                  description={t.voice.desc}
                  icon={
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                    </svg>
                  }
                />

                <FeatureButton
                  feature="alerts"
                  title={t.alerts.title}
                  description={t.alerts.desc}
                  icon={
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                  }
                />

                <FeatureButton
                  feature="journal"
                  title={t.journal.title}
                  description={t.journal.desc}
                  icon={
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H7.5A2.25 2.25 0 005.25 6v12A2.25 2.25 0 007.5 20.25h9A2.25 2.25 0 0018.75 18V6A2.25 2.25 0 0016.5 3.75z" />
                    </svg>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;