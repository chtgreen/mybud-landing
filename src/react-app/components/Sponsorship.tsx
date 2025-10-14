import type { FC } from 'react';
import { t } from '../lib/i18n';

interface SponsorshipProps {
  background?: 'white' | 'gray';
}

const Sponsorship: FC<SponsorshipProps> = ({ background = 'white' }) => {
  const bgClass = background === 'white' ? 'bg-white' : 'bg-gray-50';

  return (
    <section className={`py-20 ${bgClass} organic-background`}>
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Single section: Text left, Image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              {t('sponsorship.title')}
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              {t('sponsorship.subtitle')}
            </p>
            {t('sponsorship.cta') !== 'sponsorship.cta' && (
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#features" className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-medium text-emerald-800 border border-emerald-300 hover:bg-emerald-50">
                  {t('sponsorship.cta')}
                </a>
              </div>
            )}
          </div>
          <div>
            <div className="rounded-lg bg-gray-100 h-80 flex items-center justify-center text-gray-500 text-sm border-2 border-dashed border-gray-300">
              [Imagem: Dados e métricas de marketing cannabis]
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Sponsorship; 