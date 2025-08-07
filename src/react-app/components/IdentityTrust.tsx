import type { FC } from 'react';
import { t } from '../lib/i18n';

const IdentityTrust: FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 
        className="text-2xl md:text-3xl font-medium mb-6"
        style={{ color: 'var(--text-zinc-800)' }}
      >
            <span className="block">{t('identityTrust.title1')}</span>
            {t('identityTrust.title2') && <span className="block">{t('identityTrust.title2')}</span>}
          </h2>
          <p 
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: 'var(--text-zinc-600)' }}
          >
            {t('identityTrust.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 100% Privado */}
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
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </div>
            <h3 
              className="font-medium mb-2"
              style={{ color: 'var(--text-zinc-800)' }}
            >
              {t('identityTrust.private.title')}
            </h3>
            <p className="text-sm text-zinc-600">
              {t('identityTrust.private.desc')}
            </p>
          </div>

          {/* Feito em Comunidade */}
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
              {t('identityTrust.community.title')}
            </h3>
            <p className="text-sm text-zinc-600">
              {t('identityTrust.community.desc')}
            </p>
          </div>

          {/* Testado por Growers */}
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
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 
              className="font-medium mb-2"
              style={{ color: 'var(--text-zinc-800)' }}
            >
              {t('identityTrust.tested.title')}
            </h3>
            <p className="text-sm text-zinc-600">
              {t('identityTrust.tested.desc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdentityTrust;