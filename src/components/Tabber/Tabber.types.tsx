export interface ISocialItem {
  id: string;
}

export interface ITabberProps {
  socialList: ISocialItem[];
}

export interface ITabsTabberProps {
  socialItem: ISocialItem;
  selectedTab: string;
  onTabClick: (tabId: string) => void;
}
