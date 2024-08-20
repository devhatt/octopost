/* eslint-disable unicorn/prefer-at */
/* eslint-disable unicorn/no-array-for-each */
/* eslint-disable @typescript-eslint/no-unnecessary-condition -- to avoid lint error that will be remove soon on a changhe of how the data will be dealed */
import { ChangeEvent, ReactNode, useEffect, useState } from 'react';



import isEmpty from 'lodash.isempty';
import { nanoid } from 'nanoid';

import { PostMode } from '~services/api/social-media/social-media.types';
import { useAccountStore } from '~stores/useAccountStore';
import { usePostStore } from '~stores/usePost/usePost';
import {
  DataPost,
  PostModes as PostModesType,
} from '~stores/usePost/usePost.types';

import { useSyncTabsWithPosts } from './hooks/useSyncTabsWithPosts';

import MainComposerBase from '~components/MainComposer/components/MainComposerBase/MainComposerBase';
import Preview from '~components/Preview/Preview';

import PostModes from './PostModes/PostModes';
import Tabs from './Tabs/Tabs';

import scss from './Tabber.module.scss';

import { Tab } from './Tabber.types';

const getFirstPostMode = (postModes: PostModesType): DataPost['id'] =>
  Object.keys(postModes)[0];

function getCurrentPostModeMaxLimit(
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
  const {posts, updateText} = usePostStore();

  const changeCurrentTab = (tab: Tab): void => {
    setCurrentTab(tab.id);
  };

  const changePostModeId = (postModeId: PostMode['id']): void => {
    changePostMode(currentTab, postModeId);
  }
  

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    updateText({
      postId: tabs[currentTab].postId,
      postModeId: tabs[currentTab].postModeId,
      text: e.target.value
    })

    console.log(posts)
  }

  if (tabs && !tabs[currentTab]) {
    const allTabs = Object.keys(tabs);
    if (allTabs.length > 0) setCurrentTab(allTabs[allTabs.length - 1]);
  }

  if (!currentTab || !tabs[currentTab]) {
    return <div>No tabs available</div>;
  }

  return (
    <div>
      <Tabs
        currentTab={tabs[currentTab]}
        onChangeTab={changeCurrentTab}
        tabs={tabs}
      />
      <div className={scss.gridContainer}>
        <div className={scss.postModesContainer}>
          {posts[tabs[currentTab].postId] && (
            <PostModes
            changePostModeId={changePostModeId}
            postId={tabs[currentTab].postId}
            postModeId={tabs[currentTab].postModeId}
          />}
          <MainComposerBase
            accountId={tabs[currentTab].postId}
            onChange={handleContentChange}
            postId={tabs[currentTab].postId}
            postModeId={tabs[currentTab].postModeId}
          />
        </div>
        <div className={scss.previewContainer}>
          <Preview>{''}</Preview>
        </div>
      </div>
    </div>
  );
}

export default Tabber;
