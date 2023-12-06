import classNames from 'classnames';
import { nanoid } from 'nanoid';

import scss from '~components/Tabber/Tabs/Tabs.module.scss';

import { ITabsProps } from './Tabs.types';

function Tabs(props: ITabsProps) {
  const RenderTabs = () =>
    props.socialNetworks.map((socialNetwork) => (
      <div
        key={nanoid()}
        onClick={() => props.handleCurrentTab(socialNetwork)}
        className={classNames(
          scss.tab,
          socialNetwork.id === props.currentTab.id && scss.active
        )}
      >
        {socialNetwork.icon}
        <span className={scss.tabTitle}>{socialNetwork.name}</span>
      </div>
    ));

  return <div className={scss.tabsContainer}>{RenderTabs()}</div>;
}

export default Tabs;
