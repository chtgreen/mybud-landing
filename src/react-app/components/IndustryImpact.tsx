import type { FC } from 'react';
import { t } from '../lib/i18n';


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

      </div>
    </section>
  );
};

export default IndustryImpact;

