import { create } from 'zustand';

import {
  TAccountPost,
  TStoreAccountStore,
} from '~stores/useAccountStore/useAccountStore.types';

import { IMedia } from '~components/MainComposer/components/InputMediaGroup/components/InputMedia/InputMedia.types';

export const useAccountStore = create<TStoreAccountStore>((set) => ({
  accounts: [],

  addAccount: (account: TAccountPost): void => {
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

  clearMainContentImage: (): void => set({ mainContentImage: null }),

  mainContent: '',
  mainContentImage: null,

  removeAccount: (accountId: string): void => {
    set((state) => ({
      accounts: state.accounts.filter((account) => account.id !== accountId),
    }));
  },
  updateMainContent: (newContent: string): void =>
    set({ mainContent: newContent }),
  updateMainContentImage: (images: IMedia[]): void =>
    set({ mainContentImage: images }),
}));
