import { Account } from '~services/api/accounts/accounts.types';
import {
  PostMode,
  SocialMedia,
} from '~services/api/social-media/social-media.types';

export type IPostModesProps = {
  currentPostModeId: SocialMedia['postModes'][number]['id'];
  currentTab: Account;
  onChangePostMode: (postMode: PostMode) => void;
};
