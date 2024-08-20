import merge from 'lodash.merge';
import omit from 'lodash.omit';
import { nanoid } from 'nanoid';

import { create } from '../zustand';

import { PostModes, PostStore } from './usePost.types';

export const usePostStore = create<PostStore>((set) => ({
  add: (account, postsModes): void => {
    const id = nanoid();
    const postModes = postsModes.reduce<PostModes>((acc, postMode) => {
      acc[postMode.id] = {}
      return acc
    }, {})

    set((state) => ({
      posts: {
        ...state.posts, 
        [id]: {
          accountId: account.id,
          id: id,
          postModes,
          socialMediaId: account.socialMediaId
        }
      },
    }));
  },

  mainContent: '',
  posts: {},

  remove: (id): void => {
    set((state) => {
      const posts = omit(state.posts, id)
      return { posts }
    })
  },

  updateMainContent: (newContent: string): void =>
    set({ mainContent: newContent }),

  updateText: ({postId, postModeId, text}): void => {
    set((state) => {
      const result = merge({}, state, {
        posts: {
          [postId]: {
            postModes: {
              [postModeId]: {
                text
              } 
            }
          }
        }
      })
      console.log(result)
      return result
    })  
  }
}));

