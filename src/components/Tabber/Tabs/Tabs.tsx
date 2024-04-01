import { ReactNode } from 'react';

import classNames from 'classnames';

import scss from '~components/Tabber/Tabs/Tabs.module.scss';

import { TSocialNetworks } from '../stores/useSocialNetworkStore.types';
import { ITabsProps } from './Tabs.types';

function Tabs(props: ITabsProps): ReactNode {
  const tabClasses = (id: string): string =>
    classNames(scss.tab, id === props.currentTab.id && scss.active);

  const renderTabs = (socialNetwork: TSocialNetworks): ReactNode => (
    <button
      className={tabClasses(socialNetwork.id)}
      key={`${socialNetwork.id}-${socialNetwork.name}`}
      onClick={() => props.onChangeTab(socialNetwork)}
    >
      {socialNetwork.icon}
      <span className={scss.tabTitle}>{socialNetwork.name}</span>
    </button>
  );

  return <div className={scss.tabsContainer}>{props.socialNetworks.map(renderTabs)}</div>;
}

export default Tabs;
