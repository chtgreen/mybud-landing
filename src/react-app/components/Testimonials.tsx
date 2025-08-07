import type { FC } from 'react';
import { t } from '../lib/i18n';

const Testimonials: FC = () => {
  const testimonials = [
    {
      textKey: 'testimonials.1.text',
      authorKey: 'testimonials.1.author',
      locationKey: 'testimonials.1.location'
    },
    {
      textKey: 'testimonials.2.text',
      authorKey: 'testimonials.2.author',
      locationKey: 'testimonials.2.location'
    },
    {
      textKey: 'testimonials.3.text',
      authorKey: 'testimonials.3.author',
      locationKey: 'testimonials.3.location'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-zinc-800">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto text-zinc-600">
            {t('testimonials.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="card">
              <p className="text-sm leading-relaxed mb-4 text-zinc-600">
                {t(testimonial.textKey)}
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full mr-3 bg-emerald-100"></div>
                <div>
                  <div className="font-medium text-sm text-zinc-800">
                    {t(testimonial.authorKey)}
                  </div>
                  <div className="text-xs text-zinc-500">
                    {t(testimonial.locationKey)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;