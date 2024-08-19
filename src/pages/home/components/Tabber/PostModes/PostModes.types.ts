import { PostMode } from '~services/api/social-media/social-media.types';
import { DataPost } from '~stores/usePost/usePost.types';

import { Tab } from '../Tabber.types';

export type PostModesProps = {
  changePostModeId: (postModeId: PostMode['id']) => void
  postId: DataPost['id'];
  postModeId: PostMode['id'] | undefined;
};
