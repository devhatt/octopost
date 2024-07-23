import { StoreAccount } from '~stores/useSocialMediaStore/useSocialMediaStore.types';

export type FilteredSocialMedia = {
  socialMediaAccounts: StoreAccount[];
  socialMediaId: string;
};
