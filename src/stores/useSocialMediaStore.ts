/* eslint-disable unicorn/no-await-expression-member -- fix meant to be added on a task on future*/
/* eslint-disable @typescript-eslint/no-empty-function -- Comments added let the function addAccounts be there without lint errors*/

import { create } from 'zustand';

import { AccountsService } from '~services/api/accounts/accounts';
import { SocialMediaService } from '~services/api/social-media/social-media';
import { SocialMedia } from '~services/api/social-media/social-media.types';
import { MultiMap } from '~utils/multimap/multimap';

import { SocialMediaState, StoreAccount } from './useSocialMediaStore.types';

export const useSocialMediaStore = create<SocialMediaState>((set) => ({
  accounts: [],
  // TODO: Implement addAccount based on the examples of service communication
  addAccount: async (): Promise<void> => {},
  getAllAccounts: async (): Promise<void> => {
    const accounts = await AccountsService.fetchAll();
    const userSocialMedias = new Set<string>();
    const accountsBySocialMedia = new MultiMap<StoreAccount>();

    for (const account of accounts) {
      userSocialMedias.add(account.socialMediaId);
      accountsBySocialMedia.add(account.socialMediaId, {
        ...account,
        valid: false,
      });
    }

    //  TODO: isso aqui ta uma porcaria, arrumar
    const socialMedias = (
      await SocialMediaService.fetch(Array.from(userSocialMedias))
    ).reduce<Map<SocialMedia['id'], SocialMedia>>((acc, socialMedia) => {
      acc.set(socialMedia.id, socialMedia);
      return acc;
    }, new Map());

    set(() => ({ socialMedias: socialMedias }));
    set(() => ({ accounts: accountsBySocialMedia.toArray() }));
  },
  socialMedias: new Map<string, SocialMedia>(),
}));

export const socialMediaStore = useSocialMediaStore.getState();
