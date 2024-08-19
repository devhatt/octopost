import { ReactElement } from 'react';

import { StoreAccount } from '~stores/useSocialMediaStore/useSocialMediaStore.types';

export type SocialAccordionProps = {
  accounts: StoreAccount[];
  error: boolean;
  icon?: ReactElement;
  socialMediaId: string;
  title: string;
};

export type IAccountList = {
  id: number | string;
  image: string;
  socialMediaName?: string;
  username: string;
};

export type AccountQuantityProps = {
  accountQuantity: number;
};
