import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import posthog from 'posthog-js';
import { 
  Language, 
  SUPPORTED_LANGUAGES, 
  DEFAULT_LANGUAGE, 
  setCurrentLanguage as setI18nLanguage,
  detectBrowserLanguage,
  subscribeI18n
} from '../lib/i18n';

interface LanguageContextType {
  currentLanguage: Language;
  changeLanguage: (lang: Language) => void;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(DEFAULT_LANGUAGE);
  const [isLoading, setIsLoading] = useState(true);
  const [i18nTick, setI18nTick] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useParams<{ lang: string }>();

  useEffect(() => {
    const initializeLanguage = async () => {
      // Get language from URL or detect/fallback
      let targetLanguage: Language;
      
      if (lang && SUPPORTED_LANGUAGES.includes(lang as Language)) {
        // Use language from URL
        targetLanguage = lang as Language;
      } else if (lang && !SUPPORTED_LANGUAGES.includes(lang as Language)) {
        // Invalid language in URL, redirect to default
        targetLanguage = DEFAULT_LANGUAGE;
        navigate(`/${targetLanguage}`, { replace: true });
      } else {
        // No language in URL, detect from browser/localStorage
        const savedLanguage = localStorage.getItem('selectedLanguage') as Language;
        const detectedLanguage = detectBrowserLanguage();
        
        targetLanguage = savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage) 
          ? savedLanguage 
          : detectedLanguage;
        
        // Redirect to language-specific URL
        navigate(`/${targetLanguage}`, { replace: true });
      }
      
      // Set the language and load translations
      setCurrentLanguage(targetLanguage);
      await setI18nLanguage(targetLanguage);
      
      // Track page view
      if (typeof posthog !== 'undefined') {
        posthog.capture('mybud_landing_page_view', {
          page: 'index',
          language: targetLanguage,
        });
      }
      
      setIsLoading(false);
    };

    initializeLanguage();
  }, [lang, navigate]);

  // Subscribe to in-memory i18n edits and force rerender
  useEffect(() => {
    const unsubscribe = subscribeI18n(() => setI18nTick(t => t + 1));
    return unsubscribe;
  }, []);

  const changeLanguage = async (newLanguage: Language) => {
    setIsLoading(true);
    const previousLanguage = currentLanguage;
    
    setCurrentLanguage(newLanguage);
    await setI18nLanguage(newLanguage);
    
    // Preserve the current path structure when changing language
    const currentPath = location.pathname;
    const pathSegments = currentPath.split('/').filter(Boolean);
    
    // Remove the current language if it exists and reconstruct the path
    if (pathSegments.length > 0 && SUPPORTED_LANGUAGES.includes(pathSegments[0] as Language)) {
      pathSegments[0] = newLanguage;
    } else {
      pathSegments.unshift(newLanguage);
    }
    
    const newPath = '/' + pathSegments.join('/');
    navigate(newPath, { replace: true });
    
    // Track language change
    if (typeof posthog !== 'undefined') {
      posthog.capture('language_changed', {
        new_language: newLanguage,
        previous_language: previousLanguage,
        path: newPath
      });
    }
    
    setIsLoading(false);
  };

  // i18nTick is unused in value; its state update triggers rerenders of children
  // Read it to satisfy TS noUnusedLocals without affecting behavior
  void i18nTick;
  return (
    <LanguageContext.Provider value={{ 
      currentLanguage, 
      changeLanguage, 
      isLoading 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};