import isEmpty from 'lodash.isempty';
import { create } from 'zustand';

import { octopostApi } from '~services/api';
import { AccountsService } from '~services/api/accounts/accounts';
import { Account } from '~services/api/accounts/accounts.types';
import { SocialMediaService } from '~services/api/social-media/social-media';
import { SocialMedia } from '~services/api/social-media/social-media.types';

import {
  NewAccount,
  SocialMediaData,
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

      const newAccounts = currentAccounts ?? [addedAccount];

      return {
        accounts: {
          ...state.accounts,
          data: {
            ...state.accounts.data,
            [addedAccount.socialMediaId]: newAccounts,
          },
          loading: false,
        },
      };
    });

    return addedAccount;
  },

  favoriteAccount: async (
    accountId: Account['id'],
    favorite: boolean
  ): Promise<Account | undefined> =>
    AccountsService.favorite(accountId, favorite),

  favoriteAccounts: [],

  getAllAccounts: async (): Promise<void> => {
    set((state) => ({ accounts: { ...state.accounts, loading: true } }));

    const fetchedAccounts: Account[] = await AccountsService.fetchAll();

    const userSocialMedias: string[] = [];
    const accountsBySocialMedia: SocialMediaData = {
      data: {},
    };
    let favoriteSocialMedias: StoreAccount[] = [];

    accountsBySocialMedia.data = fetchedAccounts.reduce(
      (agg, account) => ({
        ...agg,
        [account.socialMediaId]: [
          ...(agg[account.socialMediaId] ?? []),
          {
            ...account,
            valid: true,
          },
        ],
      }),
      accountsBySocialMedia.data
    );

    if (!isEmpty(accountsBySocialMedia.data)) {
      favoriteSocialMedias = Object.values(accountsBySocialMedia.data)
        .flat()
        .filter(
          (socialMedia): socialMedia is StoreAccount =>
            socialMedia?.favorite === true
        );
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
        data: accountsBySocialMedia.data,
        error: '',
        loading: false,
      },
    }));
    set(() => ({
      favoriteAccounts: favoriteSocialMedias,
    }));
  },

  socialMedias: new Map<string, SocialMedia>(),
}));

void useSocialMediaStore.getState().getAllAccounts();
