import { StoreAccount } from '~stores/useSocialMediaStore/useSocialMediaStore.types';

export type SidebarProps = {
  onDisableAccount: (accountId: StoreAccount['id']) => void;
  onEnableAccount: (account: StoreAccount) => void;
};
