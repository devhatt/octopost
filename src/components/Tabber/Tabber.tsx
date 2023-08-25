import { useState } from 'react';

import TabsTabber from './components/Tabs/TabsTabber';
import TextAreaTabber from './components/TextAreaTabber/TextAreaTabber';

import scss from './Tabber.module.scss';

import { ITabberProps } from './Tabber.types';

function Tabber(props: ITabberProps) {
  const { socialList } = props;

  const [selectedTab, setSelectedTab] = useState('');

  const handleTabClick = (tabId: string) => {
    setSelectedTab(tabId);
  };

  const renderNetwork = socialList.map((socialItem) => (
    <div key={socialItem.id}>
      <div>
        <TabsTabber
          socialItem={socialItem}
          selectedTab={selectedTab}
          onTabClick={handleTabClick}
        />
      </div>
      <div>
        /* componente provisório, delete após novo ser construido */
        <TextAreaTabber
          selectedTab={selectedTab}
          socialItem={socialItem}
          onTabClick={handleTabClick}
        />
      </div>
    </div>
  ));

  return <div className={scss.social}>{renderNetwork}</div>;
}

export default Tabber;
