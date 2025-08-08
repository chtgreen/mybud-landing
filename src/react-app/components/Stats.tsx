import type { FC } from 'react';
import { t } from '../lib/i18n';

interface StatsProps {
  background?: 'white' | 'gray';
}

const Stats: FC<StatsProps> = ({ background = 'gray' }) => {
  const bgClass = background === 'white' ? 'bg-white' : 'bg-gray-50';

  const items = [
    { value: t('stats.growers'), label: t('stats.growersLabel') },
    { value: t('stats.countries'), label: t('stats.countriesLabel') },
    { value: t('stats.repurchase'), label: t('stats.repurchaseLabel') },
  ];

  return (
    <section className={`py-16 ${bgClass} organic-background`}>
      <div className="container mx-auto px-6 max-w-6xl">
        {t('stats.title') !== 'stats.title' && (
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-medium mb-4 text-zinc-800">{t('stats.title')}</h2>
            {t('stats.description') !== 'stats.description' && (
              <p className="text-lg leading-relaxed max-w-2xl mx-auto text-zinc-600">{t('stats.description')}</p>
            )}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="card text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">{it.value}</div>
              <div className="text-sm text-gray-600">{it.label}</div>
            </div>
          ))}
        </div>
        {t('stats.note') !== 'stats.note' && (
          <p className="text-xs text-gray-500 text-center mt-6">{t('stats.note')}</p>
        )}
      </div>
    </section>
  );
};

export default Stats; 