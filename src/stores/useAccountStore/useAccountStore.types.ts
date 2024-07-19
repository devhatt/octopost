import { IMedia } from '~components/MainComposer/components/InputMediaGroup/components/InputMedia/InputMedia.types';

import { StoreAccount } from '../useSocialMediaStore/useSocialMediaStore.types';

export type TAccountPost = Pick<
  StoreAccount,
  'id' | 'socialMediaId' | 'userName'
>;

export type TStoreAccountStore = {
  accounts: TAccountPost[];
  addAccount: (account: StoreAccount) => void;
  clearMainContentImage: () => void;
  mainContent: string;
  mainContentImage: IMedia[] | null;
  removeAccount: (accountId: string) => void;
  updateMainContent: (value: string) => void;
  updateMainContentImage: (images: IMedia[]) => void;
};
