import { useState, useEffect } from 'react';
import { Language } from '../types';

const languages: Language[] = [
  { code: 'en', name: 'English', direction: 'ltr' },
  { code: 'fa', name: 'فارسی', direction: 'rtl' }
];

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('johari-language');
    return languages.find(lang => lang.code === saved) || languages[0];
  });

  useEffect(() => {
    localStorage.setItem('johari-language', currentLanguage.code);
    document.documentElement.dir = currentLanguage.direction;
    document.documentElement.lang = currentLanguage.code;
    document.body.className = currentLanguage.direction;
  }, [currentLanguage]);

  const switchLanguage = (langCode: 'en' | 'fa') => {
    const language = languages.find(lang => lang.code === langCode);
    if (language) {
      setCurrentLanguage(language);
    }
  };

  return {
    currentLanguage,
    languages,
    switchLanguage,
    isRTL: currentLanguage.direction === 'rtl'
  };
};