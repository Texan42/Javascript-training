import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                "Welcome": "Welcome",
                "English": "English",
                "Spanish": "Spanish"
            }
        },
        es: {
            translation: {
                "Welcome": "bienvenido",
                "English": "inglés",
                "Spanish": "español"
            }
        }
    },
    fallbackLng: 'en'
});

export default i18n;