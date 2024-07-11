import { create } from 'zustand';

import { octopostApi } from '~services/api';
import { AccountsService } from '~services/api/accounts/accounts';
import { SocialMediaService } from '~services/api/social-media/social-media';
import { SocialMedia } from '~services/api/social-media/social-media.types';

import {
  NewAccount,
  SocialMediaState,
  StoreAccount,
} from './useSocialMediaStore.types';

export const useSocialMediaStore = create<SocialMediaState>((set) => ({
  accounts: {
    data: {},
    error: '',
    loading: false,
  },

  addAccount: async (newAccount: NewAccount): Promise<StoreAccount> => {
    set((state) => ({ accounts: { ...state.accounts, loading: true } }));

    const res = await octopostApi.post('/accounts', newAccount);
    const addedAccount: StoreAccount = { ...res.data, valid: false };

    set((state) => {
      const currentAccounts = state.accounts.data[addedAccount.socialMediaId];
      return {
        accounts: {
          ...state.accounts,
          data: {
            ...state.accounts.data,
            [addedAccount.socialMediaId]: [...currentAccounts, addedAccount],
          },
          loading: false,
        },
      };
    });
    return addedAccount;
  },

  getAllAccounts: async (): Promise<void> => {
    set((state) => ({ accounts: { ...state.accounts, loading: true } }));

    const fetchedAccounts = await AccountsService.fetchAll();

    const userSocialMedias: string[] = [];
    const accountsBySocialMedia: Record<string, StoreAccount[]> = {};

    for (const account of fetchedAccounts) {
      accountsBySocialMedia[account.socialMediaId] =
        accountsBySocialMedia[account.socialMediaId] ?? [];
      accountsBySocialMedia[account.socialMediaId].push({
        ...account,
        valid: false,
      });
    }

    const fetchedSocialMedias =
      await SocialMediaService.fetch(userSocialMedias);

    const fetchedSocialMediasMap = new Map<SocialMedia['id'], SocialMedia>();

    for (const socialMedia of fetchedSocialMedias) {
      fetchedSocialMediasMap.set(socialMedia.id, socialMedia);
    }

    set(() => ({ socialMedias: fetchedSocialMediasMap }));
    set(() => ({
      accounts: {
        data: accountsBySocialMedia,
        error: '',
        loading: false,
      },
    }));
  },

  socialMedias: new Map<string, SocialMedia>(),
}));

void useSocialMediaStore.getState().getAllAccounts();
