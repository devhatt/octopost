import { useState } from 'react';

import { IPostMode } from 'modules/types';

import { useSocialNetworkStore } from './stores/useSocialNetworkStore';
import { buildPostModeId } from './utils';

import scss from '~components/Tabber/Tabber.module.scss';

import PostModes from './PostModes/PostModes';
import Tabs from './Tabs/Tabs';

import { ITab, TPostModeId } from './Tabber.types';

function Tabber() {
  const socialNetworks = useSocialNetworkStore((state) => state.socialNetworks);

  const [currentTab, setCurrentTab] = useState<ITab>(socialNetworks[0]);
  const [currentPostModeId, setCurrentPostModeId] = useState<TPostModeId>(
    buildPostModeId(currentTab)
  );

  const changeCurrentTab = (socialNetwork: ITab) => {
    const tabsCurrentPostModeId =
      socialNetwork.currentPostModeId ?? buildPostModeId(socialNetwork);

    setCurrentTab(socialNetwork);
    setCurrentPostModeId(tabsCurrentPostModeId);
  };

  const changeCurrentPostMode = (
    postMode: IPostMode,
    postModeId: TPostModeId
  ) => {
    setCurrentPostModeId(postModeId);
    currentTab.currentPostMode = postMode;
    currentTab.currentPostModeId = postModeId;
  };

  const preview = currentTab.currentPostMode ?? currentTab.postModes[0];

  return (
    <div>
      <Tabs
        currentTab={currentTab}
        onChangeTab={changeCurrentTab}
        socialNetworks={socialNetworks}
      />
      <div className={scss.gridContainer}>
        <div className={scss.postModesContainer}>
          <PostModes
            currentPostModeId={currentPostModeId}
            currentTab={currentTab}
            onChangePostMode={changeCurrentPostMode}
          />
        </div>
        <div className={scss.previewContainer}>
          <preview.previewComponent text={`${preview.name} Placeholder`} />
        </div>
      </div>
    </div>
  );
}

export default Tabber;
