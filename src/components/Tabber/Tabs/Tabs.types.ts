import { TSocialNetworks } from '../stores/useSocialNetworkStore.types';
import { ITab } from '../Tabber.types';

export type ITabsProps = {
  currentTab: TSocialNetworks;
  onChangeTab: (socialNetwork: TSocialNetworks) => void;
  socialNetworks: ITab[];
};
