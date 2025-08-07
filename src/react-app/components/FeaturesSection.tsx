import type { FC } from 'react';
import { t } from '../lib/i18n';

const FeaturesSection: FC = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2
            className="text-2xl md:text-3xl font-medium mb-6"
            style={{ color: 'var(--text-zinc-800)' }}
            id="features-title"
          >
            {t('features.title')}
          </h2>
          <p
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: 'var(--text-zinc-600)' }}
            id="features-subtitle"
          >
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Funciona do seu jeito */}
          <div className="card">
            <div className="flex items-start space-x-4">
              <div
                className="p-2 rounded-lg"
                style={{ background: 'var(--emerald-100)' }}
              >
                <svg
                  className="w-5 h-5"
                  style={{ color: 'var(--emerald-600)' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                  />
                </svg>
              </div>
              <div>
                <h3
                  className="font-medium mb-2"
                  style={{ color: 'var(--text-zinc-800)' }}
                  id="feature-1-title"
                >
                  {t('features.journal.title')}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--text-zinc-600)' }}
                  id="feature-1-desc"
                >
                  {t('features.journal.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Do balde à estufa */}
          <div className="card">
            <div className="flex items-start space-x-4">
              <div
                className="p-2 rounded-lg"
                style={{ background: 'var(--emerald-100)' }}
              >
                <svg
                  className="w-5 h-5"
                  style={{ color: 'var(--emerald-600)' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V9.375c0-.621.504-1.125 1.125-1.125H20.25M8.25 21h8.25M20.25 8.25V6.375c0-.621-.504-1.125-1.125-1.125H18m0 0V3.375c0-.621-.504-1.125-1.125-1.125h-6.75A2.25 2.25 0 007.875 4.5v12.75M18 5.25h2.25A1.125 1.125 0 0121.375 6.375v11.25c0 .621-.504 1.125-1.125 1.125h-9.25M18 5.25v6m-10.125 6V7.875c0-.621.504-1.125 1.125-1.125h3.375c.621 0 1.125.504 1.125 1.125v8.25"
                  />
                </svg>
              </div>
              <div>
                <h3
                  className="font-medium mb-2"
                  style={{ color: 'var(--text-zinc-800)' }}
                  id="feature-2-title"
                >
                  {t('features.voice.title')}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--text-zinc-600)' }}
                  id="feature-2-desc"
                >
                  {t('features.voice.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Dias de vida e estágios visíveis sempre */}
          <div className="card">
            <div className="flex items-start space-x-4">
              <div
                className="p-2 rounded-lg"
                style={{ background: 'var(--emerald-100)' }}
              >
                <svg
                  className="w-5 h-5"
                  style={{ color: 'var(--emerald-600)' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5a2.25 2.25 0 002.25-2.25m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5a2.25 2.25 0 002.25 2.25v7.5"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 13.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 13.5h.008v.008H16.5V13.5zM8.25 13.5h.008v.008H8.25V13.5z"
                  />
                </svg>
              </div>
              <div>
                <h3
                  className="font-medium mb-2"
                  style={{ color: 'var(--text-zinc-800)' }}
                  id="feature-3-title"
                >
                  {t('features.alerts.title')}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--text-zinc-600)' }}
                  id="feature-3-desc"
                >
                  {t('features.alerts.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Sticker automático nos vídeos da planta */}
          <div className="card">
            <div className="flex items-start space-x-4">
              <div
                className="p-2 rounded-lg"
                style={{ background: 'var(--emerald-100)' }}
              >
                <svg
                  className="w-5 h-5"
                  style={{ color: 'var(--emerald-600)' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m15.75 10.5 4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                  />
                </svg>
              </div>
              <div>
                <h3
                  className="font-medium mb-2"
                  style={{ color: 'var(--text-zinc-800)' }}
                  id="feature-4-title"
                >
                  {t('features.guides.title')}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--text-zinc-600)' }}
                  id="feature-4-desc"
                >
                  {t('features.guides.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;