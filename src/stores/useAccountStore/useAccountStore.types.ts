import { IMedia } from '~components/MainComposer/components/InputMediaGroup/components/InputMedia/InputMedia.types';

import { StoreAccount } from '../useSocialMediaStore/useSocialMediaStore.types';

export type AccountPost = Pick<
  StoreAccount,
  'id' | 'socialMediaId' | 'userName'
>;

export type contentToUpdate = IMedia[] | string | null;

export type MainContent = {
  medias?: IMedia[];
  text?: string;
};

export type TStoreAccountStore = {
  accounts: AccountPost[];
  addAccount: (account: StoreAccount) => void;

  MainContent: MainContent;

  removeAccount: (accountId: string) => void;
  updateMainContent: (contentToUpdate: MainContent) => void;
};
