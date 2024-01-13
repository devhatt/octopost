import { create } from 'zustand';

import { IPostsStore } from './usePostsStore.types';

export const usePostsStore = create<IPostsStore>()((set) => ({
  postsQuantity: 0,
  increase: (increaseBy) =>
    set((state) => ({ postsQuantity: state.postsQuantity + increaseBy })),
  reset: () => set({ postsQuantity: 0 }),
}));
