import type { FC } from 'react';
import { t } from '../lib/i18n';
import { Quote } from './icons';

const IndustryImpact: FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-6">
            {t('industry.impact.title')}
          </h2>
          
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
            {t('industry.impact.text')}
          </p>
        </div>

        {/* Testimonial */}
        <div className="relative mt-16">
          {/* Decorative Quote Icon */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-emerald-700 rounded-xl flex items-center justify-center shadow-lg z-10">
            <Quote className="w-7 h-7 text-white" />
          </div>

          <div className="bg-white rounded-2xl p-12 pt-16 border border-gray-200 shadow-lg">
            <p className="text-xl md:text-2xl italic text-zinc-700 mb-8 text-center leading-relaxed">
              "{t('industry.impact.testimonial.text')}"
            </p>
            <div className="text-center">
              <p className="text-zinc-900 font-semibold text-lg">
                {t('industry.impact.testimonial.author')}
              </p>
              <p className="text-emerald-700 font-medium">
                {t('industry.impact.testimonial.role')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryImpact;

