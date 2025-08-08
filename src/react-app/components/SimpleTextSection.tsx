import { FC } from 'react';

interface SimpleTextSectionProps {
  background?: 'white' | 'gray';
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaAction?: () => void;
}

const SimpleTextSection: FC<SimpleTextSectionProps> = ({ 
  background = 'white', 
  title, 
  subtitle, 
  ctaText, 
  ctaAction 
}) => {
  const bgClass = background === 'white' ? 'bg-white' : 'bg-gray-50';

  return (
    <section className={`py-20 ${bgClass} organic-background`}>
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
          {title}
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
          {subtitle}
        </p>
        {ctaText && ctaAction && (
          <div className="flex justify-center">
            <button 
              onClick={ctaAction}
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-medium text-emerald-800 border border-emerald-300 hover:bg-emerald-50 transition-colors"
            >
              {ctaText}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SimpleTextSection; 