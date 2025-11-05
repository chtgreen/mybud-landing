import type { FC } from 'react';
import { t } from '../lib/i18n';

interface TestimonialsProps {
  background?: 'white' | 'gray';
  growerCount?: number;
}

const Testimonials: FC<TestimonialsProps> = ({ growerCount = 50 }) => {
  const testimonials = [
    {
      textKey: 'testimonials.1.text',
      authorKey: 'testimonials.1.author',
      locationKey: 'testimonials.1.location',
      avatarInitial: 'H',
    },
    {
      textKey: 'testimonials.2.text',
      authorKey: 'testimonials.2.author',
      locationKey: 'testimonials.2.location',
      avatarInitial: 'M',
    },
    {
      textKey: 'testimonials.3.text',
      authorKey: 'testimonials.3.author',
      locationKey: 'testimonials.3.location',
      avatarInitial: 'V',
    }
  ];

  return (
    <section className={`py-24 bg-gradient-to-br from-gray-50 via-white to-emerald-50 organic-background`}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          {/* Novo título mais impactante */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
            Growers reais, <span className="text-emerald-600">resultados reais.</span>
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto text-gray-700 mb-6">
            {t('testimonials.subtitle')}
          </p>
          {/* Counter */}
          {t('testimonials.counter') && (
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-emerald-50 text-emerald-700 px-5 py-2.5 rounded-full text-sm font-bold shadow-md border border-emerald-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span>{t('testimonials.counter').replace('{count}', growerCount.toString())}</span>
            </div>
          )}
        </div>
        
        {/* Cards com cores da paleta MyBud */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border-2 border-emerald-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(40,134,100,0.15)] transition-all duration-300 hover:-translate-y-1 p-8 flex flex-col gap-6 h-full relative overflow-hidden"
            >
              {/* Padrão decorativo sutil no fundo */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              
              {/* Aspas decorativas */}
              <div className="text-6xl text-emerald-200 font-serif leading-none">"</div>
              
              <p className="text-base leading-relaxed text-gray-700 flex-1 relative z-10">
                {t(testimonial.textKey)}
              </p>

              <div className="flex items-center relative z-10">
                {/* Avatar humanizado com gradiente */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white font-bold text-lg flex items-center justify-center shadow-lg ring-4 ring-white">
                  {testimonial.avatarInitial}
                </div>
                <div className="ml-4">
                  <div className="font-bold text-base text-gray-900">
                    {t(testimonial.authorKey)}
                  </div>
                  <div className="text-sm text-gray-600 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
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
