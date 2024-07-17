import {
  PostMode,
  SocialMedia,
} from '~services/api/social-media/social-media.types';
import { AccountPost } from '~stores/useAccountStore';

export type PostModesProps = {
  currentPostModeId: SocialMedia['postModes'][number]['id'];
  currentTab: AccountPost;
  onChangePostMode: (postMode: PostMode) => void;
};
