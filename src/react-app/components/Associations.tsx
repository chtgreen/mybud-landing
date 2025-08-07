import type { FC } from 'react';
import { t } from '../lib/i18n';

const Associations: FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 
            className="text-2xl md:text-3xl font-medium mb-6"
            style={{ color: 'var(--text-zinc-800)' }}
          >
            <span className="block">{t('associations.title1')}</span>
            <span className="block">{t('associations.title2')}</span>
          </h2>
          <p 
            className="text-lg leading-relaxed max-w-3xl mx-auto"
            style={{ color: 'var(--text-zinc-600)' }}
          >
            {t('associations.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Gestão Facilitada */}
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
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                />
              </svg>
            </div>
            <h3 
              className="font-medium mb-2"
              style={{ color: 'var(--text-zinc-800)' }}
            >
              {t('associations.management.title')}
            </h3>
            <p className="text-sm text-zinc-600">
              {t('associations.management.desc')}
            </p>
          </div>

          {/* Identificação e Rastreabilidade */}
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
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3s-4.5 4.03-4.5 9 2.015 9 4.5 9zm0 0a8.997 8.997 0 004.716-6.747M12 21a8.997 8.997 0 01-4.716-6.747m9.432-12.506A8.996 8.996 0 0112 3c-2.39 0-4.478.932-6.084 2.472"
                />
              </svg>
            </div>
            <h3 
              className="font-medium mb-2"
              style={{ color: 'var(--text-zinc-800)' }}
            >
              {t('associations.tracking.title')}
            </h3>
            <p className="text-sm text-zinc-600">
              {t('associations.tracking.desc')}
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
              {t('associations.reports.title')}
            </h3>
            <p className="text-sm text-zinc-600">
              {t('associations.reports.desc')}
            </p>
          </div>

          {/* Compliance */}
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
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
            </div>
            <h3 
              className="font-medium mb-2"
              style={{ color: 'var(--text-zinc-800)' }}
            >
              {t('associations.compliance.title')}
            </h3>
            <p className="text-sm text-zinc-600">
              {t('associations.compliance.desc')}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="btn-primary text-lg py-4 px-8 flex items-center justify-center gap-2 mx-auto">
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
            {t('associations.cta')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Associations; 