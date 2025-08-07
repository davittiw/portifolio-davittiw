import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from '/locales/en.json';
import ptTranslation from '/locales/pt.json';

const resources = {
  en: {
    translation: enTranslation,
  },
    pt: {
    translation: ptTranslation,
  },
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources,
      lng: 'pt', // default language
      fallbackLng: 'en', // fallback language if the current language translation is not available
      interpolation: {
        escapeValue: false, // react already does escaping
        },
        react: {
            wait: true, // wait for translations to be loaded before rendering
        },
    });

export default i18n;