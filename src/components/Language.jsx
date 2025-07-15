import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Language() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(newLang);
    setLanguage(newLang);
  };

  useEffect(() => {
    setLanguage(i18n.language || 'en');
  }, [i18n.language]);

  return (
    <button
      onClick={toggleLanguage}
      
    >
      {language === 'en' ? 'pt-br' : 'en-us'}
    </button>
  );
}
