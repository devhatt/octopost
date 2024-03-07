import { useEffect, useState } from 'react';

import { IPostMode } from 'modules/types';

import { useSocialNetworkStore } from './stores/useSocialNetworkStore';
import { buildPostModeId } from './utils';

import scss from '~components/Tabber/Tabber.module.scss';

import PostModes from './PostModes/PostModes';
import Tabs from './Tabs/Tabs';

import { ITab, TPostModeId, TTabState } from './Tabber.types';

function Tabber() {
  const socialNetworks = useSocialNetworkStore((state) => state.socialNetworks);

  const [currentTab, setCurrentTab] = useState<ITab>(socialNetworks[0]);
  const [currentPostModeId, setCurrentPostModeId] = useState<TPostModeId>(
    buildPostModeId(currentTab)
  );
  const [content, setContent] = useState<TTabState>({});
  const [currentContent, setCurrentContent] = useState('');

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

  const handleContentChange = (postId: TPostModeId, text: string) => {
    setContent((prevContent) => ({
      ...prevContent,
      [postId]: {
        text: text,
      },
    }));
  };

  const preview = currentTab.currentPostMode
    ? currentTab.currentPostMode
    : currentTab.postModes[0];

  useEffect(() => {
    setCurrentContent(content[currentPostModeId]?.text || '');
  }, [content, currentPostModeId]);

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
          <input
            type="text"
            onChange={(e) =>
              handleContentChange(currentPostModeId, e.target.value)
            }
            value={currentContent}
          />
        </div>
        <div className={scss.previewContainer}>
          <preview.previewComponent text={`${preview.name} Placeholder`} />
          {currentContent}
        </div>
      </div>
    </div>
  );
}

export default Tabber;
