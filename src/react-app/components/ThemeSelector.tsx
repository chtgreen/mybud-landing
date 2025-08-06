import { useState, useEffect } from 'react';

interface ThemeSelectorProps {
  onThemeChange?: (theme: string) => void;
  currentLanguage?: string;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ 
  onThemeChange, 
  currentLanguage = 'pt' 
}) => {
  const [activeTheme, setActiveTheme] = useState('original');

  const themes = {
    original: {
      pt: 'Original',
      en: 'Original', 
      es: 'Original'
    },
    'emerald-deep': {
      pt: 'Emerald 700',
      en: 'Emerald 700',
      es: 'Esmeralda 700'
    },
    'forest-emerald': {
      pt: 'Emerald 800',
      en: 'Emerald 800',
      es: 'Esmeralda 800'
    },
    'mint-emerald': {
      pt: 'Verde Intenso',
      en: 'Intense Green',
      es: 'Verde Intenso'
    },
    'sage-emerald': {
      pt: 'Verde Grow',
      en: 'Grow Green',
      es: 'Verde Cultivo'
    },
    'teal-emerald': {
      pt: 'Verde Natural',
      en: 'Natural Green',
      es: 'Verde Natural'
    },
    white: {
      pt: 'Branco',
      en: 'White',
      es: 'Blanco'
    }
  };

  const titles = {
    pt: '🎨 Testar Cores',
    en: '🎨 Test Colors',
    es: '🎨 Probar Colores'
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
      setActiveTheme(savedTheme);
      switchTheme(savedTheme);
    }
  }, []);

  const switchTheme = (themeName: string) => {
    const organicSections = document.querySelectorAll('.hero-organic');
    
    if (organicSections.length === 0) return;

    const themeClasses = [
      'theme-emerald-deep',
      'theme-forest-emerald',
      'theme-mint-emerald',
      'theme-sage-emerald',
      'theme-teal-emerald',
      'theme-white',
    ];
    
    organicSections.forEach((section) => {
      // Remove all theme classes
      themeClasses.forEach((className) => {
        section.classList.remove(className);
      });

      // Add new theme class if not original
      if (themeName !== 'original') {
        section.classList.add(`theme-${themeName}`);
      }
    });

    setActiveTheme(themeName);
    localStorage.setItem('selectedTheme', themeName);
    onThemeChange?.(themeName);
  };

  const testThemeSwitch = () => {
    console.log('=== THEME SWITCH DEBUG ===');
    const organicSections = document.querySelectorAll('.hero-organic');
    console.log('Organic sections found:', organicSections.length);

    organicSections.forEach((section, index) => {
      console.log(`Section ${index + 1}:`, section);
      console.log('- Current classes:', section.className);
    });
    console.log('=== END DEBUG ===');
  };

  return (
    <div className="theme-selector" id="themeSelector">
      <div
        style={{
          fontSize: '12px',
          fontWeight: 600,
          color: '#047857',
          marginBottom: '12px',
          textAlign: 'center',
        }}
      >
        {titles[currentLanguage as keyof typeof titles]}
      </div>
      
      <button
        onClick={testThemeSwitch}
        style={{
          width: '100%',
          padding: '4px',
          marginBottom: '8px',
          background: '#059669',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontSize: '10px',
        }}
      >
        Test Theme Switch
      </button>

      {Object.entries(themes).map(([themeKey, themeLabels]) => (
        <div
          key={themeKey}
          className={`theme-option ${activeTheme === themeKey ? 'active' : ''}`}
          onClick={() => switchTheme(themeKey)}
          data-theme={themeKey}
        >
          <div className={`theme-preview ${themeKey}`}></div>
          <span style={{ fontSize: '13px', color: '#374151' }}>
            {themeLabels[currentLanguage as keyof typeof themeLabels]}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ThemeSelector;