import { create } from 'zustand';

import { accountDatabase } from '~services/account-database/account-database';
import { ModsService } from '~services/addons/addon/mods';

import { ModulesState } from './useModulesStore.types';

export const useModulesStore = create<ModulesState>((set) => ({
  addAccount: async (addonId: string): Promise<void> => {
    const account = await ModsService.authenticate(addonId);
    accountDatabase.add(account);
  },
  addModule: (): void =>
    set((state) => ({ modules: Array.from(state.modules) })),
  getAll: async (): Promise<void> => {
    const modules = await ModsService.getAll();
    set(() => ({ modules }));
  },  
  getAllAccountsFrom: async (moduleId: string): Promise<any> => {
    const accounts = await accountDatabase.getAllFrom(moduleId);
    return accounts;
  },
  modules: [],
}));
