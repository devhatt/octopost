import { PostMode } from '~services/api/social-media/social-media.types';
import { StoreAccount } from '~stores/useSocialMediaStore/useSocialMediaStore.types';

export type PostModeId = PostMode['id'];
export type AccountId = StoreAccount['id'];
export type Post = Pick<StoreAccount, 'socialMediaId' | 'userName'> & {
  accountId: AccountId;
  postModes: Record<
    string,
    {
      postModeId: PostModeId;
      text: string;
    }
  >;
};

export type Posts = Map<AccountId, Post>;

export type PostStoreState = {
  addPost: (account: StoreAccount) => void;
  posts: Posts;
  removePost: (accountId: AccountId) => void;
  setPostText: (
    accountId: AccountId,
    postModeId: PostModeId,
    text: string
  ) => void;
};
