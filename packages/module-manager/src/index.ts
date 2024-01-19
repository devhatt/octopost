export * from './types';

import { Manager } from './manager/Manager';

export const manager = new Manager();

declare global {
  interface Window {
    $$manager: Manager;
  }
}

window.$$manager = manager;
