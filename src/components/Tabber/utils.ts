import { Account } from '~services/api/accounts/accounts.types';
import { SocialMedia } from '~services/api/social-media/social-media.types';
import { SocialMediaState } from '~stores/useSocialMediaStore.types';

import { Tab, TabId, Tabs } from './Tabber.types';

export const getFirstPostModeId = (
  socialMedia: SocialMedia
): SocialMedia['postModes'][number]['id'] => socialMedia.postModes[0].id;

export const createTabId = (account: Account): TabId =>
  `${account.id}-${account.socialMediaId}`;

export const accountsToTabs = (
  accounts: Account[],
  socialMedias: SocialMediaState['socialMedias']
): Record<TabId, Tab> =>
  accounts.reduce<Tabs>((acc, account) => {
    const tabId = createTabId(account);
    const socialMedia = socialMedias.get(account.socialMediaId);
    if (!socialMedia) throw new Error('No social media found');

    const postModeOnView = getFirstPostModeId(socialMedia);

    acc[tabId] = {
      account,
      id: tabId,
      postModeOnView,
      posts: {
        [postModeOnView]: {},
      },
    };

    return acc;
  }, {});
