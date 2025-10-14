// Supported languages
export const SUPPORTED_LANGUAGES = ['pt', 'en', 'es'] as const;
export type Language = typeof SUPPORTED_LANGUAGES[number];

// Default language
export const DEFAULT_LANGUAGE: Language = 'pt';

// Namespace for content contexts
export type ContentNamespace = 'b2c' | 'b2b';
let currentNamespace: ContentNamespace = 'b2c';

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

// Get/Set namespace
export const getCurrentNamespace = (): ContentNamespace => currentNamespace;
export const setCurrentNamespace = (ns: ContentNamespace): void => {
  currentNamespace = ns;
};
export const isB2B = (): boolean => currentNamespace === 'b2b';

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

// Access currently loaded translations
export const getLoadedTranslations = (): Record<string, any> => loadedTranslations;

// Translation function that resolves within the current namespace first
export const t = (key: string, lang?: Language): string => {
  const targetLang = lang || currentLanguage;

  // If requesting a different language than currently loaded, return key as fallback
  if (targetLang !== currentLanguage && Object.keys(loadedTranslations).length === 0) {
    console.warn(`Translations for ${targetLang} not loaded, using key as fallback: ${key}`);
    return key;
  }

  const keys = key.split('.');

  // 1) Try namespaced lookup (b2c/b2b)
  let value: any = loadedTranslations?.[currentNamespace];
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      value = undefined;
      break;
    }
  }
  if (typeof value === 'string') return value;

  // 2) Secondary fallback to b2c namespace for shared strings
  value = loadedTranslations?.['b2c'];
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      value = undefined;
      break;
    }
  }
  if (typeof value === 'string') return value;

  // 3) Fallback to root (backward-compat, while migrating)
  value = loadedTranslations;
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      value = undefined;
      break;
    }
  }
  if (typeof value === 'string') return value;

  console.warn(`Translation not found for key: ${key}, language: ${targetLang}, namespace: ${currentNamespace}`);
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

// Live update support for in-memory translations (for on-page copy editing)
const i18nListeners = new Set<() => void>();
export const subscribeI18n = (listener: () => void): (() => void) => {
  i18nListeners.add(listener);
  return () => i18nListeners.delete(listener);
};
const notifyI18nUpdate = () => {
  // Notify internal subscribers
  for (const cb of Array.from(i18nListeners)) {
    try { cb(); } catch { /* no-op */ }
  }
  // Also emit a DOM event for any external tools
  if (typeof window !== 'undefined') {
    try { window.dispatchEvent(new CustomEvent('i18n:updated')); } catch { /* no-op */ }
  }
};

const deepMerge = (target: any, source: any) => {
  if (!source || typeof source !== 'object') return target;
  for (const key of Object.keys(source)) {
    const sVal = source[key];
    if (sVal && typeof sVal === 'object' && !Array.isArray(sVal)) {
      if (!target[key] || typeof target[key] !== 'object') target[key] = {};
      deepMerge(target[key], sVal);
    } else {
      target[key] = sVal;
    }
  }
  return target;
};

// Apply partial edits to current namespace (e.g., from CopyEditor) and notify subscribers
export const applyNamespaceEdits = (partial: Record<string, any>) => {
  if (!loadedTranslations) loadedTranslations = {};
  if (!loadedTranslations[currentNamespace] || typeof loadedTranslations[currentNamespace] !== 'object') {
    loadedTranslations[currentNamespace] = {};
  }
  deepMerge(loadedTranslations[currentNamespace], partial);
  notifyI18nUpdate();
};
