/* eslint-disable @typescript-eslint/no-empty-function */

import { create } from 'zustand';

import { AccountsService } from '~services/api/accounts/accounts';
import { SocialMediaService } from '~services/api/social-media/social-media';
import { SocialMedia } from '~services/api/social-media/social-media.types';
import { MultiMap } from '~utils/multimap/multimap';

import { Tab, Tabs } from '~components/Tabber/Tabber.types';

import { SocialMediaState, StoreAccount } from './useSocialMediaStore.types';

export const useSocialMediaStore = create<SocialMediaState>((set) => ({
  accounts: {
    data: null,
    error: '',
    loading: false,
  },

  addAccount: async (): Promise<void> => { },

  getAllAccounts: async (): Promise<void> => {
    set((state) => ({ accounts: { ...state.accounts, loading: true } }));

    const fetchedAccounts = await AccountsService.fetchAll();

    const userSocialMedias = new Set<string>();
    const accountsBySocialMedia = new MultiMap<StoreAccount>();

    for (const account of fetchedAccounts) {
      userSocialMedias.add(account.socialMediaId);
      accountsBySocialMedia.add(account.socialMediaId, {
        ...account,
        valid: false,
      });
    }

    const fetchedSocialMedias = await SocialMediaService.fetch(
      Array.from(userSocialMedias)
    );

    const fetchedSocialMediasMap = new Map<SocialMedia['id'], SocialMedia>();

    for (const socialMedia of fetchedSocialMedias) {
      fetchedSocialMediasMap.set(socialMedia.id, socialMedia);
    }

    set(() => ({ socialMedias: fetchedSocialMediasMap }));
    set(() => ({
      accounts: {
        data: accountsBySocialMedia.toArray(),
        error: '',
        loading: false,
      },
    }));
  },
  mainContent: '',
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

    const postsWithContent = postsToBeSent
      .flat()
      .filter((post) => post.data.text);
    set((state) => ({ posts: { ...state.posts, loading: true } }));
    await SocialMediaService.sendPosts(postsWithContent);
  },
  socialMedias: new Map<string, SocialMedia>(),
  updateMainContent: (newContent: string): void =>
    set({ mainContent: newContent }),
}));

void useSocialMediaStore.getState().getAllAccounts();
