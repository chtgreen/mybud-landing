import type { FC } from 'react';
import { t } from '../lib/i18n';

interface B2CLinkProps {
  background?: 'white' | 'gray';
}

const B2CLink: FC<B2CLinkProps> = ({ background = 'white' }) => {
  const bgClass = background === 'white' ? 'bg-white' : 'bg-gray-50';

  const handleB2CClick = () => {
    // Navigate to B2C page (root path)
    window.location.href = '/';
  };

  return (
    <section className={`py-20 ${bgClass}`}>
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-12 border-2 border-emerald-200 text-center">
          <div className="mb-6">
            <svg
              className="w-16 h-16 text-emerald-600 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
          </div>
          
          <h2 
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ color: 'var(--text-zinc-900)' }}
          >
            {t('b2cLink.title')}
          </h2>
          
          <p 
            className="text-lg mb-8 max-w-2xl mx-auto"
            style={{ color: 'var(--text-zinc-700)' }}
          >
            {t('b2cLink.description')}
          </p>
          
          <button 
            onClick={handleB2CClick}
            className="btn-primary text-lg py-4 px-8 inline-flex items-center justify-center gap-2"
          >
            {t('b2cLink.cta')}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default B2CLink;

