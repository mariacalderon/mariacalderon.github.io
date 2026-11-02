import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: 'en',
    keySeparator: '.',
    interpolation: {
      escapeValue: false 
    },
    backend: {
      loadPath: '/locales/{{lng}}.json',
      // Always checks for a newer file, so a deploy never mixes new code with old cached texts.
      requestOptions: { cache: 'no-cache' }
    }
  });

  export default i18n;