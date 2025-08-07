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
          {/* Diário de cultivo integrado */}
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
                    d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H7.5A2.25 2.25 0 005.25 6v12A2.25 2.25 0 007.5 20.25h9A2.25 2.25 0 0018.75 18V6A2.25 2.25 0 0016.5 3.75z"
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

          {/* Anotações por voz */}
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
                    d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
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

          {/* Alertas inteligentes */}
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
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
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

          {/* Guias para iniciantes */}
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
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 717.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
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