import type { FC, ReactNode } from 'react';
import { HeroContainer } from './Hero';

interface HeroLayoutProps {
  theme: 'emerald' | 'white';
  title1: string;
  title2: string;
  title3: string;
  subtitle: string;
  primaryCta: string;
  onPrimaryClick: () => void;
  secondaryCta?: string;
  onSecondaryClick?: () => void;
  rightSlot?: ReactNode;
}

const HeroLayout: FC<HeroLayoutProps> = ({
  theme,
  title1,
  title2,
  title3,
  subtitle,
  primaryCta,
  onPrimaryClick,
  secondaryCta,
  onSecondaryClick,
  rightSlot,
}) => {
  const isWhite = theme === 'white';
  const titleClass = isWhite ? 'text-gray-900' : 'text-white';
  const subtitleClass = isWhite ? 'text-gray-700' : 'text-emerald-100';
  const trustClass = isWhite ? 'text-gray-600' : 'text-emerald-100';
  const primaryBtnClass = isWhite
    ? 'inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold bg-emerald-700 text-white border border-emerald-700 hover:bg-emerald-800 transition-colors'
    : 'inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-medium bg-white/90 text-gray-900 border border-white/50 hover:bg-white transition-colors';
  const secondaryBtnClass = isWhite
    ? 'secondary-button font-semibold py-4 px-8 text-lg'
    : 'secondary-button font-semibold py-4 px-8 text-lg';

  return (
    <HeroContainer theme={theme === 'white' ? 'white' : 'emerald'}>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16 w-full">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${titleClass}`}>
            <span>{title1}</span><br />
            <span>{title2}</span><br />
            <span className="hero-title-3">{title3}</span>
          </h1>
          <p className={`text-lg mb-10 max-w-xl mx-auto lg:mx-0 ${subtitleClass}`}>
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <button className={primaryBtnClass} onClick={onPrimaryClick}>
              <i className="fas fa-seedling mr-2"></i>
              <span>{primaryCta}</span>
            </button>
            {secondaryCta && onSecondaryClick && (
              <button className={secondaryBtnClass} onClick={onSecondaryClick}>
                <i className="fas fa-play-circle mr-2"></i>
                <span>{secondaryCta}</span>
              </button>
            )}
          </div>

          {/* Optional trust line can be passed via subtitle or left empty by caller */}
          <p className={`text-sm ${trustClass}`}></p>
        </div>

        <div className="lg:w-1/2 relative flex items-center justify-center">
          {rightSlot}
        </div>
      </div>
    </HeroContainer>
  );
};

export default HeroLayout; 