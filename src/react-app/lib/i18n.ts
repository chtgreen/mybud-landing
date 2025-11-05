type TranslationLeaf = string | string[] | TranslationTree;
export interface TranslationTree {
  [key: string]: TranslationLeaf;
}

const isTranslationTree = (value: unknown): value is TranslationTree =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const resolveTranslation = (
  tree: TranslationTree | undefined,
  keys: readonly string[]
): TranslationLeaf | undefined => {
  let current: TranslationLeaf | undefined = tree;
  for (const key of keys) {
    if (isTranslationTree(current) && key in current) {
      current = current[key];
    } else {
      return undefined;
    }
  }
  return current;
};

const deepMerge = (target: TranslationTree, source: TranslationTree): TranslationTree => {
  for (const [key, value] of Object.entries(source)) {
    if (isTranslationTree(value)) {
      const existingChild = target[key];
      const baseChild = isTranslationTree(existingChild) ? existingChild : {};
      target[key] = deepMerge({ ...baseChild }, value);
    } else {
      target[key] = value;
    }
  }
  return target;
};

// Supported languages
export const SUPPORTED_LANGUAGES = ['pt', 'en', 'es'] as const;
export type Language = (typeof SUPPORTED_LANGUAGES)[number];

// Default language
export const DEFAULT_LANGUAGE: Language = 'pt';

// Namespace for content contexts
export type ContentNamespace = 'b2c' | 'b2b' | 'industry' | 'collective' | 'enterprise';
let currentNamespace: ContentNamespace = 'b2c';

// Current language state
let currentLanguage: Language = DEFAULT_LANGUAGE;
let loadedTranslations: TranslationTree = {};

// Cache for loaded translations to avoid reloading when navigating between pages
const translationsCache: Map<Language, TranslationTree> = new Map();

// Load translations for a specific language with caching
const loadTranslations = async (lang: Language): Promise<TranslationTree> => {
  // Return from cache if already loaded
  if (translationsCache.has(lang)) {
    return translationsCache.get(lang)!;
  }
  
  try {
    const response = await import(`../locales/${lang}.json`);
    const data = (response.default || response) as unknown;
    const translations = isTranslationTree(data) ? (data as TranslationTree) : {};
    
    // Store in cache for future use
    translationsCache.set(lang, translations);
    
    return translations;
  } catch (err) {
    console.warn(
      `Failed to load translations for ${lang}, falling back to ${DEFAULT_LANGUAGE}`,
      err
    );
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

// Check if translations are cached for a language
export const hasTranslationsInCache = (lang: Language): boolean => {
  return translationsCache.has(lang);
};

// Get/Set namespace
export const getCurrentNamespace = (): ContentNamespace => currentNamespace;
export const setCurrentNamespace = (ns: ContentNamespace): void => {
  currentNamespace = ns;
};
export const isB2B = (): boolean => currentNamespace === 'b2b' || currentNamespace === 'industry';
export const isIndustry = (): boolean => currentNamespace === 'industry';

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
export const getLoadedTranslations = (): TranslationTree => loadedTranslations;

// Translation function that resolves within the current namespace first
export const t = (key: string, lang?: Language): string => {
  const targetLang = lang || currentLanguage;

  // If requesting a different language than currently loaded, return key as fallback
  if (targetLang !== currentLanguage && Object.keys(loadedTranslations).length === 0) {
    console.warn(`Translations for ${targetLang} not loaded, using key as fallback: ${key}`);
    return key;
  }

  const keys = key.split('.');

  const namespaceTree = isTranslationTree(loadedTranslations[currentNamespace])
    ? (loadedTranslations[currentNamespace] as TranslationTree)
    : undefined;
  const namespacedValue = resolveTranslation(namespaceTree, keys);
  if (typeof namespacedValue === 'string') return namespacedValue;
  if (Array.isArray(namespacedValue)) {
    console.warn(
      `Translation array requested with t(): ${key}, language: ${targetLang}, namespace: ${currentNamespace}. ` +
      'Use tArray() instead.'
    );
    return key;
  }

  const b2cTree = isTranslationTree(loadedTranslations.b2c)
    ? (loadedTranslations.b2c as TranslationTree)
    : undefined;
  const b2cValue = resolveTranslation(b2cTree, keys);
  if (typeof b2cValue === 'string') return b2cValue;
  if (Array.isArray(b2cValue)) {
    console.warn(
      `Translation array requested with t(): ${key}, language: ${targetLang}, namespace: ${currentNamespace}. ` +
      'Use tArray() instead.'
    );
    return key;
  }

  const fallbackValue = resolveTranslation(loadedTranslations, keys);
  if (typeof fallbackValue === 'string') return fallbackValue;
  if (Array.isArray(fallbackValue)) {
    console.warn(
      `Translation array requested with t(): ${key}, language: ${targetLang}, namespace: ${currentNamespace}. ` +
      'Use tArray() instead.'
    );
    return key;
  }

  console.warn(`Translation not found for key: ${key}, language: ${targetLang}, namespace: ${currentNamespace}`);
  return key;
};

const resolveArray = (key: string): string[] | undefined => {
  const keys = key.split('.');

  const namespaceTree = isTranslationTree(loadedTranslations[currentNamespace])
    ? (loadedTranslations[currentNamespace] as TranslationTree)
    : undefined;
  const namespacedValue = resolveTranslation(namespaceTree, keys);
  if (Array.isArray(namespacedValue)) return namespacedValue;

  const b2cTree = isTranslationTree(loadedTranslations.b2c)
    ? (loadedTranslations.b2c as TranslationTree)
    : undefined;
  const b2cValue = resolveTranslation(b2cTree, keys);
  if (Array.isArray(b2cValue)) return b2cValue;

  const fallbackValue = resolveTranslation(loadedTranslations, keys);
  if (Array.isArray(fallbackValue)) return fallbackValue;

  return undefined;
};

export const tArray = (key: string, lang?: Language): string[] => {
  const targetLang = lang || currentLanguage;

  if (targetLang !== currentLanguage && Object.keys(loadedTranslations).length === 0) {
    console.warn(`Translations for ${targetLang} not loaded, using empty array fallback: ${key}`);
    return [];
  }

  const value = resolveArray(key);
  if (Array.isArray(value)) return value;

  console.warn(`Translation array not found for key: ${key}, language: ${targetLang}, namespace: ${currentNamespace}`);
  return [];
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

// Get language abbreviation for flag-less display
export const getLanguageFlag = (lang: Language): string => {
  const flags = {
    pt: 'PT',
    en: 'EN',
    es: 'ES'
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

// Apply partial edits to current namespace (e.g., from CopyEditor) and notify subscribers
export const applyNamespaceEdits = (partial: TranslationTree) => {
  if (!loadedTranslations) loadedTranslations = {};
  const existingNamespace = resolveTranslation(loadedTranslations, [currentNamespace]);
  if (!isTranslationTree(existingNamespace)) {
    loadedTranslations[currentNamespace] = {};
  }
  const currentTree = loadedTranslations[currentNamespace] as TranslationTree;
  loadedTranslations[currentNamespace] = deepMerge(currentTree, partial);
  notifyI18nUpdate();
};

// Get app base price from environment variable
export const getAppBasePrice = (): string => {
  const price = Number(import.meta.env.VITE_APP_BASE_PRICE) || 39.90;
  return price.toFixed(2).replace('.', ',');
};
