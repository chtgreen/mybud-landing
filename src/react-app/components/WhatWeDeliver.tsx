import type { FC } from 'react';
import { t, tArray } from '../lib/i18n';

const WhatWeDeliver: FC = () => {
  const cards = tArray('collective.whatWeDeliver.cards') as unknown as Array<{ title: string; desc: string }>;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900">
            {t('collective.whatWeDeliver.title')}
          </h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
            {t('collective.whatWeDeliver.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div key={index} className="card p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-zinc-900">
                {card.title}
              </h3>
              <p className="text-zinc-600">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDeliver;

