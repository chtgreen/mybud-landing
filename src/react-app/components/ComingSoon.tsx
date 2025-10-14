import type { FC } from 'react';
import posthog from 'posthog-js';
import { t } from '../lib/i18n';

const ComingSoon: FC = () => {
  const trackAppStoreInterest = (platform: 'ios' | 'android') => {
    if (typeof posthog !== 'undefined') {
      posthog.capture('app_store_interest', {
        platform,
      });
    }
  };

  return (
    <section className="py-16 hero-organic">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-2xl md:text-3xl font-light mb-6 text-white">
          {t('comingSoon.title')}
        </h2>
        <p className="text-lg leading-relaxed mb-10 text-white/80">
          {t('comingSoon.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a
            href="#"
            onClick={() => trackAppStoreInterest('ios')}
            className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm px-6 py-4 rounded-2xl text-white hover:bg-white/30 transition-all duration-300 border border-white/20 min-w-[200px]"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <div className="text-xs opacity-80">
                {t('comingSoon.iosText').split(' ').slice(0, 2).join(' ')}
              </div>
              <div className="font-medium">
                {t('comingSoon.iosText').split(' ').slice(2).join(' ')}
              </div>
            </div>
          </a>

          <a
            href="#"
            onClick={() => trackAppStoreInterest('android')}
            className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm px-6 py-4 rounded-2xl text-white hover:bg-white/30 transition-all duration-300 border border-white/20 min-w-[200px]"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            <div className="text-left">
              <div className="text-xs opacity-80">
                {t('comingSoon.androidText').split(' ').slice(0, 2).join(' ')}
              </div>
              <div className="font-medium">
                {t('comingSoon.androidText').split(' ').slice(2).join(' ')}
              </div>
            </div>
          </a>
        </div>

        <p className="text-sm text-white/60">
          {t('comingSoon.ctaText')}
        </p>
      </div>
    </section>
  );
};

export default ComingSoon;