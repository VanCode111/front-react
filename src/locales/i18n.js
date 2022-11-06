import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en';
import ru from './ru';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
              translations: en,
            },
            ru: {
              translations: ru,
            }
        },
        fallbackLng: "en",
        debug: true,
        lng: 'ru',
    
        // have a common namespace used around the full app
        ns: ["translations"],
        defaultNS: "translations",
    
        interpolation: {
        escapeValue: false
        },
    })
