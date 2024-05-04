export type IPostsStore = {
  increase: (by: number) => void;
  postsQuantity: number;
  reset: () => void;
};
