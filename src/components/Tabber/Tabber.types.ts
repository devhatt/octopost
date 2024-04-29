import { Account } from '~services/api/accounts/accounts.types';
import { SocialMedia } from '~services/api/social-media/social-media.types';

export type TabId = `${Account['socialMediaId']}-${SocialMedia['id']}`;

export type Tab = {
  account: Account;
  id: TabId;
  postModeOnView: SocialMedia['postModes'][number]['id'];
  posts: Record<
    SocialMedia['postModes'][number]['id'],
    Partial<{ text: string }>
  >;
};

export type Tabs = Record<TabId, Tab>;
