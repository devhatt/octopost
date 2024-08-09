// import { create } from '../zustand';

// import { Post, PostStore } from './usePostsStore.types';

// import { IPostsStore } from './usePostsStore.types';
// import { StoreAcco } from '../useSocialMediaStore/useSocialMediaStore.types';

// export type AccountPost = Pick<
//   StoreAccount,
//   'id' | 'socialMediaId' | 'userName'
// >;

// type StoreState = {
//   accounts: AccountPost[];
//   addAccount: (account: StoreAccount) => void;
//   mainContent: string;
//   removeAccount: (accountId: string) => void;
//   updateMainContent: (value: string) => void;
// };

// export const usePostsStore = create<PostStore>((set) => ({
//   posts: {},

//   // addAccount: (account: StoreAccount): void => {
//   //   set((state) => ({
//   //     accounts: [
//   //       ...state.accounts,
//   //       {
//   //         id: account.id,
//   //         socialMediaId: account.socialMediaId,
//   //         userName: account.userName,
//   //       },
//   //     ],
//   //   }));
//   // },

//   // mainContent: '',
//   // removeAccount: (accountId: string): void => {
//   //   set((state) => ({
//   //     accounts: state.accounts.filter((account) => account.id !== accountId),
//   //   }));
//   // },

//   // updateMainContent: (newContent: string): void =>
//   //   set({ mainContent: newContent }),
// }));
