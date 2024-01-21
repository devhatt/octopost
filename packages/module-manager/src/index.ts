import { Manager } from './manager/Manager';

export * from './types';

export const manager = new Manager();

declare global {
  interface Window {
    $$manager: Manager;
  }
}

window.$$manager = manager;
