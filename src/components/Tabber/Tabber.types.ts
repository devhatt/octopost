import { Account } from '~services/api/accounts/accounts.types';
import {
  Post,
  SocialMedia,
} from '~services/api/social-media/social-media.types';
import { AccountPost } from '~stores/useAccountStore';

export type TabId = `${Account['socialMediaId']}-${SocialMedia['id']}`;

export type Tab = {
  account: AccountPost;
  id: TabId;
  postModeOnView: SocialMedia['postModes'][number]['id'];
  posts: Record<SocialMedia['postModes'][number]['id'], Post['data']>;
};

export type Tabs = Record<TabId, Tab>;
