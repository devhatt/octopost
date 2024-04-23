import { Account } from '~services/api/accounts/accounts.types';

export type ISocialAccordion = {
  accountList: Account[];
  error: boolean;
  socialMediaName: string;
};

export type IAccountList = {
  id: number | string;
  image: string;
  username: string;
};
