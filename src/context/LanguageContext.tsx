import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, TranslationDictionary, translations } from '../i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('medicalsathi_lang');
      if (saved === 'en' || saved === 'or') return saved;
    } catch {
      // ignore
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('medicalsathi_lang', lang);
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    const nextLang = language === 'en' ? 'or' : 'en';
    setLanguage(nextLang);
  };

  const t = translations[language];

  useEffect(() => {
    document.documentElement.lang = language === 'or' ? 'or' : 'en';
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
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
