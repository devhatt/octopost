import { Tab, TabId, Tabs } from '../Tabber.types';

export type ITabsProps = {
  currentTab: Tab;
  onChangeTab: (tab: Tab, tabId: TabId) => void;
  tabs: Tabs;
};
