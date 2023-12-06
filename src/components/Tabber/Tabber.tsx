import { useState } from 'react';

import { useSocialNetworkStore } from './stores/useSocialNetworkStore';

import scss from '~components/Tabber/Tabber.module.scss';

import PostModes from './PostModes/PostModes';
import Preview from './Preview/Preview';
import Tabs from './Tabs/Tabs';

import { TSocialNetworks } from './stores/useSocialNetworkStore.types';

function Tabber() {
  const socialNetworks = useSocialNetworkStore((state) => state.socialNetworks);
  const [currentTab, setCurrentTab] = useState(socialNetworks[0]);
  const [currentPostMode, setCurrentPostMode] = useState(0);

  const handleCurrentTab = (socialNetwork: TSocialNetworks) => {
    setCurrentTab(socialNetwork);
    setCurrentPostMode(0);
  };

  const handleCurrentPostMode = (index: number) => setCurrentPostMode(index);

  return (
    <div>
      <Tabs
        handleCurrentTab={handleCurrentTab}
        socialNetworks={socialNetworks}
        currentTab={currentTab}
      />
      <div className={scss.gridContainer}>
        <div className={scss.postModesContainer}>
          <PostModes
            handleCurrentPostMode={handleCurrentPostMode}
            currentPostMode={currentPostMode}
            postModes={currentTab.postModes}
          />
        </div>
        <div className={scss.previewContainer}>
          <Preview currentTab={currentTab} currentPostMode={currentPostMode} />
        </div>
      </div>
    </div>
  );
}

export default Tabber;
