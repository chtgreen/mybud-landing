// Supported languages
export const SUPPORTED_LANGUAGES = ['pt', 'en', 'es'] as const;
export type Language = typeof SUPPORTED_LANGUAGES[number];

// Default language
export const DEFAULT_LANGUAGE: Language = 'pt';

// Current language state
let currentLanguage: Language = DEFAULT_LANGUAGE;
let loadedTranslations: Record<string, any> = {};

// Load translations for a specific language
const loadTranslations = async (lang: Language): Promise<Record<string, any>> => {
  try {
    const response = await import(`../locales/${lang}.json`);
    return response.default || response;
  } catch (error) {
    console.warn(`Failed to load translations for ${lang}, falling back to ${DEFAULT_LANGUAGE}`);
    if (lang !== DEFAULT_LANGUAGE) {
      return loadTranslations(DEFAULT_LANGUAGE);
    }
    return {};
  }
};

// Detect browser language
export const detectBrowserLanguage = (): Language => {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE;
  
  const browserLang = navigator.language.split('-')[0] as Language;
  return SUPPORTED_LANGUAGES.includes(browserLang) ? browserLang : DEFAULT_LANGUAGE;
};

// Get current language
export const getCurrentLanguage = (): Language => currentLanguage;

// Set current language and load translations
export const setCurrentLanguage = async (lang: Language): Promise<void> => {
  currentLanguage = lang;
  loadedTranslations = await loadTranslations(lang);
  
  if (typeof window !== 'undefined') {
    localStorage.setItem('selectedLanguage', lang);
    document.documentElement.lang = lang;
  }
};

// Initialize language from localStorage or browser detection
export const initializeLanguage = async (): Promise<Language> => {
  if (typeof window === 'undefined') {
    await setCurrentLanguage(DEFAULT_LANGUAGE);
    return DEFAULT_LANGUAGE;
  }
  
  const savedLanguage = localStorage.getItem('selectedLanguage') as Language;
  const detectedLanguage = detectBrowserLanguage();
  
  const initialLanguage = savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage) 
    ? savedLanguage 
    : detectedLanguage;
  
  await setCurrentLanguage(initialLanguage);
  return initialLanguage;
};

// Global content override for B2B context
let contentOverride: Record<string, any> | null = null;

// Set content override (used by B2B page)
export const setContentOverride = (override: Record<string, any> | null): void => {
  contentOverride = override;
};

// Helper to check if a content override is active (B2B context)
export const hasContentOverride = (): boolean => contentOverride !== null;

// Translation function with content override support
export const t = (key: string, lang?: Language): string => {
  // Check for content override first (B2B context)
  if (contentOverride) {
    const keys = key.split('.');
    let value: any = contentOverride;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        value = null;
        break;
      }
    }
    
    if (typeof value === 'string') {
      return value;
    }
  }
  
  // Fall back to regular translations
  const targetLang = lang || currentLanguage;
  
  // If requesting a different language than currently loaded, return key as fallback
  if (targetLang !== currentLanguage && Object.keys(loadedTranslations).length === 0) {
    console.warn(`Translations for ${targetLang} not loaded, using key as fallback: ${key}`);
    return key;
  }
  
  // Navigate through nested object using dot notation
  const keys = key.split('.');
  let value: any = loadedTranslations;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // Key not found, return key itself as fallback
      console.warn(`Translation key not found: ${key} for language: ${currentLanguage}`);
      return key;
    }
  }
  
  // Return the final value if it's a string
  if (typeof value === 'string') {
    return value;
  }
  
  // If all else fails, return the key
  console.warn(`Translation not found for key: ${key}, language: ${targetLang}`);
  return key;
};

// Get language name for display
export const getLanguageName = (lang: Language): string => {
  const names = {
    pt: 'Português',
    en: 'English', 
    es: 'Español'
  };
  return names[lang];
};

// Get language flag emoji
export const getLanguageFlag = (lang: Language): string => {
  const flags = {
    pt: '🇧🇷',
    en: '🇺🇸',
    es: '🇪🇸'
  };
  return flags[lang];
};