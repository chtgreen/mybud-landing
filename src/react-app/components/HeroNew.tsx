import type { FC } from 'react';
import { t } from '../lib/i18n';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroProps {
  onCTAClick: () => void;
}

const IPhoneMockup: FC = () => {
  return (
    <div className="iphone-frame relative mx-auto" style={{ 
      width: '280px', 
      height: '570px', 
      borderRadius: '60px',
      border: '8px solid #1f1f1f',
      background: 'linear-gradient(145deg, #2a2a2a, #1a1a1a)',
      boxShadow: '0 25px 50px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
      overflow: 'hidden'
    }}>
      {/* Screen */}
      <div className="absolute inset-2 rounded-[52px] bg-white overflow-hidden">
        {/* Status Bar */}
        <div className="h-12 bg-gradient-to-r from-emerald-400 to-green-500 flex items-center justify-center">
          <div className="text-white text-xs font-medium">
            {t('hero.phone.plants')} • 9:41
          </div>
        </div>
        
        {/* Content */}
        <div className="p-4 h-full">
          {/* Header */}
          <div className="text-center mb-4">
            <h4 className="text-lg font-bold text-gray-800">My Bud</h4>
            <p className="text-sm text-gray-500">{t('hero.phone.subtitle')}</p>
          </div>
          
          {/* Today's Tasks */}
          <div className="mb-4">
            <h5 className="text-sm font-semibold text-gray-700 mb-2">
              {t('hero.phone.todayTasks')}
            </h5>
            <div className="bg-blue-50 rounded-lg p-3">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
                <span className="text-xs text-gray-600">
                  {t('hero.phone.watering')}
                </span>
              </div>
            </div>
          </div>
          
          {/* Your Plants */}
          <div className="mb-4">
            <h5 className="text-sm font-semibold text-gray-700 mb-2">
              {t('hero.phone.yourPlants')}
            </h5>
            <div className="space-y-2">
              <div className="bg-green-50 rounded-lg p-2 flex justify-between items-center">
                <span className="text-xs font-medium text-green-800">
                  {t('hero.phone.plantA')}
                </span>
                <span className="text-xs text-green-600">{t('hero.phone.week3')}</span>
              </div>
              <div className="bg-green-50 rounded-lg p-2 flex justify-between items-center">
                <span className="text-xs font-medium text-green-800">
                  {t('hero.phone.plantB')}
                </span>
                <span className="text-xs text-green-600">{t('hero.phone.week8')}</span>
              </div>
            </div>
          </div>
          
          {/* Quick Note */}
          <div>
            <h5 className="text-sm font-semibold text-gray-700 mb-2">
              {t('hero.phone.quickNote')}
            </h5>
            <div className="bg-gray-50 rounded-lg p-3 border-2 border-dashed border-gray-200">
              <span className="text-xs text-gray-400">
                {t('hero.phone.addNote')}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white bg-opacity-40 rounded-full"></div>
    </div>
  );
};

const OrganicBackground: FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Bubbles */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full floating" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-white bg-opacity-5 rounded-full floating" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-white bg-opacity-10 rounded-full floating" style={{ animationDelay: '4s' }}></div>
      
      {/* Grow Elements */}
      <div className="absolute top-32 right-10 w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-32 w-1 h-1 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-60 left-32 w-3 h-3 bg-green-200 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Organic Lights */}
      <div className="absolute top-20 right-40 w-40 h-40 bg-gradient-radial from-green-200 to-transparent opacity-20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-40 w-60 h-60 bg-gradient-radial from-emerald-200 to-transparent opacity-15 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
      
      {/* Leaf Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-1/4 w-8 h-8">
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-green-300">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5 17,8Z"/>
          </svg>
        </div>
        <div className="absolute top-40 right-1/4 w-6 h-6">
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-green-400">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5 17,8Z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

const scrollToBetaForm = () => {
  const betaForm = document.getElementById('beta-form');
  if (betaForm) {
    betaForm.scrollIntoView({ behavior: 'smooth' });
  }
};

const scrollToFeatures = () => {
  const features = document.getElementById('features');
  if (features) {
    features.scrollIntoView({ behavior: 'smooth' });
  }
};

const Hero: FC<HeroProps> = ({ onCTAClick }) => {
  const { currentLanguage } = useLanguage();

  return (
    <section className="hero-organic min-h-screen flex items-center justify-center relative overflow-hidden">
      <OrganicBackground />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
              <span className="block text-white animate__animated animate__fadeInUp">
                {t('hero.title1')}
              </span>
              <span className="block text-white animate__animated animate__fadeInUp" style={{ animationDelay: '0.2s' }}>
                {t('hero.title2')}
              </span>
              <span className="block text-white animate__animated animate__fadeInUp" style={{ animationDelay: '0.4s' }}>
                {t('hero.title3')}
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed animate__animated animate__fadeInUp" style={{ animationDelay: '0.6s' }}>
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate__animated animate__fadeInUp" style={{ animationDelay: '0.8s' }}>
              <button
                onClick={scrollToBetaForm}
                className="cta-button px-8 py-4 text-lg font-medium"
              >
                {t('hero.primaryCta')}
              </button>
              <button
                onClick={scrollToFeatures}
                className="secondary-button px-8 py-4 text-lg font-medium"
              >
                {t('hero.secondaryCta')}
              </button>
            </div>
            
            <p className="text-sm text-white/70 mt-6 animate__animated animate__fadeInUp" style={{ animationDelay: '1s' }}>
              {t('hero.trustElement')}
            </p>
          </div>
          
          {/* iPhone Mockup */}
          <div className="flex justify-center lg:justify-end animate__animated animate__fadeInRight" style={{ animationDelay: '0.4s' }}>
            <IPhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;