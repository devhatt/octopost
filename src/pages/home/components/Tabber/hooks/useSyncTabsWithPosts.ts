import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import omit from 'lodash.omit';

import { usePostStore } from '~stores/usePost/usePost';
import {
  DataPost,
  PostModes as PostModesType,
} from '~stores/usePost/usePost.types';

import { Tabs as TabsType } from '../Tabber.types';

const getFirstPostMode = (postModes: PostModesType): DataPost['id'] =>
  Object.keys(postModes)[0];

export function syncTabsWithDataPosts(
  posts: Record<string, DataPost>,
  tabs: TabsType,
  setCurrentTabs: Dispatch<SetStateAction<string>>
): TabsType {
  for (const key in posts) {
    if (!(key in tabs)) {
      const dataPost = posts[key];
      tabs[key] = {
        accountId: dataPost.accountId,
        id: dataPost.id,
        postId: dataPost.id,
        postsModeId: getFirstPostMode(dataPost.postModes),
      };
      setCurrentTabs(key);
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
  setCurrentTabs: Dispatch<SetStateAction<string>>
): { tabs: TabsType } {
  const { posts } = usePostStore();
  const [tabs, setTabs] = useState<TabsType>({});

  useEffect(() => {
    if (Object.keys(tabs).length !== Object.keys(posts).length) {
      setTabs(syncTabsWithDataPosts(posts, tabs, setCurrentTabs));
    }
  }, [posts, tabs, setCurrentTabs]);

  return { tabs };
}
