import React, { useState } from 'react';

import { ITabberProps } from '~components/Tabber/Tabber.types';

import TabsTabber from '../Tabs/TabsTabber';
import TextAreaTabber from '../TextAreaTabber/TextAreaTabber';

function RenderNetwork(props: ITabberProps) {
  const [selectedTab, setSelectedTab] = useState('');

  const handleTabClick = (tabId: string) => {
    setSelectedTab(tabId);
  };

  return props.socialList.map((socialItem) => (
    <div key={socialItem.id}>
      <TabsTabber
        socialItem={socialItem}
        selectedTab={selectedTab}
        onTabClick={handleTabClick}
      />
      <div>
        {/* componente provisório, delete após novo ser construído */}
        <TextAreaTabber
          selectedTab={selectedTab}
          socialItem={socialItem}
          onTabClick={handleTabClick}
        />
      </div>
    </div>
  ));
}

export default RenderNetwork;
