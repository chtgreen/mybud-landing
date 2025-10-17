type TranslationLeaf = string | TranslationTree;
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
export type ContentNamespace = 'b2c' | 'b2b';
let currentNamespace: ContentNamespace = 'b2c';

// Current language state
let currentLanguage: Language = DEFAULT_LANGUAGE;
let loadedTranslations: TranslationTree = {};

// Load translations for a specific language
const loadTranslations = async (lang: Language): Promise<TranslationTree> => {
  try {
    const response = await import(`../locales/${lang}.json`);
    const data = (response.default || response) as unknown;
    return isTranslationTree(data) ? (data as TranslationTree) : {};
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

  const b2cTree = isTranslationTree(loadedTranslations.b2c)
    ? (loadedTranslations.b2c as TranslationTree)
    : undefined;
  const b2cValue = resolveTranslation(b2cTree, keys);
  if (typeof b2cValue === 'string') return b2cValue;

  const fallbackValue = resolveTranslation(loadedTranslations, keys);
  if (typeof fallbackValue === 'string') return fallbackValue;

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
