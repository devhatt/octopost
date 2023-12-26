import classNames from 'classnames';

import scss from '~components/Tabber/Tabs/Tabs.module.scss';

import { TSocialNetworks } from '../stores/useSocialNetworkStore.types';
import { ITabsProps } from './Tabs.types';

function Tabs(props: ITabsProps) {
  const tabClasses = (id: string) =>
    classNames(scss.tab, id === props.currentTab.id && scss.active);

  const renderTabs = (socialNetwork: TSocialNetworks) => (
    // TODO: Remove this warning
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className={tabClasses(socialNetwork.id)}
      key={`${socialNetwork.id}-${socialNetwork.name}`}
      onClick={() => { props.onChangeTab(socialNetwork); }}
    >
      {socialNetwork.icon}
      <span className={scss.tabTitle}>{socialNetwork.name}</span>
    </div>
  );

  return (
    <div className={scss.tabsContainer}>
      {props.socialNetworks.map((element) => renderTabs(element))}
    </div>
  );
}

export default Tabs;
