import { create } from 'zustand';

import { ModulesState } from './useModulesStore.types';

export const useModulesStore = create<ModulesState>((set) => ({
  addModule: (module): void =>
    set((state) => ({ modules: [...state.modules, module] })),
  modules: [],
}));
