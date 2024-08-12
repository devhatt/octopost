import { PostMode } from '~services/api/social-media/social-media.types';
import { AccountPost } from '~stores/useAccountStore';

export type PostModesProps = {
  accountSocialMediaId: AccountPost['socialMediaId'];
  changePostModeId: (postModeId: PostMode['id']) => void;
  postModeId: PostMode['id'] | undefined;
};
