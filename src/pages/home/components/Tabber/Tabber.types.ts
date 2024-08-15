import { Account } from '~services/api/accounts/accounts.types';
import { SocialMedia } from '~services/api/social-media/social-media.types';
import { DataPost } from '~stores/usePost/usePost.types';

export type Tab = {
  accountId: Account['id'];
  id: string;
  postId: DataPost['id'];
  postsModeId: SocialMedia['postModes'][number]['id'];
};

export type Tabs = Record<Tab['id'], Tab>;
