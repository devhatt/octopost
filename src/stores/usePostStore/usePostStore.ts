import { create } from '../zustand';

import { StoreAccount } from '../useSocialMediaStore/useSocialMediaStore.types';
import { PostModeId, PostStoreState } from './usePostStore.types';

export const usePostStore = create<PostStoreState>((set) => ({
  addPost: (account: StoreAccount): void => {
    set((state) => ({
      posts: {
        ...state.posts,
        [account.id]: {
          accountId: account.id,
          postModes: {},
          socialMediaId: account.socialMediaId,
          userName: account.userName,
        },
      },
    }));
  },

  posts: new Map(),

  removePost: (accountId: string): void => {
    set((state) => {
      const posts = new Map(state.posts);
      posts.delete(accountId);
      return { posts };
    });
  },

  setPostText: (
    accountId: string,
    postModeId: PostModeId,
    text: string
  ): void => {
    set((state) => {
      const posts = new Map(state.posts);
      const account = posts.get(accountId);

      if (!account) throw new Error('No account found');

      account.postModes[postModeId] = {
        postModeId,
        text,
      };

      posts.set(accountId, account);

      return { posts };
    });
  },
}));
