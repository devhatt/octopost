export interface IPostsStore {
  postsQuantity: number;
  increase: (by: number) => void;
  reset: () => void;
}
