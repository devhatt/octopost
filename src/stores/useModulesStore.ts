import { create } from 'zustand';

import { accountDatabase } from '~services/account-database/account-database';
import { ModsService } from '~services/addons/addon/mods';
import { AccountsService } from '~services/api/accounts/accounts';
import { Account } from '~services/api/accounts/accounts.types';

import { ModulesState } from './useModulesStore.types';
import { MultiMap } from '~utils/multimap/multimap';

export const useModulesStore = create<ModulesState>((set) => ({
  accounts: {},
  addAccount: async (addonId: string): Promise<void> => {
    const account = await ModsService.authenticate(addonId);
    accountDatabase.add(account);
  },
  addModule: (): void =>
    set((state) => ({ modules: Array.from(state.modules) })),
  getAllAccounts: async (): Promise<void> => {
    const accounts = await AccountsService.getAll();
    const socialMedias = new Set<string>();
    const accountsBySocialMedia = new MultiMap<Account>();

    for (const account of accounts) {
      socialMedias.add(account.socialMediaId);
      accountsBySocialMedia.add(account.socialMediaId, account);
    }

    set(() => ({ modules: Array.from(socialMedias) }));
    set(() => ({ accounts: accountsBySocialMedia.toObject() }));
  },
  modules: [],
}));

export const moduleStore = useModulesStore.getState();
