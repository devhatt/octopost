import { ReactElement } from 'react';

import { StoreAccount } from '~stores/useSocialMediaStore/useSocialMediaStore.types';

export type SocialAccordionProps = {
  accounts: StoreAccount[];
  error: boolean;
  icon?: ReactElement;
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

export type AccordionContentProps = {
  accounts: StoreAccount[];
  enableChange: (enabled: boolean, account: StoreAccount) => void;
  favoriteChange: (isFavorited: boolean, account: StoreAccount) => void;
};
