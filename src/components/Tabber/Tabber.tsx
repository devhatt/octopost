import { ReactNode, useEffect, useState } from 'react';

import { PostMode } from '@octopost/module-manager';

import { useMediaQuery } from '~hooks/useMediaQuery/useMediaQuery';

import { useSocialNetworkStore } from './stores/useSocialNetworkStore';
import { buildPostModeId } from './utils';

import scss from '~components/Tabber/Tabber.module.scss';

import PostModes from './PostModes/PostModes';
import Tabs from './Tabs/Tabs';

import { ITab, TPostModeId, TTabState } from './Tabber.types';

function Tabber(): ReactNode {
  const isDesktopScreen = useMediaQuery('sm');

  const socialNetworks = useSocialNetworkStore((state) =>
    state.socialNetworks.slice(Number(isDesktopScreen))
  );

  const [currentTab, setCurrentTab] = useState<ITab>(socialNetworks[0]);
  const [currentPostModeId, setCurrentPostModeId] = useState<TPostModeId>(
    buildPostModeId(currentTab)
  );
  const [content, setContent] = useState<TTabState>({});
  const [currentContent, setCurrentContent] = useState('');

  const changeCurrentTab = (socialNetwork: ITab): void => {
    const tabsCurrentPostModeId =
      socialNetwork.currentPostModeId ?? buildPostModeId(socialNetwork);

    setCurrentTab(socialNetwork);
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

  const handleContentChange = (postId: TPostModeId, text: string) => {
    setContent((prevContent) => ({
      ...prevContent,
      [postId]: {
        text: text,
      },
    }));
  };

  const preview =
    currentTab.currentPostMode ??
    (currentTab.postModes?.[0] as PostMode | undefined);

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
          {!!preview?.previewComponent && (
            <preview.previewComponent
              customData={{}}
              medias={[] as File[]}
              text={`${preview.name} Placeholder`}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Tabber;
