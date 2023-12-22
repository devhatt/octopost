import type { Manager } from './manager/Manager';

export {};

declare global {
  interface Window {
    $$manager: Manager;
  }
}
