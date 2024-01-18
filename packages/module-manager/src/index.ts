export * from './types';

import { Manager } from './manager';

export const manager = new Manager();

window.$$manager = manager;
