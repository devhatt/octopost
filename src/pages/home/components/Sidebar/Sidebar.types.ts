import { StoreAccount } from '~stores/useSocialMediaStore/useSocialMediaStore.types';

export type FilteredAccountsProps = {
  socialMedia: FilteredSocialMedia[];
};

export type FilteredSocialMedia = {
  socialMediaAccounts: StoreAccount[];
  socialMediaId: string;
};
