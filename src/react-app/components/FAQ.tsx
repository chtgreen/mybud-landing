import type { FC } from 'react';
import { t } from '../lib/i18n';

interface QA { q: string; a: string }

interface FAQProps {
  background?: 'white' | 'gray';
}

const FAQ: FC<FAQProps> = ({ background = 'gray' }) => {
  const bgClass = background === 'white' ? 'bg-white' : 'bg-gray-50';

  const visible: QA[] = [
    { q: t('faq.visible.q1.q'), a: t('faq.visible.q1.a') },
    { q: t('faq.visible.q2.q'), a: t('faq.visible.q2.a') },
    { q: t('faq.visible.q3.q'), a: t('faq.visible.q3.a') },
    { q: t('faq.visible.q4.q'), a: t('faq.visible.q4.a') },
    { q: t('faq.visible.q5.q'), a: t('faq.visible.q5.a') },
  ];

  return (
    <section className={`py-20 ${bgClass} organic-background`}>
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-medium mb-6" style={{ color: 'var(--text-zinc-800)' }}>
            {t('faq.title')}
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: 'var(--text-zinc-600)' }}>
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {visible.map((item, idx) => (
            <div key={idx} className="card">
              <div className="font-medium text-zinc-800 mb-2">{item.q}</div>
              <div className="text-sm text-zinc-600">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 