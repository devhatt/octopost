import { global } from '@devhatt/global';
import { Addon } from '@models';

export class AddonStore {
  private collection: Record<string, Addon> = {};
  loadAddons = () => {
    Object.values(this.loaders).forEach((value: any) => value());
  };

  private loaders: Record<string, Function> = {};

  add(id: string, addon: Addon): void {
    this.collection[id] = { ...addon, id };
  }

  getAddons() {
    return Object.values(this.collection);
  }
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
