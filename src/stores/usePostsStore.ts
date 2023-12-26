import { create } from 'zustand';

import { IPostsStore } from './usePostsStore.types';

export const usePostsStore = create<IPostsStore>()((set) => ({
  increase: (increaseBy) =>
    { set((state) => ({ postsQuantity: state.postsQuantity + increaseBy })); },
  postsQuantity: 0,
  reset: () => { set({ postsQuantity: 0 }); },
}));
