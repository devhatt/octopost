/* eslint-disable @typescript-eslint/no-unnecessary-condition -- eslint is saying that tabs is always not empty but in some cases, it is  */
/* eslint-disable unicorn/prefer-at -- using at is not better than using .length - 1 */
import { ChangeEvent, ReactNode, useState } from 'react';

import { PostMode } from '~services/api/social-media/social-media.types';
import { usePostStore } from '~stores/usePostStore/usePostStore';
import { useSocialMediaStore } from '~stores/useSocialMediaStore/useSocialMediaStore';

import { useSyncTabsWithPosts } from './hooks/useSyncTabsWithPosts';

import MainComposerBase from '~components/MainComposer/components/MainComposerBase/MainComposerBase';
import Preview from '~components/Preview/Preview';

import PostModes from './PostModes/PostModes';
import Tabs from './Tabs/Tabs';

import scss from './Tabber.module.scss';

import { Tab } from './Tabber.types';

function getPostModeMaxCharacters(
  currentValidator: PostMode['validators'] | undefined
): number | null {
  let limit = null;
  if (currentValidator && 'text' in currentValidator) {
    limit = currentValidator.text.maxLength;
  }
  return limit;
}

function Tabber(): ReactNode {
  const [currentTab, setCurrentTab] = useState('');
  const { changePostMode, tabs } = useSyncTabsWithPosts(setCurrentTab);
  const { posts, updateText } = usePostStore();
  const { socialMedias } = useSocialMediaStore();
  const isSync = Object.keys(tabs).length === Object.keys(posts).length;

  if (tabs && !tabs[currentTab]) {
    const allTabs = Object.keys(tabs);
    if (allTabs.length > 0) setCurrentTab(allTabs[allTabs.length - 1]);
  }

  if (!currentTab || !tabs[currentTab] || !posts[tabs[currentTab].postId]) {
    return <div>No tabs available</div>;
  }

  const { socialMediaId } = posts[tabs[currentTab].postId];
  const { accountId } = posts[tabs[currentTab].postId];
  const composerBaseText =
    posts[tabs[currentTab].postId].postModes[tabs[currentTab].postModeId].text;

  const changeCurrentTab = (tab: Tab): void => {
    setCurrentTab(tab.id);
  };

  const changePostModeId = (postModeId: PostMode['id']): void => {
    changePostMode(currentTab, postModeId);
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    updateText({
      postId: tabs[currentTab].postId,
      postModeId: tabs[currentTab].postModeId,
      text: e.target.value,
    });
  };

  const postModeMaxCharacters = getPostModeMaxCharacters(
    socialMedias
      .get(socialMediaId)
      ?.postModes.find(
        (postMode) => postMode.id === tabs[currentTab].postModeId
      )?.validators
  );

  return (
    <div>
      {isSync && (
        <Tabs
          currentTab={tabs[currentTab]}
          onChangeTab={changeCurrentTab}
          tabs={tabs}
        />
      )}
      <div className={scss.gridContainer}>
        <div className={scss.postModesContainer}>
          <PostModes
            changePostModeId={changePostModeId}
            postId={tabs[currentTab].postId}
            postModeId={tabs[currentTab].postModeId}
            socialMediaId={socialMediaId}
          />
          <MainComposerBase
            accountId={accountId}
            maxCharacters={postModeMaxCharacters}
            onChange={handleContentChange}
            postModeId={tabs[currentTab].postModeId}
            socialMediaId={socialMediaId}
            value={composerBaseText}
          />
        </div>
        <div className={scss.previewContainer}>
          <Preview>{composerBaseText}</Preview>
        </div>
      </div>
    </div>
  );
}

export default Tabber;
