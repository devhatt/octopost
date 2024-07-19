import { StoreAccount } from '~stores/useSocialMediaStore/useSocialMediaStore.types';

export type filteredSocialMedia = {
  socialMediaAccounts: StoreAccount[];
  socialMediaId: string;
};
