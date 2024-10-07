import { StoreAccount } from '~stores/useSocialMediaStore/useSocialMediaStore.types';

import { Tab, Tabs } from '../Tabber.types';

export type TabsProps = {
  currentTab: Tab;
  onChangeTab: (tab: Tab) => void;
  tabs: Tabs;
};

export type FoundAccount = StoreAccount | null | undefined;
