import { create } from 'zustand';

import { IPostsStore } from './usePostsStore.types';

export const usePostsStore = create<IPostsStore>()((set) => ({
  postsQuantity: 0,
  increase: (by) =>
    set((state) => ({ postsQuantity: state.postsQuantity + by })),
  reset: () => set({ postsQuantity: 0 }),
}));
