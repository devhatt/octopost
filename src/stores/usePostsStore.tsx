import { create } from 'zustand';

interface IPostsStore {
  postsQuantity: number;
  increase: (by: number) => void;
  reset: () => void;
}

export const usePostsStore = create<IPostsStore>()((set) => ({
  postsQuantity: 0,
  increase: (by) =>
    set((state) => ({ postsQuantity: state.postsQuantity + by })),
  reset: () => set({ postsQuantity: 0 }),
}));
