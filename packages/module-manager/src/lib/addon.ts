import { global } from '@devhatt/global';

type Addon = any;

export class AddonStore {
  private collection: Record<string, Addon> = {};
  private loaders: Record<string, Function> = {};

  getAddons() {}

  add(id: string, addon: Addon): void {
    this.collection[id] = { ...addon, id };
  }

  loadAddons = () => {
    Object.values(this.loaders).forEach((value: any) => value());
  };
}

// Enforce addons store to be a singleton
const KEY = '__OCTOPOST_ADDONS_MANAGER__';

function getAddonsStore(): AddonStore {
  if (!global[KEY]) {
    global[KEY] = new AddonStore();
  }
  return global[KEY];
}

export const addons = getAddonsStore();
