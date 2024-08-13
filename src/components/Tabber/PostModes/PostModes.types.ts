import {
  PostMode,
  SocialMedia,
} from '~services/api/social-media/social-media.types';
import { AccountPost } from '~stores/useAccountStore/useAccountStore.types';

export type PostModesProps = {
  currentPostModeId: SocialMedia['postModes'][number]['id'];
  currentTab: AccountPost;
  onChangePostMode: (postMode: PostMode) => void;
};
