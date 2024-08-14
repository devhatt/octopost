import { PostMode } from '~services/api/social-media/social-media.types';
import { DataPost } from '~stores/usePost/usePost.types';

export type PostModesProps = {
  postId: DataPost['id'];
  postModeId: PostMode['id'] | undefined;
};
