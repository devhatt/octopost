import React, { useState } from 'react';

import { PostMode } from '@octopost/module-manager';

import { useModulesStore } from '~stores/useModulesStore';

import { buildPostModeId } from './utils';

import scss from '~components/Tabber/Tabber.module.scss';

import PostModes from './PostModes/PostModes';
import Tabs from './Tabs/Tabs';

import { ITab, TPostModeId } from './Tabber.types';

function Tabber(): React.ReactElement {
  const modules = useModulesStore((state) => state.modules);
  const [currentTab, setCurrentTab] = useState<ITab>(modules[0] as ITab);
  const [currentPostModeId, setCurrentPostModeId] = useState<TPostModeId>(
    buildPostModeId(currentTab)
  );

  const changeCurrentTab = (newModules: ITab): void => {
    const tabsCurrentPostModeId =
      (newModules.currentPostModeId ?? '') || buildPostModeId(newModules);

    setCurrentTab(newModules);
    setCurrentPostModeId(tabsCurrentPostModeId);
  };

  const changeCurrentPostMode = (
    postMode: PostMode,
    postModeId: TPostModeId
  ): void => {
    setCurrentPostModeId(postModeId);
    currentTab.currentPostMode = postMode;
    currentTab.currentPostModeId = postModeId;
  };

  const preview =
    Boolean(currentTab.currentPostMode) || currentTab.postModes[0];

  return (
    <div>
      <Tabs
        currentTab={currentTab}
        onChangeTab={changeCurrentTab}
        socialNetworks={modules as ITab[]}
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
