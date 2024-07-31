import { create } from 'zustand';

import {
  AccountPost,
  MainContent,
  TStoreAccountStore,
} from '~stores/useAccountStore/useAccountStore.types';

export const useAccountStore = create<TStoreAccountStore>((set) => ({
  accounts: [],

  addAccount: (account: AccountPost): void => {
    set((state) => ({
      accounts: [
        ...state.accounts,
        {
          id: account.id,
          socialMediaId: account.socialMediaId,
          userName: account.userName,
        },
      ],
    }));
  },

  mainComposerContent: {},

  removeAccount: (accountId: string): void => {
    set((state) => ({
      accounts: state.accounts.filter((account) => account.id !== accountId),
    }));
  },

  updateMainComposerContent: (contentToUpdate: MainContent): void =>
    set((state) => ({
      mainComposerContent: { ...state.mainComposerContent, ...contentToUpdate },
    })),
}));
