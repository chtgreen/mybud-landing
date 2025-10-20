import { useState, useEffect, type FC } from 'react';
import { t } from '../lib/i18n';
import { useLanguage } from '../contexts/LanguageContext';
import { Palette } from './icons';

interface ThemeSelectorProps {
  onThemeChange?: (theme: string) => void;
}

const ThemeSelector: FC<ThemeSelectorProps> = ({ onThemeChange }) => {
  const [currentTheme, setCurrentTheme] = useState('original');
  const { currentLanguage } = useLanguage();

  const testThemeSwitch = () => {
    console.log('Testing theme switch functionality');
  };

  const switchTheme = (themeId: string) => {
    console.log(`Switching to theme: ${themeId}`);
    
    // Find all sections with hero-organic class
    const organicSections = document.querySelectorAll('.hero-organic');
    console.log(`Found ${organicSections.length} organic sections`);
    
    if (organicSections.length === 0) {
      console.error('No organic sections found!');
      return;
    }
    
    // Remove all theme classes from all organic sections
    const themeClasses = [
      'theme-emerald-deep',
      'theme-forest-emerald', 
      'theme-mint-emerald',
      'theme-sage-emerald',
      'theme-teal-emerald',
      'theme-white'
    ];
    
    organicSections.forEach((section, index) => {
      console.log(`Processing section ${index + 1}:`, section);
      
      // Remove all theme classes
      themeClasses.forEach((className) => {
        if (section.classList.contains(className)) {
          section.classList.remove(className);
          console.log(`Removed ${className} from section ${index + 1}`);
        }
      });
      
      // Add new theme class if not original
      if (themeId !== 'original') {
        section.classList.add(`theme-${themeId}`);
        console.log(`Added theme-${themeId} to section ${index + 1}`);
      } else {
        console.log(`Reset to original theme for section ${index + 1}`);
      }
    });
    
    // Save theme preference
    localStorage.setItem('selectedTheme', themeId);
    setCurrentTheme(themeId);
    console.log(`Successfully switched to theme: ${themeId}`);
    
    onThemeChange?.(themeId);
  };

  // Load saved theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
      switchTheme(savedTheme);
    } else {
      switchTheme('original');
    }
  }, []);

  return (
    <div className="theme-selector" id="themeSelector">
      <div
        style={{
          fontSize: '12px',
          fontWeight: 600,
          color: '#047857',
          marginBottom: '12px',
          textAlign: 'center'
        }}
        id="theme-title"
      >
        <span className="inline-flex items-center gap-1 justify-center">
          <Palette className="w-4 h-4" aria-hidden="true" />
          {t('themeSelector.title', currentLanguage)}
        </span>
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
          fontSize: '10px'
        }}
      >
        Test Theme Switch
      </button>

      <div
        className={`theme-option ${currentTheme === 'original' ? 'active' : ''}`}
        onClick={() => switchTheme('original')}
        data-theme="original"
      >
        <div className="theme-preview original"></div>
        <span style={{ fontSize: '13px', color: '#374151' }}>
          {t('themeSelector.original', currentLanguage)}
        </span>
      </div>

      <div
        className={`theme-option ${currentTheme === 'emerald-deep' ? 'active' : ''}`}
        onClick={() => switchTheme('emerald-deep')}
        data-theme="emerald-deep"
      >
        <div className="theme-preview emerald-deep"></div>
        <span style={{ fontSize: '13px', color: '#374151' }}>
          Emerald 700
        </span>
      </div>

      <div
        className={`theme-option ${currentTheme === 'forest-emerald' ? 'active' : ''}`}
        onClick={() => switchTheme('forest-emerald')}
        data-theme="forest-emerald"
      >
        <div className="theme-preview forest-emerald"></div>
        <span style={{ fontSize: '13px', color: '#374151' }}>
          Emerald 800
        </span>
      </div>

      <div
        className={`theme-option ${currentTheme === 'mint-emerald' ? 'active' : ''}`}
        onClick={() => switchTheme('mint-emerald')}
        data-theme="mint-emerald"
      >
        <div className="theme-preview mint-emerald"></div>
        <span style={{ fontSize: '13px', color: '#374151' }}>
          Verde Intenso
        </span>
      </div>

      <div
        className={`theme-option ${currentTheme === 'sage-emerald' ? 'active' : ''}`}
        onClick={() => switchTheme('sage-emerald')}
        data-theme="sage-emerald"
      >
        <div className="theme-preview sage-emerald"></div>
        <span style={{ fontSize: '13px', color: '#374151' }}>
          Verde Grow
        </span>
      </div>

      <div
        className={`theme-option ${currentTheme === 'teal-emerald' ? 'active' : ''}`}
        onClick={() => switchTheme('teal-emerald')}
        data-theme="teal-emerald"
      >
        <div className="theme-preview teal-emerald"></div>
        <span style={{ fontSize: '13px', color: '#374151' }}>
          Verde Natural
        </span>
      </div>

      <div
        className={`theme-option ${currentTheme === 'white' ? 'active' : ''}`}
        onClick={() => switchTheme('white')}
        data-theme="white"
      >
        <div className="theme-preview white"></div>
        <span style={{ fontSize: '13px', color: '#374151' }}>
          Branco
        </span>
      </div>
    </div>
  );
};

export default ThemeSelector;
