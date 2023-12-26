/* eslint-disable import/no-named-as-default-member */
import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import ENUS from './locales/en/en-us.json';
import PTBR from './locales/pt/pt-br.json';

const resources = {
  'en-us': ENUS,
  'pt-BR': PTBR,
};

i18n.use(initReactI18next).init({
  interpolation: {
    escapeValue: false,
  },
  lng: navigator.language,
  resources,
});

export { default } from 'i18next';
