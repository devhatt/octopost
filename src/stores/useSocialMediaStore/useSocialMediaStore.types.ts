import { Account } from '~services/api/accounts/accounts.types';
import { SocialMedia } from '~services/api/social-media/social-media.types';

export type StoreAccount = Account & { valid: boolean };

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

export type SocialMediaData = Pick<SocialMediaState['accounts'], 'data'>;
