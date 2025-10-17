import type { FC } from 'react';
import { t } from '../lib/i18n';

interface TestimonialsProps {
  background?: 'white' | 'gray';
  growerCount?: number;
}

const Testimonials: FC<TestimonialsProps> = ({ background = 'gray', growerCount = 50 }) => {
  const bgClass = background === 'white' ? 'bg-white' : 'bg-gray-50';

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
    <section className={`py-20 ${bgClass} organic-background`}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto text-gray-700 mb-6">
            {t('testimonials.subtitle')}
          </p>
          {/* Counter */}
          {t('testimonials.counter') && (
            <div className="inline-flex items-center gap-2 bg-[#F9C9DE] text-[#be185d] px-4 py-2 rounded-full text-sm font-semibold">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span>{t('testimonials.counter').replace('{count}', growerCount.toString())}</span>
            </div>
          )}
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