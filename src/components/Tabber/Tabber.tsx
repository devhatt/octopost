import { useState } from 'react';

import { IPostMode } from 'modules/types';

import { TGenericObject } from '~types/object';

import { useSocialNetworkStore } from './stores/useSocialNetworkStore';
import { buildPostModeId } from './utils';

import MainComposer from '~components/MainComposer/MainComposer';
import scss from '~components/Tabber/Tabber.module.scss';

import PostModes from './PostModes/PostModes';
import Tabs from './Tabs/Tabs';

import { ITab, TPostModeId } from './Tabber.types';

function Tabber() {
  const socialNetworks = useSocialNetworkStore((state) => state.socialNetworks);
  const [typesText, setTypesText] = useState<TGenericObject<string>>();

  const [currentTab, setCurrentTab] = useState<ITab>(socialNetworks[0]);
  const [currentPostModeId, setCurrentPostModeId] = useState<TPostModeId>(
    buildPostModeId(currentTab)
  );

  const changeCurrentTab = (socialNetwork: ITab) => {
    const tabsCurrentPostModeId = socialNetwork.currentPostModeId
      ? socialNetwork.currentPostModeId
      : buildPostModeId(socialNetwork);

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

  const preview = currentTab.currentPostMode
    ? currentTab.currentPostMode
    : currentTab.postModes[0];

  console.log(typesText);

  return (
    <div>
      <Tabs
        onChangeTab={changeCurrentTab}
        socialNetworks={socialNetworks}
        currentTab={currentTab}
      />
      <div className={scss.gridContainer}>
        <div className={scss.postModesContainer}>
          <PostModes
            onChangePostMode={changeCurrentPostMode}
            currentPostModeId={currentPostModeId}
            currentTab={currentTab}
          />
          <input
            type="text"
            value={typesText?.[currentPostModeId] || ''}
            onChange={(e) =>
              setTypesText({
                ...typesText,
                [currentPostModeId]: e.currentTarget.value,
              })
            }
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
