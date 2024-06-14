import { initReactI18next } from 'react-i18next';

import { use } from 'i18next';

import ENUS from './locales/en/en-us.json';
import PTBR from './locales/pt/pt-br.json';

const resources = {
  'en-us': ENUS,
  'pt-BR': PTBR,
};
void use(initReactI18next).init({
  interpolation: {
    escapeValue: false,
  },
  lng: navigator.language,
  resources,
});

export { default } from 'i18next';
