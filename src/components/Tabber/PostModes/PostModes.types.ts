import { PostMode } from '~services/api/social-media/social-media.types';
import { AccountPost } from '~stores/useAccountStore/useAccountStore.types';

export type PostModesProps = {
  currentPostModeId: PostMode['id'];
  currentTab: AccountPost;
  onChangePostMode: (postMode: PostMode) => void;
};

export type SelectedPostMode = Partial<
  Record<AccountPost['id'], PostMode['id'][]>
>;

