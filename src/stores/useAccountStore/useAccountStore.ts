import { create } from 'zustand';

import {
  AccountPost,
  mainContent,
  StoreAccountStore,
} from '~stores/useAccountStore/useAccountStore.types';

export const useAccountStore = create<StoreAccountStore>((set) => ({
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

  mainContent: {
    medias: [],
    text: '',
  },

  removeAccount: (accountId: string): void => {
    set((state) => ({
      accounts: state.accounts.filter((account) => account.id !== accountId),
    }));
  },

  updateMainContent: (contentToUpdate: mainContent): void =>
    set((state) => ({
      mainContent: { ...state.mainContent, ...contentToUpdate },
    })),
}));
