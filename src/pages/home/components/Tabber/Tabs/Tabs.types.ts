import { Account } from '~services/api/accounts/accounts.types';

import { Tab, Tabs } from '../Tabber.types';

export type TabsProps = {
  currentTab: Tab;
  onChangeTab: (tab: Tab) => void;
  tabs: Tabs;
};
