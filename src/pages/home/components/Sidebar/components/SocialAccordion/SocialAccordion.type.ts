import { StoreAccount } from '~stores/useSocialMediaStore.types';

export type SocialAccordionProps = {
  accounts: StoreAccount[];
  error: boolean;
  socialMediaName: string;
};

export type IAccountList = {
  id: number | string;
  image: string;
  username: string;
};
