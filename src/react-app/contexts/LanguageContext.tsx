import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import posthog from 'posthog-js';
import { 
  Language, 
  SUPPORTED_LANGUAGES, 
  DEFAULT_LANGUAGE, 
  setCurrentLanguage as setI18nLanguage,
  detectBrowserLanguage,
  subscribeI18n,
  hasTranslationsInCache,
  setCurrentNamespace,
  ContentNamespace
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
  const { lang } = useParams<{ lang: string }>();
  const location = useLocation();
  
  // Detect page context from URL BEFORE any state initialization
  const detectNamespace = (pathname: string): ContentNamespace => {
    if (pathname.includes('/industry')) {
      return 'industry';
    } else if (pathname.includes('/collective') || pathname.includes('/b2b') || pathname.includes('/enterprise')) {
      return 'collective';
    } else {
      return 'b2c'; // default for /grower and other routes
    }
  };
  
  // Set namespace immediately based on URL path
  setCurrentNamespace(detectNamespace(location.pathname));
  
  // Determine target language before any state initialization
  let targetLanguage: Language = DEFAULT_LANGUAGE;
  if (lang && SUPPORTED_LANGUAGES.includes(lang as Language)) {
    targetLanguage = lang as Language;
  }
  
  // Check if translations are already in cache - if so, skip loading state
  const hasCachedTranslations = hasTranslationsInCache(targetLanguage);
  
  const [currentLanguage, setCurrentLanguage] = useState<Language>(targetLanguage);
  const [isLoading, setIsLoading] = useState(!hasCachedTranslations);
  const [i18nTick, setI18nTick] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const initializeLanguage = async () => {
      // Get language from URL or detect/fallback
      let finalLanguage: Language;
      let needsRedirect = false;
      
      if (lang && SUPPORTED_LANGUAGES.includes(lang as Language)) {
        // Use language from URL
        finalLanguage = lang as Language;
      } else if (lang && !SUPPORTED_LANGUAGES.includes(lang as Language)) {
        // Invalid language in URL, redirect to default
        finalLanguage = DEFAULT_LANGUAGE;
        needsRedirect = true;
      } else {
        // No language in URL, detect from browser/localStorage
        const savedLanguage = localStorage.getItem('selectedLanguage') as Language;
        const detectedLanguage = detectBrowserLanguage();
        
        finalLanguage = savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage) 
          ? savedLanguage 
          : detectedLanguage;
        
        needsRedirect = true;
      }
      
      // Load translations (will use cache if available)
      await setI18nLanguage(finalLanguage);
      setCurrentLanguage(finalLanguage);
      
      // Redirect if needed
      if (needsRedirect) {
        navigate(`/${finalLanguage}`, { replace: true });
      }
      
      // Track page view
      if (typeof posthog !== 'undefined') {
        posthog.capture('mybud_landing_page_view', {
          page: 'index',
          language: finalLanguage,
        });
      }
      
      setIsLoading(false);
    };

    initializeLanguage();
  }, [lang, navigate]);

  // Update namespace when pathname changes (between different page types)
  useEffect(() => {
    const detectNamespace = (pathname: string): ContentNamespace => {
      if (pathname.includes('/industry')) {
        return 'industry';
      } else if (pathname.includes('/collective') || pathname.includes('/b2b') || pathname.includes('/enterprise')) {
        return 'collective';
      } else {
        return 'b2c'; // default for /grower and other routes
      }
    };
    
    setCurrentNamespace(detectNamespace(location.pathname));
    
    // Force rerender to update translations with new namespace
    setI18nTick(t => t + 1);
  }, [location.pathname]);

  // Subscribe to in-memory i18n edits and force rerender
  useEffect(() => {
    const unsubscribe = subscribeI18n(() => setI18nTick(t => t + 1));
    return unsubscribe;
  }, []);

  const changeLanguage = async (newLanguage: Language) => {
    // Start loading immediately
    setIsLoading(true);
    const previousLanguage = currentLanguage;
    
    // Load translations first before updating state (faster transition)
    await setI18nLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
    
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
    
    // End loading before navigation for smoother transition
    setIsLoading(false);
    
    // Navigate after loading is done
    navigate(newPath, { replace: true });
    
    // Track language change (async, doesn't block)
    if (typeof posthog !== 'undefined') {
      posthog.capture('language_changed', {
        new_language: newLanguage,
        previous_language: previousLanguage,
        path: newPath
      });
    }
  };

  // i18nTick is unused in value; its state update triggers rerenders of children
  // Read it to satisfy TS noUnusedLocals without affecting behavior
  void i18nTick;
  
  // Don't render children until translations are loaded to avoid showing placeholders
  if (isLoading) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        opacity: 1,
        transition: 'opacity 0.15s ease-out'
      }}>
        {/* Minimal loading indicator */}
        <div style={{
          width: '40px',
          height: '40px',
          border: '3px solid #f0f0f0',
          borderTop: '3px solid #288664',
          borderRadius: '50%',
          animation: 'spin 0.6s linear infinite'
        }} />
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }
  
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