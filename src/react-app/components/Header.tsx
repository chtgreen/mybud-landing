import React, { useState, useEffect } from 'react';
import { Language, isB2B as isB2BContext, t } from '../lib/i18n';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  onLanguageChange: (lang: Language) => void;
  isB2B?: boolean;
  onCTAClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLanguageChange, isB2B: isB2BProp, onCTAClick }) => {
  const [useWhiteLogo, setUseWhiteLogo] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentLanguage } = useLanguage();

  // Detect if we're in B2B context
  const isB2B = typeof isB2BProp === 'boolean' ? isB2BProp : isB2BContext();

  useEffect(() => {
    const handleScroll = () => {
      const scrolledPastHero = window.scrollY > window.innerHeight * 0.65;

      if (isB2B) {
        setUseWhiteLogo(false);
        return;
      }

      setUseWhiteLogo(!scrolledPastHero);
    };

    if (isB2B) {
      setUseWhiteLogo(false);
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isB2B]);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = e.target.value as Language;
    onLanguageChange(newLanguage);
  };

  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick = (targetId: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    closeMenu();
  };

  const handleCtaClick = () => {
    if (onCTAClick) {
      onCTAClick();
    } else {
      const kitSection = document.getElementById('kit');
      if (kitSection) {
        kitSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    closeMenu();
  };

  const navItems = isB2B
    ? [
        { id: 'features', label: t('header.nav.features') },
        { id: 'beta', label: t('header.nav.beta') },
        { id: 'contact', label: t('header.nav.contact') }
      ]
    : [
        { id: 'features', label: t('header.nav.features') },
        { id: 'beta', label: t('header.nav.beta') },
        { id: 'associations', label: t('header.nav.associations') },
        { id: 'kit', label: t('header.nav.kit') }
      ];

  const isHeroContext = !isB2B && useWhiteLogo && !isMenuOpen;

  const headerClasses = [
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out',
    isHeroContext ? 'bg-transparent' : 'bg-white/95 backdrop-blur-[12px] shadow-md'
  ].join(' ');

  const containerClasses = [
    'container mx-auto px-4 md:px-6 w-full',
    isHeroContext ? 'py-2.5 md:py-3.5' : 'py-2 md:py-3'
  ].join(' ');

  const navButtonClass = [
    'text-sm font-semibold transition-colors',
    isHeroContext ? 'text-white hover:text-white/80' : 'text-[#288664] hover:text-[#0f5132]'
  ].join(' ');

  const desktopLanguageWrapperClass = isHeroContext
    ? 'rounded-full px-3 py-1.5 border transition-all hidden sm:block bg-transparent border-transparent'
    : 'language-selector rounded-full px-3 py-1.5 border transition-all hidden sm:block bg-white border-gray-300';

  const desktopSelectClass = [
    'bg-transparent border-none focus:ring-0 text-sm font-medium cursor-pointer text-black'
  ].join(' ');

  const mobileLanguageWrapperClass = isHeroContext
    ? 'rounded-full px-3 py-1.5 border transition-all sm:hidden bg-transparent border-transparent'
    : 'language-selector rounded-full px-3 py-1.5 border transition-all sm:hidden bg-white border-gray-300';

  const mobileSelectClass = [
    'bg-transparent border-none focus:ring-0 text-sm font-medium cursor-pointer text-black'
  ].join(' ');

  const mobileToggleButtonClass = [
    'md:hidden inline-flex items-center justify-center rounded-full border p-2 transition-colors',
    isHeroContext ? 'border-white/40 bg-transparent text-white hover:bg-white/10' : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-100'
  ].join(' ');

  const ctaButtonClass = [
    'inline-flex items-center justify-center whitespace-nowrap rounded-full px-4 md:px-5 py-1.5 text-sm md:text-base font-semibold transition-colors',
    isHeroContext
      ? 'bg-transparent border border-white/70 text-white hover:bg-white/15 hover:text-white shadow-[0_6px_18px_rgba(12,83,49,0.25)]'
      : 'bg-transparent border border-[#288664] text-[#288664] hover:bg-[#288664] hover:text-white shadow-none'
  ].join(' ');

  return (
    <header className={headerClasses}>
      <div className={containerClasses}>
        <div className="flex items-center justify-between gap-4 relative">
          {/* Logo */}
          <a href="#" className="flex items-center" aria-label="mybud home">
            <img
              src={isHeroContext ? '/mybud-logo-white.svg' : '/mybud-logo-green.svg'}
              alt="mybud logo"
              className="h-8 md:h-12 lg:h-14 w-auto transition-opacity duration-300"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={handleNavClick(item.id)}
                className={navButtonClass}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action area */}
          <div className="flex items-center gap-2 md:gap-4">
            <button
              type="button"
              onClick={handleCtaClick}
              className={ctaButtonClass}
            >
              {t('header.cta')}
            </button>

            <div className={desktopLanguageWrapperClass}>
              <select
                id="language-select"
                value={currentLanguage}
                onChange={handleLanguageChange}
                className={desktopSelectClass}
              >
                <option value="pt">Português</option>
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </div>

            {/* Mobile language selector */}
            <div className={mobileLanguageWrapperClass}>
              <select
                aria-label="Language selector"
                value={currentLanguage}
                onChange={handleLanguageChange}
                className={mobileSelectClass}
              >
                <option value="pt">PT</option>
                <option value="en">EN</option>
                <option value="es">ES</option>
              </select>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className={mobileToggleButtonClass}
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 mt-3 rounded-2xl bg-white/90 backdrop-blur-xl border border-gray-200 shadow-[0_12px_30px_rgba(0,0,0,0.12)] overflow-hidden">
              <nav className="flex flex-col px-4 py-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={handleNavClick(item.id)}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-100 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="mt-3 border-t border-gray-200 pt-3">
                  <button
                    type="button"
                    onClick={handleCtaClick}
                    className="w-full inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold text-white bg-[#EB4C80] hover:bg-[#288664] transition-colors shadow-sm"
                  >
                    {t('header.cta')}
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
