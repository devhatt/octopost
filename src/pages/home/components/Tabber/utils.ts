import { SocialMedia } from '~services/api/social-media/social-media.types';
import { Post } from '~stores/usePostStore/usePostStore.types';
import { SocialMediaState } from '~stores/useSocialMediaStore/useSocialMediaStore.types';

import { Tab, TabId, Tabs } from './Tabber.types';

export const getFirstPostModeId = (
  socialMedia: SocialMedia
): SocialMedia['postModes'][number]['id'] => {
  if (socialMedia.postModes.length === 0) {
    throw new Error('Invalid social media or no post modes available');
  }

  return socialMedia.postModes[0].id;
};

export const createTabId = (account: Post): TabId =>
  `${account.accountId}-${account.socialMediaId}`;

export const postToTab = (
  accounts: Post[],
  socialMedias: SocialMediaState['socialMedias']
): Record<TabId, Tab> =>
  accounts.reduce<Tabs>((acc, account) => {
    const tabId = createTabId(account);
    const socialMedia = socialMedias.get(account.socialMediaId);

    if (!socialMedia) throw new Error('No social media found for the account');

    const postModeOnView = getFirstPostModeId(socialMedia);

    acc[tabId] = {
      account,
      id: tabId,
      postModeOnView,
      postModes: {
        [postModeOnView]: { text: '' },
      },
    };

    return acc;
  }, {});
