import { ReactNode } from 'react';

import classNames from 'classnames';

import scss from '../Tabs.module.scss';

import { TabProps } from './Tab.types';

export default function Tab(props: TabProps): ReactNode {
  const isActiveClasses = classNames(scss.tab, props.isActive && scss.active);

  const handleTabClick = (tabElement: HTMLElement): void => {
    props.onClickTab(tabElement);
  };

  return (
    <div
      className={isActiveClasses}
      key={props.id}
      onClick={(e) => handleTabClick(e.currentTarget)}
    >
      {props.socialMediaIcon}
      <span className={scss.tabTitle}>{props.title}</span>
    </div>
  );
}
