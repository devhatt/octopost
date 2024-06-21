import { AccountId } from '~stores/usePostStore/usePostStore.types';
import { StoreAccount } from '~stores/useSocialMediaStore/useSocialMediaStore.types';

export type PostAccount = Pick<StoreAccount, 'socialMediaId' | 'userName'> & {
  accountId: AccountId;
};

export type PostAccounts = Map<string, PostAccount>;
