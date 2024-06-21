import { StoreAccount } from '~stores/useSocialMediaStore/useSocialMediaStore.types';

export type SocialAccordionProps = {
  accounts: StoreAccount[];
  error: boolean;
  onDisableAccount: (accountId: StoreAccount['id']) => void;
  onEnableAccount: (account: StoreAccount) => void;
  socialMediaId: string;
};

export type IAccountList = {
  id: number | string;
  image: string;
  socialMediaName?: string;
  username: string;
};
