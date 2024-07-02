/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
// @ts-nocheck
import { Account } from '~services/api/accounts/accounts.types';
import { SocialMedia } from '~services/api/social-media/social-media.types';
import { AccountPost } from '~stores/useAccountStore';
import { SocialMediaState } from '~stores/useSocialMediaStore/useSocialMediaStore.types';

import { Tab, TabId, Tabs } from './Tabber.types';

export const getFirstPostModeId = (
  socialMedia: SocialMedia
): SocialMedia['postModes'][number]['id'] => {
  if (!socialMedia.postModes || socialMedia.postModes.length === 0) {
    throw new Error('Invalid social media or no post modes available');
  }
  return socialMedia.postModes[0].id;
};

export const createTabId = (account: Account): TabId => {
  if (!account) throw new Error('Account is required to create a TabId');
  return `${account.id}-${account.socialMediaId}`;
};

export const accountsToTabs = (
  accounts: AccountPost[],
  socialMedias: SocialMediaState['socialMedias']
): Record<TabId, Tab> => {
  if (!accounts || accounts.length === 0) {
    return {};
  }

  return accounts.reduce<Tabs>((acc, account) => {
    const tabId = createTabId(account as Account);
    const socialMedia = socialMedias.get(account.socialMediaId);
    if (!socialMedia) throw new Error('No social media found for the account');

    const postModeOnView = getFirstPostModeId(socialMedia);

    acc[tabId] = {
      account,
      id: tabId,
      postModeOnView,
      posts: {
        [postModeOnView]: { text: '' },
      },
    };

    return acc;
  }, {});
};
