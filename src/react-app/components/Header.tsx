import { useState, useEffect } from 'react';
import { Language } from '../lib/i18n';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  onLanguageChange?: (language: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ onLanguageChange }) => {
  const { currentLanguage, changeLanguage } = useLanguage();
  const [logoTextClass, setLogoTextClass] = useState('text-white');

  useEffect(() => {
    const logoText = document.getElementById('logo-text');
    const heroSection = document.querySelector('.hero-organic');

    if (!heroSection || !logoText) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLogoTextClass('text-white');
          } else {
            setLogoTextClass('text-slate-800');
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(heroSection);

    return () => observer.disconnect();
  }, []);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = e.target.value as Language;
    changeLanguage(newLanguage);
    onLanguageChange?.(newLanguage);
  };

  return (
    <header className="fixed top-0 w-full z-50 py-4">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </div>
          <div
            id="logo-text"
            className={`text-2xl font-bold transition-colors duration-300 ${logoTextClass}`}
          >
            mybud
          </div>
        </div>

        {/* Language Selector */}
        <div className="language-selector rounded-full px-3 py-2 soft-shadow">
          <select
            id="language-select"
            value={currentLanguage}
            onChange={handleLanguageChange}
            className="bg-transparent border-none focus:ring-0 text-sm font-medium text-slate-700 cursor-pointer"
          >
            <option value="pt">Português</option>
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;