import { create } from 'zustand';

import { ModsService } from '~services/addons/addon/mods';
import { AuthenticationService } from '~services/addons/authentication/authentication';

import { ModulesState } from './useModulesStore.types';

export const useModulesStore = create<ModulesState>((set) => ({
  addAccount: async (addonId: string): Promise<void> => {
    const account = await AuthenticationService.authenticate(addonId);
    //  TODO: fazer o store dos dados do usuário no indexDB
  },
  addModule: (): void =>
    set((state) => ({ modules: Array.from(state.modules) })),
  getAll: async (): Promise<void> => {
    const modules = await ModsService.getAll();
    set(() => ({ modules }));
  },
  modules: [],
}));
