import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

import { en } from './locales/en';
import { vi } from './locales/vi';
import type { Language, Translations } from './types';

interface I18nContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
}

const STORAGE_KEY = 'orca_landing_lang';

const dictionaries: Record<Language, Translations> = {
  vi,
  en,
};

const I18nContext = createContext<I18nContextValue | null>(null);

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'vi';

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'vi' || saved === 'en') {
      return saved;
    }
  } catch {
    // ignore localStorage errors
  }

  // Fallback to browser language
  const browserLang = navigator.language.toLowerCase();
  return browserLang.startsWith('vi') ? 'vi' : 'en';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore localStorage errors
    }
    // Update html lang attribute
    document.documentElement.lang = lang;
  };

  const toggleLanguage = () => {
    setLanguage(language === 'vi' ? 'en' : 'vi');
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value: I18nContextValue = {
    language,
    setLanguage,
    toggleLanguage,
    t: dictionaries[language],
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return ctx;
}
