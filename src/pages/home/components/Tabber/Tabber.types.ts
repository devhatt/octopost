import { SocialMedia } from '~services/api/social-media/social-media.types';
import { DataPost } from '~stores/usePost/usePost.types';

export type Tab = {
  id: string;
  postId: DataPost['id'];
  postModeId: SocialMedia['postModes'][number]['id'];
};

export type Tabs = Record<Tab['id'], Tab>;