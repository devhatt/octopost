import { Account } from '~services/api/accounts/accounts.types';
import {
  PostMode,
  SocialMedia,
} from '~services/api/social-media/social-media.types';
import { DataPost } from '~stores/usePostStore/usePostStore.types';

export type PostModesProps = {
  changePostModeId: (postModeId: PostMode['id']) => void;
  postId: DataPost['id'];
  postModeId: PostMode['id'];
  socialMediaId: SocialMedia['id'];
};

export type SelectedPostMode = Partial<Record<Account['id'], PostMode['id'][]>>;

export type PostModeProps = {
  changeCheckBox: (postModeId: PostMode['id'], isChecked: boolean) => void;
  changePostMode: (postModeId: PostMode['id']) => void;
  isChecked: (postModeId: PostMode['id']) => boolean;
  onClickPostMode: (tabElement: HTMLElement) => void;
  postMode: PostMode;
  postModeClasses: (postModeId: PostMode['id']) => string;
};
