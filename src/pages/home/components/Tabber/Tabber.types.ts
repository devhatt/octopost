import { PostMode } from '~services/api/social-media/social-media.types';
import { DataPost } from '~stores/usePostStore/usePostStore.types';

export type Tab = {
  id: string;
  postId: DataPost['id'];
  postModeId: PostMode['id'];
};

export type Tabs = Record<Tab['id'], Tab>;
