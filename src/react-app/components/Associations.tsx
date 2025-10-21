import type { FC } from 'react';
import { t } from '../lib/i18n';

interface AssociationsProps {
  background?: 'white' | 'gray';
  onCTAClick?: () => void;
}

const Associations: FC<AssociationsProps> = ({ background = 'gray', onCTAClick }) => {
  const bgClass = background === 'white' ? 'bg-white' : 'bg-gray-50';

  return (
    <section id="associations" className={`py-20 ${bgClass}`}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 
            className="text-2xl md:text-3xl font-medium mb-6"
            style={{ color: 'var(--text-zinc-800)' }}
          >
            {t('associationsSection.title')}
          </h2>
          <h3 className="text-lg font-medium mb-4" style={{ color: 'var(--text-zinc-700)' }}>
            {t('associationsSection.subtitle')}
          </h3>
          <p 
            className="text-lg leading-relaxed max-w-3xl mx-auto"
            style={{ color: 'var(--text-zinc-600)' }}
          >
            {t('associationsSection.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {/* Gestão */}
          <div className="card text-center">
            <div className="p-3 rounded-lg inline-flex mb-4 bg-emerald-100">
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
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
            </div>
            <h3 
              className="font-medium mb-2"
              style={{ color: 'var(--text-zinc-800)' }}
            >
              {t('associationsSection.features.management.title')}
            </h3>
            <p className="text-sm text-zinc-600">
              {t('associationsSection.features.management.desc')}
            </p>
          </div>

          {/* Reports */}
          <div className="card text-center">
            <div className="p-3 rounded-lg inline-flex mb-4 bg-emerald-100">
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
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                />
              </svg>
            </div>
            <h3 
              className="font-medium mb-2"
              style={{ color: 'var(--text-zinc-800)' }}
            >
              {t('associationsSection.features.reports.title')}
            </h3>
            <p className="text-sm text-zinc-600">
              {t('associationsSection.features.reports.desc')}
            </p>
          </div>

          {/* Rastreabilidade */}
          <div className="card text-center">
            <div className="p-3 rounded-lg inline-flex mb-4 bg-emerald-100">
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
                  d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75H16.5v-.75zM13.5 13.5h4.5v4.5h-4.5v-4.5z"
                />
              </svg>
            </div>
            <h3 
              className="font-medium mb-2"
              style={{ color: 'var(--text-zinc-800)' }}
            >
              {t('associationsSection.features.traceability.title')}
            </h3>
            <p className="text-sm text-zinc-600">
              {t('associationsSection.features.traceability.desc')}
            </p>
          </div>

          {/* Integração */}
          <div className="card text-center">
            <div className="p-3 rounded-lg inline-flex mb-4 bg-emerald-100">
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
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
            </div>
            <h3 
              className="font-medium mb-2"
              style={{ color: 'var(--text-zinc-800)' }}
            >
              {t('associationsSection.features.integration.title')}
            </h3>
            <p className="text-sm text-zinc-600">
              {t('associationsSection.features.integration.desc')}
            </p>
          </div>

          {/* Inteligência */}
          <div className="card text-center">
            <div className="p-3 rounded-lg inline-flex mb-4 bg-emerald-100">
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
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </div>
            <h3 
              className="font-medium mb-2"
              style={{ color: 'var(--text-zinc-800)' }}
            >
              {t('associationsSection.features.intelligence.title')}
            </h3>
            <p className="text-sm text-zinc-600">
              {t('associationsSection.features.intelligence.desc')}
            </p>
          </div>
        </div>

        {/* Testimonial */}
        {t('associationsSection.testimonial.text') && 
         t('associationsSection.testimonial.text') !== 'associationsSection.testimonial.text' && 
         t('associationsSection.testimonial.text').trim() !== '' && (
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 mb-10 border border-emerald-200">
            <p className="text-lg italic text-gray-800 mb-4 text-center">
              "{t('associationsSection.testimonial.text')}"
            </p>
            <p className="text-sm text-gray-600 text-center">
              — <span className="font-medium">{t('associationsSection.testimonial.author')}</span>, {t('associationsSection.testimonial.role')}
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center">
          <button
            type="button"
            className="btn-primary text-lg py-4 px-8 flex items-center justify-center gap-2 mx-auto"
            onClick={onCTAClick}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5a2.25 2.25 0 002.25-2.25m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5a2.25 2.25 0 002.25 2.25v7.5m-5.25-12V6m-3 0v3"
              />
            </svg>
            {t('associationsSection.cta')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Associations; 
