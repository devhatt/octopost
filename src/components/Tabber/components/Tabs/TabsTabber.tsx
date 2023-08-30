import { ITabsTabberProps } from '~components/Tabber/Tabber.types';

import scss from './TabsTabber.module.scss';

function TabsTabber(props: ITabsTabberProps) {
  const tabButtonClasses = `${scss.button} ${
    props.socialItem.id === props.selectedTab ? scss.selected : ''
  }`;

  const handleTabClick = () => {
    props.onTabClick(props.socialItem.id);
  };

  const svgPlaceholder = '1';

  return (
    <div className={tabButtonClasses} onClick={handleTabClick}>
      <div className={scss.icon}>{svgPlaceholder}</div>
      {props.socialItem.id}
    </div>
  );
}

export default TabsTabber;
