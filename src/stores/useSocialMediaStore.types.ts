import { Account } from '~services/api/accounts/accounts.types';
import { SocialMedia } from '~services/api/social-media/social-media.types';

export type StoreAccount = Account & { valid: boolean };

export type SocialMediaState = {
  accounts: StoreAccount[];
  addAccount: (addonId: string) => void;
  getAllAccounts: () => void;
  socialMedias: Map<SocialMedia['id'], SocialMedia>;
};
