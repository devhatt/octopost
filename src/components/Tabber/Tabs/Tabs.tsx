import classNames from 'classnames';

import scss from '~components/Tabber/Tabs/Tabs.module.scss';

import { TSocialNetworks } from '../stores/useSocialNetworkStore.types';
import { ITabsProps } from './Tabs.types';

function Tabs(props: ITabsProps) {
  const tabClasses = (id: string) =>
    classNames(scss.tab, id === props.currentTab.id && scss.active);

  const renderTabs = (socialNetwork: TSocialNetworks) => (
    <div
      className={tabClasses(socialNetwork.id)}
      key={`${socialNetwork.id}-${socialNetwork.name}`}
      onClick={() => props.onChangeTab(socialNetwork)}
    >
      {socialNetwork.icon}
      <span className={scss.tabTitle}>{socialNetwork.name}</span>
    </div>
  );

  return (
    <div className={scss.tabsContainer}>
      {props.socialNetworks.map(renderTabs)}
    </div>
  );
}

export default Tabs;
