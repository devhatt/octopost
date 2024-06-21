import { ChangeEvent, ReactNode, useState } from 'react';

import isEmpty from 'lodash.isempty';

import { PostMode } from '~services/api/social-media/social-media.types';
import { usePostStore } from '~stores/usePostStore/usePostStore';
import { useSocialMediaStore } from '~stores/useSocialMediaStore/useSocialMediaStore';

import { createTabId, postToTab } from './utils';

import MainComposerBase from '~components/MainComposer/components/MainComposerBase/MainComposerBase';
import Preview from '~components/Preview/Preview';

import PostModes from './PostModes/PostModes';
import Tabs from './Tabs/Tabs';

import scss from './Tabber.module.scss';

import { Tab, TabId, Tabs as TabsType } from './Tabber.types';

function Tabber(): ReactNode {
  const { posts, setPostText } = usePostStore();
  const { socialMedias } = useSocialMediaStore();

  const [tabs, setTabs] = useState<TabsType>(postToTab(posts, socialMedias));
  const [currentTabId, setCurrentTabId] = useState<TabId>(createTabId(posts));

  const currentTab = tabs[currentTabId];
  const currentPostMode = socialMedias
    .get(tabs[currentTabId].account.socialMediaId)
    ?.postModes.find(
      (postMode: PostMode) => postMode.id === currentTab.postModeOnView
    );

  const changeCurrentTab = (tab: Tab): void => setCurrentTabId(tab.id);

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const tab = { ...currentTab };
    const postId = tab.postModeOnView;
    tab.postModes[postId].text = e.target.value;

    setTabs({
      ...tabs,
      [currentTabId]: tab,
    });
  };

  const changePostModeContent = (): void => {
    setPostText(
      currentTab.account.accountId,
      currentTab.postModeOnView,
      currentTab.postModes[currentTab.postModeOnView].text
    );
  };

  const changePostMode = (postMode: PostMode): void => {
    const tab = { ...currentTab };
    tab.postModeOnView = postMode.id;
    tab.postModes[postMode.id] = { text: '' };

    setTabs({
      ...tabs,
      [currentTabId]: tab,
    });
  };

  const renderTabs = (): ReactNode => (
    <div>
      <Tabs
        currentTab={currentTab}
        onChangeTab={changeCurrentTab}
        tabs={tabs}
      />
      <div className={scss.gridContainer}>
        <div className={scss.postModesContainer}>
          <PostModes
            currentPostModeId={currentTab.postModeOnView}
            currentTab={currentTab.account}
            onChangePostMode={changePostMode}
          />
          <MainComposerBase
            accountId={currentTab.account.accountId}
            onChange={changePostModeContent}
            postMode={currentPostMode}
            value={currentTab.postModes[currentTab.postModeOnView].text}
          />
        </div>
        <div className={scss.previewContainer}>
          <Preview>
            {currentTab.postModes[currentTab.postModeOnView].text}
          </Preview>
        </div>
      </div>
    </div>
  );

  return isEmpty(currentTab) ? 'No tabs available' : renderTabs();
}

export default Tabber;
