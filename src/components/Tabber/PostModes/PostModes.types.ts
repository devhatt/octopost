import {
  PostMode,
  SocialMedia,
} from '~services/api/social-media/social-media.types';
import { TAccountPost } from '~stores/useAccountStore/useAccountStore.types';

export type PostModesProps = {
  currentPostModeId: SocialMedia['postModes'][number]['id'];
  currentTab: TAccountPost;
  onChangePostMode: (postMode: PostMode) => void;
};
