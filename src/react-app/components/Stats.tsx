import type { FC } from 'react';
import { t } from '../lib/i18n';

interface StatsProps {
  background?: 'white' | 'gray';
}

const Stats: FC<StatsProps> = ({ background = 'gray' }) => {
  const bgClass = background === 'white' ? 'bg-white' : 'bg-gray-50';

  // Check if we're using new metrics structure
  const useNewMetrics = t('metrics.title') !== 'metrics.title';
  
  const rawItems = useNewMetrics
    ? [
        { value: t('metrics.stats.repurchase.value'), label: t('metrics.stats.repurchase.label') },
        { value: t('metrics.stats.standardization.value'), label: t('metrics.stats.standardization.label') },
        { value: t('metrics.stats.activeGrowers.value'), label: t('metrics.stats.activeGrowers.label') },
      ]
    : [
        { value: t('stats.growers'), label: t('stats.growersLabel') },
        { value: t('stats.countries'), label: t('stats.countriesLabel') },
        { value: t('stats.repurchase'), label: t('stats.repurchaseLabel') },
      ];

  const title = useNewMetrics ? t('metrics.title') : t('stats.title');
  const description = useNewMetrics ? t('metrics.description') : t('stats.description');
  const note = useNewMetrics ? t('metrics.note') : t('stats.note');

  const placeholderKeys = new Set([
    'metrics.stats.repurchase.value',
    'metrics.stats.standardization.value',
    'metrics.stats.activeGrowers.value',
    'stats.growers',
    'stats.countries',
    'stats.repurchase',
  ]);

  const items = rawItems.filter((item) => {
    const value = (item.value || '').toString().trim();
    if (!value) return false;
    if (placeholderKeys.has(value)) return false;
    if (/x/i.test(value)) return false;
    return true;
  });

  if (items.length === 0) {
    return null;
  }

  return (
    <section className={`py-16 ${bgClass} organic-background`}>
      <div className="container mx-auto px-6 max-w-6xl">
        {title !== 'stats.title' && title !== 'metrics.title' && (
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-medium mb-4 text-zinc-800">{title}</h2>
            {description && description !== 'stats.description' && description !== 'metrics.description' && (
              <p className="text-lg leading-relaxed max-w-2xl mx-auto text-zinc-600">{description}</p>
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
        {note && note !== 'stats.note' && note !== 'metrics.note' && (
          <p className="text-xs text-gray-500 text-center mt-6">{note}</p>
        )}
      </div>
    </section>
  );
};

export default Stats; 
