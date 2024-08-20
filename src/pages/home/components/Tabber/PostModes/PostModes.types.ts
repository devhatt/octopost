import {
  PostMode,
  SocialMedia,
} from '~services/api/social-media/social-media.types';
import { DataPost } from '~stores/usePost/usePost.types';

export type PostModesProps = {
  changePostModeId: (postModeId: PostMode['id']) => void;
  postId: DataPost['id'];
  postModeId: PostMode['id'] | undefined;
  socialMediaId: SocialMedia['id'];
};
