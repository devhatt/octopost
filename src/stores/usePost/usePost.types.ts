import { Account } from "~services/api/accounts/accounts.types";
import { PostMode, SocialMedia } from "~services/api/social-media/social-media.types";
import { StoreAccount } from "~stores/useSocialMediaStore/useSocialMediaStore.types";

import { IMedia } from "~components/MainComposer/components/InputMediaGroup/components/InputMedia/InputMedia.types";

export type MainContent = {
  medias?: IMedia[];
  text?: string;
};

export type PostModes = Record<PostMode['id'], MainContent>

export type DataPost = {
  accountId: Account['id']
  id: string,
  postModes: PostModes,
  socialMediaId: SocialMedia['id'],
}

export type PostStore = {
  add: (account: StoreAccount, postsModes: PostMode[]) => void;
  posts: Record<string, DataPost>;
  remove: (id: string) => void
};