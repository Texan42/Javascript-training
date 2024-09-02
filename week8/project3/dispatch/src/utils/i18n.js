import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../utils/locales/en/translationEN.json";
import translationSP from "../utils/locales/sp/translationSP.json";

//tranlations

const resources = {
  en: {
    translation: translationEN,
  },
  sp: {
    translation: translationSP,
  },
};

i18n
  .use(initReactI18next)

  .init({
    resources,
    lng: "en",

    keySeparator: false,

    interpoloation: {
      escapeValue: false,
    },
  });

export default i18n;
