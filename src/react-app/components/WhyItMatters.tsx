import type { FC } from 'react';
import { t, tArray } from '../lib/i18n';
import { Thermometer, FileCheck, Scale } from './icons';

const WhyItMatters: FC = () => {
  const challengesData = tArray('collective.whyItMatters.challenges');
  const challenges = Array.isArray(challengesData) && typeof challengesData[0] === 'object'
    ? (challengesData as unknown as Array<{ text: string }>)
    : [];
  const icons = [Thermometer, FileCheck, Scale];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900">
              {t('collective.whyItMatters.title')}
            </h2>
            <p className="text-lg md:text-xl text-zinc-600 mb-4 leading-relaxed">
              {t('collective.whyItMatters.text')}
            </p>
            <p className="text-xl md:text-2xl font-semibold text-emerald-600 italic mt-8">
              {t('collective.whyItMatters.keyphrase')}
            </p>
          </div>

          {/* Challenges Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {challenges.map((challenge, index) => {
              const Icon = icons[index];
              return (
                <div key={index} className="card p-6 text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-full">
                    <Icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <p className="text-base text-zinc-700 leading-relaxed">
                    {challenge.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;

