import { Account } from '~services/api/accounts/accounts.types';
import { SocialMedia } from '~services/api/social-media/social-media.types';

export type StoreAccount = Account & { valid: boolean };

export type SocialMediaAccounts = {
  account: Account[];
  socialMediaId: Account['socialMediaId'];
}[];

export type NewAccount = Omit<StoreAccount, 'id'>;

export type SocialMediaState = {
  accounts: {
    data: Record<string, StoreAccount[]>;
    error: string;
    loading: boolean;
  };

  addAccount: (newAccount: NewAccount) => Promise<StoreAccount>;

  getAllAccounts: () => Promise<void>;

  socialMedias: Map<string, SocialMedia>;
};
