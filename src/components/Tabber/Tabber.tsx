import { useState } from 'react';

import classNames from 'classnames';
import { nanoid } from 'nanoid';

import { useSocialNetworkStore } from './stores/useSocialNetworkStore';

import scss from '~components/Tabber/Tabber.module.scss';

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

  const renderPostModes = () =>
    currentTab.postModes.map((postMode, index) => (
      <span
        key={index}
        className={classNames(
          scss.postModeTitle,
          currentPostMode === index ? scss.active : null
        )}
        onClick={() => setCurrentPostMode(index)}
      >
        {postMode.name}
      </span>
    ));

  const renderPreviewComponent = () =>
    currentTab.postModes.map((postMode, index) =>
      index === currentPostMode ? (
        <postMode.previewComponent
          text={`${postMode.name} Placeholder`}
          key={nanoid()}
        />
      ) : null
    );

  return (
    <div>
      <Tabs
        handleCurrentTab={handleCurrentTab}
        socialNetworks={socialNetworks}
        currentTab={currentTab}
      />
      <div className={scss.gridContainer}>
        <div className={scss.postModesContainer}>
          <div className={scss.postModesHeader}>{renderPostModes()}</div>
          <div className={scss.postModesBody}></div>
        </div>
        <div className={scss.previewContainer}>{renderPreviewComponent()}</div>
      </div>
    </div>
  );
}

export default Tabber;
