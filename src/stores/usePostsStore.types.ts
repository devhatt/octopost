export interface IPostsStore {
  increase: (by: number) => void;
  postsQuantity: number;
  reset: () => void;
}
