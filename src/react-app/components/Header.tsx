import React, { useState, useEffect } from 'react';
import { Language, isB2B as isB2BContext } from '../lib/i18n';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  onLanguageChange: (lang: Language) => void;
  isB2B?: boolean;
}

const Header: React.FC<HeaderProps> = ({ onLanguageChange, isB2B: isB2BProp }) => {
  const [logoTextClass, setLogoTextClass] = useState('text-white');
  const { currentLanguage } = useLanguage();

  // Detect if we're in B2B context
  const isB2B = typeof isB2BProp === 'boolean' ? isB2BProp : isB2BContext();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;

      if (isB2B) {
        setLogoTextClass('text-slate-800');
      } else {
        setLogoTextClass(scrolled ? 'text-slate-800' : 'text-white');
      }
    };

    if (isB2B) {
      // Always dark logo text on B2B
      setLogoTextClass('text-slate-800');
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
          <div className="flex items-center space-x-3">
            <div className={`w-8 h-8 ${isB2B ? 'bg-emerald-600' : 'bg-green-500'} rounded-lg flex items-center justify-center shadow-md`}>
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className={`font-bold text-lg transition-colors ${logoTextClass}`}>
              mybud
            </span>
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
