/* eslint-disable unicorn/prefer-at */
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import isEmpty from 'lodash.isempty';
import omit from 'lodash.omit';

import { PostMode } from '~services/api/social-media/social-media.types';
import { usePostStore } from '~stores/usePost/usePost';
import {
  DataPost,
  PostModes as PostModesType,
} from '~stores/usePost/usePost.types';

import { Tab, Tabs as TabsType } from '../Tabber.types';

const getFirstPostMode = (postModes: PostModesType): DataPost['id'] =>
  Object.keys(postModes)[0];

export function syncTabsWithDataPosts(
  posts: Record<string, DataPost>,
  tabs: TabsType,
  setCurrentTab: Dispatch<SetStateAction<string>>,
): TabsType {
  for (const key in posts) {
    if (!(key in tabs)) {
      const dataPost = posts[key];
      tabs[key] = {
        id: dataPost.id,
        postId: dataPost.id,
        postModeId: getFirstPostMode(dataPost.postModes),
      };

      if (isEmpty(tabs)) setCurrentTab(key);
    }
  }

  for (const key in tabs) {
    if (!(key in posts)) {
      tabs = omit(tabs, key);
    }
  }

  return { ...tabs };
}

export function useSyncTabsWithPosts(
  setCurrentTab: Dispatch<SetStateAction<string>>,
): { changePostMode: (tabId: Tab['id'], postMode: PostMode['id']) => void, tabs: TabsType } {
  const { posts } = usePostStore();
  const [tabs, setTabs] = useState<TabsType>({});

  useEffect(() => {
    if (Object.keys(tabs).length !== Object.keys(posts).length) {
      setTabs(syncTabsWithDataPosts(posts, tabs, setCurrentTab));
    }
  }, [posts, tabs, setCurrentTab]);

  const changePostMode = (tabId: Tab['id'], postModeId: PostMode['id']): void => {
    setTabs({
      ...tabs, 
      [tabId]: {
        ...tabs[tabId],
        postModeId,
      }
    })
  }
  return { changePostMode, tabs };
}
