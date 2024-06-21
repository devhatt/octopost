import { create } from 'zustand';

import { IPostsStore } from './usePostStore.types';

export const usePostsStore = create<IPostsStore>((set) => ({
  increase: (increaseBy): void =>
    set((state) => ({ postsQuantity: state.postsQuantity + increaseBy })),
  postsQuantity: 0,
  reset: (): void => set({ postsQuantity: 0 }),
}));
