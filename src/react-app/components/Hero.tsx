import type { FC, ReactNode } from 'react';
import { useState, useEffect, Fragment } from 'react';
import { t, isB2B, tArray } from '../lib/i18n';
import DashboardWidget from './DashboardWidget';


interface HeroProps {
  onCTAClick: () => void;
  showSecondaryCta?: boolean;
  remainingKits?: number;
  // Remove onGrowthProgress prop since we don't need header updates anymore
}

// Provide a generic container used by HeroLayout for theming
export const HeroContainer: FC<{ theme: 'emerald' | 'white'; children: ReactNode }> = ({ theme, children }) => {
  const isWhite = theme === 'white';
  return (
    <section className={`min-h-screen max-h-[1200px] relative ${isWhite ? 'bg-white hero-b2b' : 'hero-organic'} flex items-center`}>
      {children}
    </section>
  );
};

const IPhoneMockup: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  
  // Check if video mode is enabled via query parameter
  const searchParams = new URLSearchParams(window.location.search);
  const showVideo = searchParams.get('video') === 'true';
  
  // Screenshots array - add more screenshots here as needed
  const screenshots = [
    '/Screenshot_1760407521.png',
    // Add more screenshot paths here when available
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const handlePlayClick = () => {
    setIsLoading(true);
  };

  // Auto-advance carousel every 3 seconds if there are multiple screenshots
  useEffect(() => {
    if (!showVideo && screenshots.length > 1) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }
  }, [showVideo, screenshots.length]);

  return (
    <div className="relative w-full max-w-[180px] sm:max-w-[220px] lg:max-w-[280px] xl:max-w-xs mx-auto">
      {/* iPhone Frame for Screenshots - More Vertical */}
      <div 
        className="iphone-frame relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-2 shadow-2xl"
        style={{
          boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4), inset 0 2px 6px rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Dynamic Island */}
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-20 h-5 bg-black rounded-full z-20"></div>

        {/* Video/Screenshot Container - More Vertical Aspect */}
        <div className="relative bg-black w-full aspect-[9/19.5] overflow-hidden rounded-[2rem] shadow-inner">
          
          {showVideo ? (
            /* Video Player Mode - Activated with ?video=true */
            <>
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
            </>
          ) : (
            /* Screenshot Carousel Mode - Default */
            <div className="relative w-full h-full">
              {screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={screenshot}
                    alt={`App screenshot ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

              {/* Navigation arrows - only show if multiple screenshots */}
              {screenshots.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors z-10"
                    aria-label="Previous screenshot"
                  >
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors z-10"
                    aria-label="Next screenshot"
                  >
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Dots indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-10">
                    {screenshots.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          index === currentSlide 
                            ? 'bg-emerald-400 w-4' 
                            : 'bg-white/40 hover:bg-white/60'
                        }`}
                        aria-label={`Go to screenshot ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
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

const scrollToB2BForm = () => {
  const form = document.getElementById('b2b-lead-form');
  if (form) {
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const Hero: FC<HeroProps> = ({ onCTAClick, showSecondaryCta = true, remainingKits = 47 }) => {
  // Detect if we're in B2B context
  const isB2BContext = isB2B();
  const heroTitleLines = ['title1', 'title2', 'title3']
    .map((key) => {
      const text = t(`hero.${key}`);
      return {
        key,
        text,
        isFallback: text === `hero.${key}`,
      };
    })
    .filter(({ text, isFallback }) => text && !isFallback);
  const b2bHighlights = isB2BContext ? tArray('hero.graphHighlights') : [];

  return (
    <section className={`min-h-screen max-h-[1200px] relative ${isB2BContext ? 'bg-white hero-b2b' : 'hero-organic'} flex items-center`}>
      {!isB2BContext && <OrganicBackground />}
      {isB2BContext && <B2BBackground />}
      
      <div className="py-12 md:py-16 lg:py-20 xl:py-24 relative z-10 min-h-[80vh] lg:min-h-[70vh] xl:min-h-[65vh] flex items-center w-full">
        <div className="container mx-auto px-6 max-w-7xl w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16 w-full">
            <div className="lg:w-1/2 text-center lg:text-left">
              {isB2BContext && t('hero.overline') && (
                <div className="inline-flex items-center space-x-2 bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium mb-4 border border-gray-200 tracking-wider uppercase hero-animate-1">
                  <span>{t('hero.overline')}</span>
                </div>
              )}
              <h1 
                className={`mt-16 md:mt-0 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 uppercase ${isB2BContext ? 'text-gray-900 hero-animate-2' : 'text-white hero-animate-2'}`}
                style={!isB2BContext ? { 
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
                  fontFamily: '"Schabo Condensed", "Bebas Neue", "Impact", sans-serif',
                  letterSpacing: '0.01em',
                  lineHeight: '1.1',
                  fontWeight: 'normal',
                  fontStretch: 'condensed'
                } : {
                  fontFamily: '"Schabo Condensed", "Bebas Neue", "Impact", sans-serif',
                  letterSpacing: '0.01em',
                  lineHeight: '1.1',
                  fontWeight: 'normal',
                  fontStretch: 'condensed'
                }}
              >
                {heroTitleLines.map(({ key, text }, index) => (
                  <Fragment key={key}>
                    <span className={index === heroTitleLines.length - 1 ? 'hero-title-3' : undefined}>
                      {text}
                    </span>
                    {index !== heroTitleLines.length - 1 && <br />}
                  </Fragment>
                ))}
              </h1>
              <p 
                className={`text-lg mb-10 max-w-xl mx-auto lg:mx-0 hero-animate-3 ${isB2BContext ? 'text-gray-700' : 'text-emerald-100'}`}
                style={!isB2BContext ? { textShadow: '0 1px 5px rgba(0, 0, 0, 0.2)' } : {}}
              >
                {t('hero.subtitle')}
              </p>

              {isB2BContext && b2bHighlights.length > 0 && (
                <ul className="hero-animate-4 mb-8 space-y-2 text-left max-w-xl mx-auto lg:mx-0">
                  {b2bHighlights.map((highlight, index) => (
                    <li key={`${highlight}-${index}`} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[var(--verde-bud)]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 hero-animate-5">
                <button
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold bg-[#eb4c80] text-white hover:bg-[#d13a6a] transition-colors border-0"
                  onClick={isB2BContext ? scrollToB2BForm : onCTAClick}
                >
                  <span>{t('hero.primaryCta')}</span>
                </button>
                {showSecondaryCta && t('hero.secondaryCta') !== 'hero.secondaryCta' && (
                  <>
                    {t('hero.secondaryCta').includes('media kit') ? (
                      <a
                        href="mailto:comercial@mybud.app"
                        className={isB2BContext ? 
                          "inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-medium bg-white border border-gray-300 text-gray-800 hover:text-gray-900 transition-colors" :
                          "inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-medium text-white/90 hover:text-white/100 transition-colors border border-white/30/0"
                        }
                      >
                        <span>{t('hero.secondaryCta')}</span>
                      </a>
                    ) : (
                      <button
                        className={isB2BContext ? 
                          "inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-medium bg-white border border-gray-300 text-gray-800 hover:text-gray-900 transition-colors" :
                          "inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-medium text-white/90 hover:text-white/100 transition-colors border border-white/30/0"
                        }
                        onClick={isB2BContext ? onCTAClick : scrollToFeatures}
                      >
                        <span>{t('hero.secondaryCta')}</span>
                      </button>
                    )}
                  </>
                )}
              </div>

              {/* Trust Element / Microcopy */}
              <p 
                className={`text-sm mb-4 ${isB2BContext ? 'hero-animate-6 text-gray-600' : 'hero-animate-5 text-emerald-100'}`}
                style={!isB2BContext ? { textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)' } : {}}
              >
                {t('hero.trustElement')}
              </p>

              {/* Counter and Badges for B2C */}
              {!isB2BContext && (
                <div className="space-y-3 hero-animate-6">
                  {/* Counter */}
                  {t('hero.counter') && (
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-white/85 text-[#288664] border border-white/50 shadow-[0_12px_30px_rgba(12,83,49,0.15)] backdrop-blur-sm">
                      <svg className="w-4 h-4 text-[#288664]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span>{t('hero.counter').replace('{count}', remainingKits.toString())}</span>
                    </div>
                  )}

                  {/* Badges */}
                  {t('hero.badges') && (
                    <div className="text-sm text-emerald-100 flex items-center gap-2 justify-center lg:justify-start">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)' }}>{t('hero.badges')}</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="lg:w-1/2 relative app-animate flex items-center justify-center">
              {/* Grafismo suave orgânico atrás do celular */}
              {!isB2BContext && (
                <div 
                  className="absolute opacity-90 -z-10"
                  style={{
                    left: '-30%',
                    top: '50%',
                    width: '170%',
                    height: '170%',
                    transform: 'translateY(-50%) scaleX(1.3) rotate(-15deg)',
                    transformOrigin: 'center'
                  }}
                >
                  <svg className="w-full h-full" viewBox="0 0 349.643 341.112" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                    <path 
                      fill="#ECFDF5" 
                      fillRule="nonzero" 
                      d="M 239.4375 170.554688 C 253.699219 157.519531 264.015625 140.238281 268.355469 120.699219 C 270.953125 109.007812 263.703125 97.394531 252.078125 94.492188 C 234.640625 90.136719 206.53125 87.234375 174.820312 87.234375 C 143.113281 87.234375 115.003906 90.136719 97.5625 94.492188 C 85.941406 97.394531 78.691406 109.007812 81.285156 120.699219 C 85.625 140.238281 95.945312 157.519531 110.203125 170.554688 C 95.945312 183.59375 85.625 200.871094 81.285156 220.410156 C 78.691406 232.105469 85.941406 243.714844 97.5625 246.617188 C 115.003906 250.976562 143.113281 253.878906 174.820312 253.878906 C 206.53125 253.878906 234.640625 250.976562 252.078125 246.617188 C 263.703125 243.714844 270.953125 232.105469 268.355469 220.410156 C 264.015625 200.871094 253.699219 183.59375 239.4375 170.554688"
                    />
                  </svg>
                </div>
              )}
              
              {isB2BContext ? <DashboardWidget variant="hero" /> : <IPhoneMockup />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
