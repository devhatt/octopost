import { Account } from '~services/api/accounts/accounts.types';
import {
  PostMode,
  SocialMedia,
} from '~services/api/social-media/social-media.types';
import { StoreAccount } from '~stores/useSocialMediaStore/useSocialMediaStore.types';

import { Media } from '~components/MainComposer/components/InputMediaGroup/components/InputMedia/InputMedia.types';

export type MainContent = {
  medias?: Media[];
  text?: string;
};

export type PostModes = Record<PostMode['id'], MainContent>;

export type DataPost = {
  accountId: Account['id'];
  id: string;
  postModes: PostModes;
  socialMediaId: SocialMedia['id'];
};

type UpdateText = {
  postId: DataPost['id'];
  postModeId: PostMode['id'];
  text: string;
};

export type PostStore = {
  add: (account: StoreAccount, postsModes: PostMode[]) => void;
  mainContent: string;
  posts: Record<string, DataPost>;
  remove: (postId: string) => void;
  updateMainContent: (newContent: string) => void;
  updateText: ({ postId, postModeId, text }: UpdateText) => void;
};
