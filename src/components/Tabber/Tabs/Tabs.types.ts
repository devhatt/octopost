import { TSocialNetworks } from '../stores/useSocialNetworkStore.types';
import { ITab } from '../Tabber.types';

export interface ITabsProps {
  socialNetworks: ITab[];
  currentTab: TSocialNetworks;
  handleCurrentTab: (socialNetwork: TSocialNetworks) => void;
}
