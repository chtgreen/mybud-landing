import type { FC } from 'react';
import { useState } from 'react';
import { t } from '../lib/i18n';

interface DemoSectionProps {
  background?: 'white' | 'gray';
  onJoinBeta?: () => void;
}

const DemoSection: FC<DemoSectionProps> = ({ background = 'white', onJoinBeta }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoWatched, setVideoWatched] = useState(false);
  const bgClass = background === 'gray' ? 'bg-gray-50' : 'bg-white';

  const handlePlayDemo = () => {
    setShowVideo(true);
    // After 3 minutes (180000ms), show the join beta button
    setTimeout(() => {
      setVideoWatched(true);
    }, 180000);
  };

  return (
    <section id="demo" className={`py-16 md:py-24 ${bgClass}`}>
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Title and Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('demo.title')}
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            {t('demo.subtitle')}
          </p>
        </div>

        {/* Video Container */}
        <div className="relative">
          {!showVideo ? (
            /* Thumbnail with Play Button */
            <div className="relative aspect-video bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl shadow-2xl overflow-hidden cursor-pointer group" onClick={handlePlayDemo}>
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300 shadow-xl">
                    <svg 
                      className="w-10 h-10 md:w-12 md:h-12 text-emerald-600 ml-1" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  {/* Pulsing rings */}
                  <div className="absolute inset-0 rounded-full border-4 border-white/40 animate-ping"></div>
                  <div className="absolute inset-0 rounded-full border-4 border-white/20 animate-ping" style={{ animationDelay: '500ms' }}></div>
                </div>
              </div>

              {/* Demo Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                  Demo completa do mybud
                </h3>
                <p className="text-white/90 text-sm md:text-base">
                  15 minutos de puro conteúdo
                </p>
              </div>
            </div>
          ) : (
            /* Video Player Placeholder */
            <div className="aspect-video bg-black rounded-2xl shadow-2xl overflow-hidden">
              {/* Replace with actual video embed when available */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
                <div className="text-center text-white p-8">
                  <svg className="w-16 h-16 mx-auto mb-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <p className="text-lg">Carregando vídeo...</p>
                  <p className="text-sm text-gray-400 mt-2">O vídeo será incorporado aqui</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA After Watching */}
        {videoWatched && (
          <div className="mt-8 text-center animate-fadeInUp">
            <div className="bg-[#F9C9DE]/30 border-2 border-[#eb4c80]/50 rounded-xl p-6 inline-block">
              <p className="text-lg font-semibold text-gray-900 mb-4">
                {t('demo.afterWatching')}
              </p>
              <button
                onClick={onJoinBeta}
                className="inline-flex items-center justify-center rounded-xl px-8 py-3 text-base font-semibold bg-[#eb4c80] text-white hover:bg-[#d13a6a] transition-colors"
              >
                <span>Entre no beta gratuito</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* CTA Button */}
        {!showVideo && (
          <div className="text-center mt-8">
            <button
              onClick={handlePlayDemo}
              className="inline-flex items-center justify-center rounded-xl px-8 py-4 text-lg font-semibold bg-[#eb4c80] text-white hover:bg-[#d13a6a] transition-colors"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              <span>{t('demo.cta')}</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default DemoSection;

