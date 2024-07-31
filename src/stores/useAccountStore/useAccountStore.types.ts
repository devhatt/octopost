import { IMedia } from '~components/MainComposer/components/InputMediaGroup/components/InputMedia/InputMedia.types';

import { StoreAccount } from '../useSocialMediaStore/useSocialMediaStore.types';

export type AccountPost = Pick<
  StoreAccount,
  'id' | 'socialMediaId' | 'userName'
>;

export type contentToUpdate = IMedia[] | string | null;

export type MainContent = {
  medias?: IMedia[] | null;
  text?: string;
};

export type TStoreAccountStore = {
  accounts: AccountPost[];
  addAccount: (account: StoreAccount) => void;

  mainComposerContent: MainContent;

  removeAccount: (accountId: string) => void;
  updateMainComposerContent: (contentToUpdate: MainContent) => void;
};
