/* eslint-disable @typescript-eslint/no-empty-function */

import { create } from 'zustand';

import { octopostApi } from '~services/api';
import { AccountsService } from '~services/api/accounts/accounts';
import { SocialMediaService } from '~services/api/social-media/social-media';
import { SocialMedia } from '~services/api/social-media/social-media.types';
import { GenericObject } from '~types/object';

import { Tab, Tabs } from '~components/Tabber/Tabber.types';

import { SocialMediaState, StoreAccount } from './useSocialMediaStore.types';

export const useSocialMediaStore = create<SocialMediaState>((set) => ({
  accounts: {
    data: [],
    error: '',
    loading: false,
  },

  addAccount: async (newAccount: StoreAccount): Promise<GenericObject> => {
    set((state) => ({ accounts: { ...state.accounts, loading: true } }));

    const res = await octopostApi.post('/accounts', newAccount);
    set((state) => ({
      accounts: {
        ...state.accounts,
        data: [...state.accounts.data, res.data],
        loading: false,
      },
    }));
    return res.data;
  },

  getAllAccounts: async (): Promise<void> => {
    set((state) => ({ accounts: { ...state.accounts, loading: true } }));

    const fetchedAccounts = await AccountsService.fetchAll();

    const userSocialMedias: string[] = [];
    const accountsBySocialMedia: StoreAccount[] = [];

    for (const account of fetchedAccounts) {
      userSocialMedias.push(account.socialMediaId);
      accountsBySocialMedia.push({
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

  posts: {
    data: {},
    error: '',
    loading: false,
  },

  sendPosts: async (tabs: Tabs): Promise<void> => {
    const postsToBeSent = Object.values(tabs).map((tab: Tab) => {
      const { socialMediaId } = tab.account;
      return Object.entries(tab.posts).map(([postModeId, data]) => ({
        data,
        postModeId,
        socialMediaId,
      }));
    });

    const posts = postsToBeSent.flat();

    set((state) => ({ posts: { ...state.posts, loading: true } }));
    await SocialMediaService.sendPosts(posts);
  },
  socialMedias: new Map<string, SocialMedia>(),
}));

void useSocialMediaStore.getState().getAllAccounts();
