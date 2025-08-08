import type { FC } from 'react';
import { useState } from 'react';
import { t, hasContentOverride } from '../lib/i18n';
import HeroBridge from './HeroBridge';


interface HeroProps {
  onCTAClick: () => void;
  // Remove onGrowthProgress prop since we don't need header updates anymore
}

const IPhoneMockup: FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePlayClick = () => {
    setIsLoading(true);
  };

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
          {!isLoading ? (
            /* Play Button State */
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center cursor-pointer group" onClick={handlePlayClick}>
              <div className="relative">
                {/* Play button circle */}
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300 border border-white/20">
                  {/* Play icon */}
                  <svg 
                    className="w-6 h-6 text-white ml-1" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                
                {/* Pulsing rings around play button */}
                <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping"></div>
                <div className="absolute inset-0 rounded-full border-2 border-white/10 animate-ping" style={{ animationDelay: '500ms' }}></div>
              </div>
            </div>
          ) : (
            /* Loading Spinner State */
            <div className="absolute inset-0 bg-black flex flex-col items-center justify-center gap-4">
              {/* Pulsing rings */}
              <div className="relative">
                <span className="absolute inset-0 rounded-full border-2 border-emerald-500/30 animate-ping"></span>
                <span className="absolute inset-0 rounded-full border-2 border-emerald-500/20 animate-ping" style={{ animationDelay: '200ms' }}></span>
                <div className="w-14 h-14 rounded-full border-4 border-emerald-500 border-t-transparent animate-spin"></div>
              </div>
              <div className="text-xs font-medium text-emerald-100/90 tracking-wide">
                {t('common.preparing') || 'Preparando o vídeo...'}
              </div>
            </div>
          )}
        </div>

        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white bg-opacity-40 rounded-full"></div>
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

const B2BBackground: FC = () => {
  return (
    <div className="absolute inset-0">
      {/* Reduced B2B Background Elements - Only 6 instead of 14 */}
      <div className="b2b-background-element b2b-element-primary" style={{ top: '15%', left: '10%', width: '180px', height: '180px' }}></div>
      <div className="b2b-background-element b2b-element-secondary" style={{ top: '25%', right: '15%', width: '120px', height: '120px' }}></div>
      <div className="b2b-background-element b2b-element-dark" style={{ bottom: '20%', left: '25%', width: '150px', height: '150px' }}></div>
      <div className="b2b-background-element b2b-element-primary" style={{ bottom: '30%', right: '10%', width: '200px', height: '200px' }}></div>
      <div className="b2b-background-element b2b-element-dark" style={{ top: '60%', left: '70%', width: '140px', height: '140px' }}></div>
      <div className="b2b-background-element b2b-element-secondary" style={{ bottom: '60%', right: '50%', width: '160px', height: '160px' }}></div>

      {/* Enhanced B2B Leaf Pattern */}
      <div className="b2b-leaf-pattern"></div>
      
      {/* Floating Green Particles */}
      <div className="b2b-particles"></div>
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
  // Detect if we're in B2B context
  const isB2B = hasContentOverride();

  return (
    <section className={`min-h-screen max-h-[1200px] relative ${isB2B ? 'bg-white hero-b2b' : 'hero-organic'} flex items-center`}>
      {!isB2B && <OrganicBackground />}
      {isB2B && <B2BBackground />}
      
      <div className="py-12 md:py-16 lg:py-20 xl:py-24 relative z-20 min-h-[80vh] lg:min-h-[70vh] xl:min-h-[65vh] flex items-center w-full">
        <div className="container mx-auto px-6 max-w-7xl w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16 w-full">
            <div className="lg:w-1/2 text-center lg:text-left">
              {isB2B && t('hero.overline') && (
                <div className="inline-flex items-center space-x-2 bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium mb-4 border border-gray-200 tracking-wider uppercase hero-animate-1">
                  <span>{t('hero.overline')}</span>
                </div>
              )}
              <h1 
                className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${isB2B ? 'text-gray-900 hero-animate-2' : 'text-white hero-animate-2'}`}
                style={!isB2B ? { textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' } : {}}
              >
                <span>{t('hero.title1')}</span><br />
                <span>{t('hero.title2')}</span><br />
                <span className="hero-title-3">{t('hero.title3')}</span>
              </h1>
              <p 
                className={`text-lg mb-10 max-w-xl mx-auto lg:mx-0 hero-animate-3 ${isB2B ? 'text-gray-700' : 'text-emerald-100'}`}
                style={!isB2B ? { textShadow: '0 1px 5px rgba(0, 0, 0, 0.2)' } : {}}
              >
                {t('hero.subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 hero-animate-4">
                <button
                  className={isB2B ? 
                    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold bg-emerald-700 text-white hover:bg-emerald-800 transition-colors shadow-none border-0" :
                    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-medium bg-white/90 text-gray-900 border border-white/50 hover:bg-white/95 hover:text-gray-800 transition-colors shadow-lg"
                  }
                  onClick={onCTAClick}
                >
                  <span>{t('hero.primaryCta')}</span>
                </button>
                {t('hero.secondaryCta') !== 'hero.secondaryCta' && (
                  <>
                    {t('hero.secondaryCta').includes('media kit') ? (
                      <a
                        href="mailto:comercial@mybud.app"
                        className={isB2B ? 
                          "inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-medium bg-white border border-gray-300 text-gray-800 hover:text-gray-900 transition-colors" :
                          "inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-medium text-white/90 hover:text-white/100 transition-colors border border-white/30/0"
                        }
                      >
                        <span>{t('hero.secondaryCta')}</span>
                      </a>
                    ) : (
                      <button
                        className={isB2B ? 
                          "inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-medium bg-white border border-gray-300 text-gray-800 hover:text-gray-900 transition-colors" :
                          "inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-medium text-white/90 hover:text-white/100 transition-colors border border-white/30/0"
                        }
                        onClick={scrollToFeatures}
                      >
                        <span>{t('hero.secondaryCta')}</span>
                      </button>
                    )}
                  </>
                )}
              </div>

              <p 
                className={`text-sm hero-animate-5 ${isB2B ? 'text-gray-600' : 'text-emerald-100'}`}
                style={!isB2B ? { textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)' } : {}}
              >
                {t('hero.trustElement')}
              </p>
            </div>

            <div className="lg:w-1/2 relative app-animate flex items-center justify-center">
              {isB2B ? <HeroBridge /> : <IPhoneMockup />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;