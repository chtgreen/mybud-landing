import type { FC } from 'react';
import { t } from '../lib/i18n';


interface HeroProps {
  onCTAClick: () => void;
}

const IPhoneMockup: FC = () => {
  return (
    <div className="relative w-full max-w-[180px] sm:max-w-[220px] lg:max-w-[280px] xl:max-w-xs mx-auto">
      {/* iPhone Frame for Video - More Vertical */}
      <div 
        className="iphone-frame relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-2 shadow-2xl"
        style={{
          boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4), inset 0 2px 6px rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Dynamic Island */}
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-20 h-5 bg-black rounded-full z-20"></div>

        {/* Video Container - More Vertical Aspect */}
        <div className="relative bg-black w-full aspect-[9/19.5] overflow-hidden rounded-[2rem] shadow-inner">
          {/* Video Placeholder / Future Video Element */}
          <div className="absolute inset-0 bg-white video-container">
            {/* Status Bar (iOS-style) */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-white z-10 flex items-center justify-between px-3 text-black text-xs font-medium">
              <span>{t('hero.phone.plants')} • 9:41</span>
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

            {/* App Content (Video Preview) */}
            <div className="pt-8 h-full">
              {/* Header */}
              <div className="p-3 relative">
                <div className="text-center">
                  <h2 className="text-emerald-700 text-base font-semibold mb-1">
                    {t('hero.phone.plants')}
                  </h2>
                  <p className="text-emerald-600 text-xs">
                    {t('hero.phone.subtitle')}
                  </p>
                </div>
              </div>
              
              {/* App content */}
              <div className="px-3 pb-3 space-y-2">
                {/* Today's tasks */}
                <div className="bg-emerald-50 p-2 rounded-lg border border-emerald-200">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-emerald-800 font-medium text-xs">
                      {t('hero.phone.todayTasks')}
                    </h3>
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                  </div>
                  <p className="text-emerald-700 text-xs mb-2">
                    {t('hero.phone.watering')}
                  </p>
                  <div className="flex space-x-1.5">
                    <div className="w-6 h-6 bg-emerald-200 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    </div>
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-sm"></div>
                    </div>
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-sm"></div>
                    </div>
                  </div>
                </div>

                {/* Plants */}
                <div className="bg-gray-50 p-2 rounded-lg border border-gray-200">
                  <h3 className="text-gray-700 font-medium text-xs mb-2">
                    {t('hero.phone.yourPlants')}
                  </h3>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 bg-emerald-200 rounded-lg mx-auto mb-1.5 flex items-center justify-center">
                        <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
                      </div>
                      <div className="text-center">
                        <p className="text-xs font-medium">{t('hero.phone.plantA')}</p>
                        <span className="text-xs text-emerald-600">{t('hero.phone.week3')}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 bg-green-200 rounded-lg mx-auto mb-1.5 flex items-center justify-center">
                        <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                      </div>
                      <div className="text-center">
                        <p className="text-xs font-medium">{t('hero.phone.plantB')}</p>
                        <span className="text-xs text-emerald-600">{t('hero.phone.week8')}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Note */}
                <div className="bg-gradient-to-r from-emerald-100 to-green-100 p-2 rounded-lg border border-emerald-300">
                  <h3 className="text-emerald-800 font-medium text-xs mb-1">
                    {t('hero.phone.quickNote')}
                  </h3>
                  <p className="text-emerald-700 text-xs">
                    {t('hero.phone.addNote')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OrganicBackground: FC = () => {
  return (
    <div className="absolute inset-0">
      {/* Organic Bubbles - Like cannabis resin or plant cells */}
      <div className="organic-bubble" style={{ top: '15%', left: '10%', width: '120px', height: '120px' }}></div>
      <div className="organic-bubble" style={{ top: '25%', right: '15%', width: '80px', height: '80px' }}></div>
      <div className="organic-bubble" style={{ bottom: '30%', left: '20%', width: '100px', height: '100px' }}></div>
      <div className="organic-bubble" style={{ bottom: '15%', right: '25%', width: '150px', height: '150px' }}></div>
      <div className="organic-bubble" style={{ top: '45%', left: '50%', width: '60px', height: '60px' }}></div>
      <div className="organic-bubble" style={{ top: '60%', right: '40%', width: '90px', height: '90px' }}></div>
      <div className="organic-bubble" style={{ bottom: '50%', left: '70%', width: '70px', height: '70px' }}></div>
      <div className="organic-bubble" style={{ top: '35%', left: '75%', width: '110px', height: '110px' }}></div>

      {/* Cannabis-inspired organic shapes */}
      <div className="grow-element" style={{ top: '20%', left: '5%', width: '200px', height: '150px' }}></div>
      <div className="grow-element" style={{ bottom: '25%', right: '10%', width: '250px', height: '180px' }}></div>
      <div className="grow-element" style={{ top: '50%', right: '5%', width: '180px', height: '220px' }}></div>
      <div className="grow-element" style={{ bottom: '45%', left: '15%', width: '160px', height: '200px' }}></div>

      {/* Professional grow lights ambiance */}
      <div className="grow-lights" style={{ top: '10%', left: '30%', width: '300px', height: '200px' }}></div>
      <div className="grow-lights" style={{ bottom: '20%', right: '30%', width: '350px', height: '250px' }}></div>
      <div className="grow-lights" style={{ top: '40%', left: '60%', width: '200px', height: '150px' }}></div>

      {/* Expertise indicators - showing we know what we're doing */}
      <div className="expertise-indicator" style={{ top: '20%', left: '25%', animationDelay: '0s' }}></div>
      <div className="expertise-indicator" style={{ top: '30%', right: '30%', animationDelay: '1s' }}></div>
      <div className="expertise-indicator" style={{ bottom: '35%', left: '35%', animationDelay: '2s' }}></div>
      <div className="expertise-indicator" style={{ bottom: '25%', right: '20%', animationDelay: '3s' }}></div>
      <div className="expertise-indicator" style={{ top: '55%', left: '15%', animationDelay: '1.5s' }}></div>
      <div className="expertise-indicator" style={{ top: '65%', right: '45%', animationDelay: '2.5s' }}></div>

      {/* Subtle leaf pattern overlay */}
      <div className="leaf-pattern"></div>
    </div>
  );
};



const scrollToFeatures = () => {
  const features = document.getElementById('features');
  if (features) {
    features.scrollIntoView({ behavior: 'smooth' });
  }
};

const Hero: FC<HeroProps> = ({ onCTAClick }) => {

  return (
    <section className="min-h-screen max-h-[1200px] relative hero-organic flex items-center">
      <OrganicBackground />
      
      <div className="py-12 md:py-16 lg:py-20 xl:py-24 relative z-20 min-h-[80vh] lg:min-h-[70vh] xl:min-h-[65vh] flex items-center w-full">
        <div className="container mx-auto px-6 max-w-7xl w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16 w-full">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white"
                style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}
              >
                <span>{t('hero.title1')}</span><br />
                <span>{t('hero.title2')}</span><br />
                <span className="hero-title-3">{t('hero.title3')}</span>
              </h1>
              <p 
                className="text-lg text-emerald-100 mb-10 max-w-xl mx-auto lg:mx-0"
                style={{ textShadow: '0 1px 5px rgba(0, 0, 0, 0.2)' }}
              >
                {t('hero.subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <button
                  className="cta-button font-semibold py-4 px-8 text-lg"
                  onClick={onCTAClick}
                >
                  <i className="fas fa-seedling mr-2"></i>
                  <span>{t('hero.primaryCta')}</span>
                </button>
                <button
                  className="secondary-button font-semibold py-4 px-8 text-lg"
                  onClick={scrollToFeatures}
                >
                  <i className="fas fa-play-circle mr-2"></i>
                  <span>{t('hero.secondaryCta')}</span>
                </button>
              </div>
              
              <p 
                className="text-sm text-emerald-100"
                style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)' }}
              >
                {t('hero.trustElement')}
              </p>
            </div>

            <div className="lg:w-1/2 relative app-animate flex items-center justify-center">
              <IPhoneMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;