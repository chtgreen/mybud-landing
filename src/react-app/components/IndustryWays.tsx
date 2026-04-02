import type { FC } from 'react';
import { t } from '../lib/i18n';
import { Target, Clock3, FileText, Lightbulb } from './icons';

const IndustryWays: FC = () => {
  const cards = [
    {
      Icon: Target,
      titleKey: 'industry.presence.tasks.title',
      exampleKey: 'industry.presence.tasks.example',
      points: [
        'industry.presence.tasks.point1',
        'industry.presence.tasks.point2',
        'industry.presence.tasks.point3',
      ],
    },
    {
      Icon: Clock3,
      titleKey: 'industry.presence.timeline.title',
      exampleKey: 'industry.presence.timeline.example',
      points: [
        'industry.presence.timeline.point1',
        'industry.presence.timeline.point2',
      ],
    },
    {
      Icon: FileText,
      titleKey: 'industry.presence.activityLog.title',
      exampleKey: 'industry.presence.activityLog.example',
      points: [
        'industry.presence.activityLog.point1',
        'industry.presence.activityLog.point2',
      ],
    },
    {
      Icon: Lightbulb,
      titleKey: 'industry.presence.recommendations.title',
      exampleKey: 'industry.presence.recommendations.example',
      points: [
        'industry.presence.recommendations.point1',
        'industry.presence.recommendations.point2',
      ],
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900">
            {t('industry.presence.title')}
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, i) => {
            const { Icon } = card;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-emerald-700" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900">
                    {t(card.titleKey)}
                  </h3>
                </div>

                {/* Example */}
                <div className="mb-4 px-4 py-3 rounded-lg bg-emerald-50/60 border border-emerald-100">
                  <p className="text-base font-medium text-emerald-800 font-mono">
                    {t(card.exampleKey)}
                  </p>
                </div>

                {/* Points */}
                <ul className="space-y-2">
                  {card.points.map((pointKey, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-zinc-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                      {t(pointKey)}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Punchline */}
        <div className="mt-16 text-center">
          <p className="text-xl md:text-2xl font-bold text-zinc-900 leading-relaxed whitespace-pre-line">
            {t('industry.presence.punchline')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustryWays;
