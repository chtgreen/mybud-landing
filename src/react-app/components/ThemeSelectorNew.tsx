import { useState, type FC } from 'react';
import { t } from '../lib/i18n';

interface ThemeSelectorProps {
  onThemeChange?: (theme: string) => void;
}

const ThemeSelector: FC<ThemeSelectorProps> = ({ onThemeChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { id: 'emerald', name: t('themeSelector.emerald'), color: '#10b981' },
    { id: 'purple', name: t('themeSelector.purple'), color: '#8b5cf6' },
    { id: 'amber', name: t('themeSelector.amber'), color: '#f59e0b' },
    { id: 'blue', name: t('themeSelector.blue'), color: '#3b82f6' }
  ];

  const switchTheme = (themeId: string) => {
    const root = document.documentElement;
    
    switch (themeId) {
      case 'purple':
        root.style.setProperty('--emerald-50', '#faf5ff');
        root.style.setProperty('--emerald-100', '#f3e8ff');
        root.style.setProperty('--emerald-500', '#8b5cf6');
        root.style.setProperty('--emerald-600', '#7c3aed');
        break;
      case 'amber':
        root.style.setProperty('--emerald-50', '#fffbeb');
        root.style.setProperty('--emerald-100', '#fef3c7');
        root.style.setProperty('--emerald-500', '#f59e0b');
        root.style.setProperty('--emerald-600', '#d97706');
        break;
      case 'blue':
        root.style.setProperty('--emerald-50', '#eff6ff');
        root.style.setProperty('--emerald-100', '#dbeafe');
        root.style.setProperty('--emerald-500', '#3b82f6');
        root.style.setProperty('--emerald-600', '#2563eb');
        break;
      default: // emerald
        root.style.setProperty('--emerald-50', '#ecfdf5');
        root.style.setProperty('--emerald-100', '#d1fae5');
        root.style.setProperty('--emerald-500', '#10b981');
        root.style.setProperty('--emerald-600', '#059669');
        break;
    }
    
    onThemeChange?.(themeId);
    setIsOpen(false);
  };

  return (
    <div className="fixed right-6 top-20 z-40">
      <div className={`transition-all duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-44'}`}>
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 w-52">
          <h3 className="text-sm font-semibold text-gray-800 mb-2">
            {t('themeSelector.title')}
          </h3>
          <p className="text-xs text-gray-500 mb-4">
            {t('themeSelector.subtitle')}
          </p>
          
          <div className="grid grid-cols-2 gap-2">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => switchTheme(theme.id)}
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div 
                  className="w-4 h-4 rounded-full border-2 border-gray-200"
                  style={{ backgroundColor: theme.color }}
                ></div>
                <span className="text-xs font-medium text-gray-700">
                  {theme.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute right-0 top-0 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center hover:shadow-xl transition-shadow"
      >
        <svg 
          className={`w-5 h-5 text-gray-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          strokeWidth="1.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
    </div>
  );
};

export default ThemeSelector;