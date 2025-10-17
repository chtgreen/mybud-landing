import React, { useState, useEffect } from 'react';
import { Language, isB2B as isB2BContext } from '../lib/i18n';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  onLanguageChange: (lang: Language) => void;
  isB2B?: boolean;
}

const Header: React.FC<HeaderProps> = ({ onLanguageChange, isB2B: isB2BProp }) => {
  const [useWhiteLogo, setUseWhiteLogo] = useState(true);
  const { currentLanguage } = useLanguage();

  // Detect if we're in B2B context
  const isB2B = typeof isB2BProp === 'boolean' ? isB2BProp : isB2BContext();

  useEffect(() => {
    const handleScroll = () => {
      // Change logo when scrolled past most of the hero section (80% of viewport height)
      const scrolled = window.scrollY > window.innerHeight * 0.8;

      if (isB2B) {
        // B2B has white background, use green logo
        setUseWhiteLogo(false);
      } else {
        // Use green logo when scrolled into white section, white logo on green hero
        setUseWhiteLogo(!scrolled);
      }
    };

    if (isB2B) {
      // Always green logo on B2B (white background)
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-6 w-full py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={useWhiteLogo ? '/mybud-logo-white.svg' : '/mybud-logo-green.svg'} 
              alt="mybud logo" 
              className="h-40 md:h-48 lg:h-56 w-auto transition-opacity duration-300"
            />
          </div>

          {/* Navigation & Language Selector */}
          <div className="flex items-center space-x-4">
            {/* Language Selector with solid white background */}
            <div className={
              `language-selector rounded-full px-3 py-2 border transition-all bg-white border-gray-300`
            }>
              <select
                id="language-select"
                value={currentLanguage}
                onChange={handleLanguageChange}
                className="bg-transparent border-none focus:ring-0 text-sm font-medium cursor-pointer text-black"
              >
                <option value="pt">Português</option>
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
