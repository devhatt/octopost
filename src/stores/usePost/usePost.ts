import { nanoid } from 'nanoid';

import { StoreAccount } from '~stores/useSocialMediaStore/useSocialMediaStore.types';

import { create } from '../zustand';

import { PostModes, PostStore } from './usePost.types';

export const usePostStore = create<PostStore>((set) => ({
  addPost: (account, postsModes): void => {

    const id = nanoid();
    const postModes = postsModes.reduce<PostModes>((acc, postMode) => {
      acc[postMode.id] = {}
      return acc
    }, {})

    set((state) => ({
      posts: {
        ...state.posts, 
        [id]: {
          account: account,
          id: id,
          postModes,
          socialMediaId: account.socialMediaId
        }
      },
    }));
  },

  posts: {},
}));
