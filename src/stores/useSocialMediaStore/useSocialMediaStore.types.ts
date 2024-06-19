import { Account } from '~services/api/accounts/accounts.types';
import { SocialMedia } from '~services/api/social-media/social-media.types';
import { GenericObject } from '~types/object';

import { Tabs } from '~components/Tabber/Tabber.types';

export type StoreAccount = Account & { valid: boolean };

export type SocialMediaState = {
  accounts: {
    data: StoreAccount[] | null;
    error: string;
    loading: boolean;
  };

  addAccount: () => Promise<void>;

  getAllAccounts: () => Promise<void>;

  posts: {
    data: GenericObject;
    error: string;
    loading: boolean;
  };

  sendPosts: (tabs: Tabs) => Promise<void>;

  socialMedias: Map<string, SocialMedia>;
};
