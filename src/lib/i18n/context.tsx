'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export type Language = 'ja' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (ja: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ja');

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === 'ja' ? 'en' : 'ja'));
  }, []);

  const t = useCallback(
    (ja: string, en: string) => (language === 'ja' ? ja : en),
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
