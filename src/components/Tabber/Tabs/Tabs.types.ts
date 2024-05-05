import { Tab, TabId, Tabs } from '../Tabber.types';

export type TabsProps = {
  currentTab: Tab;
  onChangeTab: (tab: Tab, tabId: TabId) => void;
  tabs: Tabs;
};
