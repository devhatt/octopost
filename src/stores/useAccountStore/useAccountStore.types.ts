import { Media } from '~components/MainComposer/components/InputMediaGroup/components/InputMedia/InputMedia.types';

import { StoreAccount } from '../useSocialMediaStore/useSocialMediaStore.types';

export type AccountPost = Pick<
  StoreAccount,
  'id' | 'socialMediaId' | 'userName'
>;

export type contentToUpdate = Media[] | string | null;

export type mainContent = {
  medias?: Media[];
  text?: string;
};

export type StoreAccountStore = {
  accounts: AccountPost[];
  addAccount: (account: StoreAccount) => void;

  mainContent: mainContent;

  removeAccount: (accountId: string) => void;
  updateMainContent: (contentToUpdate: mainContent) => void;
};
