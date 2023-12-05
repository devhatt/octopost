import { TSocialNetworks } from '../stores/useSocialNetworkStore.types';

export interface ITabsProps {
  socialNetworks: TSocialNetworks[];
  currentTab: TSocialNetworks;
  handleCurrentTab: (socialNetwork: TSocialNetworks) => void;
}
