import type { FC } from 'react';
import { t } from '../lib/i18n';

interface SocialProofProps {
  background?: 'white' | 'gray';
  onCTAClick?: () => void;
}

const SocialProof: FC<SocialProofProps> = ({ background = 'white', onCTAClick }) => {
  const bgClass = background === 'white' ? 'bg-white' : 'bg-gray-50';

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      titleKey: 'socialProof.features.validation.title',
      descKey: 'socialProof.features.validation.desc'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
      titleKey: 'socialProof.features.influencers.title',
      descKey: 'socialProof.features.influencers.desc'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
      titleKey: 'socialProof.features.cases.title',
      descKey: 'socialProof.features.cases.desc'
    }
  ];

  return (
    <section className={`py-20 ${bgClass} organic-background`}>
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            {t('socialProof.title')}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('socialProof.description')}
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {features.map((feature, idx) => (
            <div key={idx} className="card text-center">
              <div className="p-3 rounded-lg inline-flex mb-4 bg-emerald-100">
                <div className="text-emerald-600">
                  {feature.icon}
                </div>
              </div>
              <h3 className="font-medium mb-2 text-zinc-800">
                {t(feature.titleKey)}
              </h3>
              <p className="text-sm text-zinc-600">
                {t(feature.descKey)}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={onCTAClick}
            className="inline-flex items-center justify-center rounded-xl px-8 py-4 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
          >
            {t('socialProof.cta')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;


