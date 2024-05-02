import { Account } from '~services/api/accounts/accounts.types';
import { SocialMedia } from '~services/api/social-media/social-media.types';
import { GenericObject } from '~types/object';

import { Tabs } from '~components/Tabber/Tabber.types';

export type StoreAccount = Account & { valid: boolean };

export type SocialMediaState = {
  accounts: StoreAccount[];
  addAccount: (addonId: string) => void;
  getAllAccounts: () => void;
  posts: {
    data: GenericObject;
    error: string;
    loading: boolean;
  };
  sendPosts: (posts: Tabs) => Promise<void>;
  socialMedias: Map<SocialMedia['id'], SocialMedia>;
};
