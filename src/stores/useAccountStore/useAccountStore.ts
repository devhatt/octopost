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

  MainContent: {
    medias: [],
    text: '',
  },

  removeAccount: (accountId: string): void => {
    set((state) => ({
      accounts: state.accounts.filter((account) => account.id !== accountId),
    }));
  },

  updateMainContent: (contentToUpdate: MainContent): void =>
    set((state) => ({
      MainContent: { ...state.MainContent, ...contentToUpdate },
    })),
}));
