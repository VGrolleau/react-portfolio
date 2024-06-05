import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';

// i18next config
i18n
    .use(initReactI18next) // Pass i18n to react-i18next
    .init({
        resources: {
            en: {
                translation: translationEN
            },
            fr: {
                translation: translationFR
            }
        },
        lng: 'fr', // Default language
        fallbackLng: 'en', // Backup language
        interpolation: {
            escapeValue: false // React already manages value escape
        }
    });

export default i18n;