/* eslint-disable @typescript-eslint/no-unnecessary-condition -- to avoid lint error that will be remove soon on a changhe of how the data will be dealed */
import { ChangeEvent, ReactNode, useEffect, useState } from 'react';

import { Account } from '~services/api/accounts/accounts.types';
import { PostMode } from '~services/api/social-media/social-media.types';
import { AccountPost, useAccountStore } from '~stores/useAccountStore';
import { useSocialMediaStore } from '~stores/useSocialMediaStore/useSocialMediaStore';

import { accountsToTabs } from './utils';

import MainComposerBase from '~components/MainComposer/components/MainComposerBase/MainComposerBase';
import Preview from '~components/Preview/Preview';
import scss from '~components/Tabber/Tabber.module.scss';

import PostModes from './PostModes/PostModes';
import Tabs from './Tabs/Tabs';

import { Tab, TabId, Tabs as TabsType } from './Tabber.types';

const makeId = (account: AccountPost): `${string}-${string}` =>
  `${account.id}-${account.socialMediaId}`;

function Tabber(): ReactNode {
  const { accounts } = useAccountStore();
  const { socialMedias } = useSocialMediaStore();

  const [currentTab, setCurrentTab] = useState<TabId>(
    makeId(accounts[0] || {})
  );
  const [tabs, setTabs] = useState<TabsType>({});

  useEffect(() => {
    if (accounts.length > 0) {
      const initialTabId = accounts.length > 0 ? makeId(accounts[0]) : '';
      setCurrentTab(initialTabId as TabId);
      setTabs(accountsToTabs(accounts, socialMedias));
    } else {
      setTabs({});
      setCurrentTab('' as unknown as TabId);
    }
  }, [accounts, socialMedias]);

  const getCurrentPostMode = (): PostMode | undefined => {
    if (!currentTab) return;
    const [, socialMediaId] = currentTab.split('-');
    const socialMedia = socialMedias.get(socialMediaId);
    if (!socialMedia) return;
    const postModeOnView = tabs[currentTab]?.postModeOnView;
    return socialMedia.postModes.find(
      (postMode: PostMode) => postMode.id === postModeOnView
    );
  };

  const currentPostMode = getCurrentPostMode();

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    if (!currentTab || !tabs[currentTab]) return;
    const tab = { ...tabs[currentTab] };
    const postId = tab.postModeOnView;
    if (tab.posts[postId]) {
      tab.posts[postId].text = e.target.value;
    }

    setTabs({
      ...tabs,
      [currentTab]: tab,
    });
  };

  const changeCurrentTab = (tab: Tab): void => {
    setCurrentTab(tab.id);
  };

  const changePostMode = (postMode: PostMode): void => {
    if (!currentTab || !tabs[currentTab]) return;
    const tab = { ...tabs[currentTab] };
    tab.postModeOnView = postMode.id;

    if (!tab.posts[postMode.id]) {
      tab.posts[postMode.id] = { text: '' };
    }

    setTabs({
      ...tabs,
      [currentTab]: tab,
    });
  };

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
          <PostModes
            currentPostModeId={tabs[currentTab].postModeOnView}
            currentTab={tabs[currentTab].account as Account}
            onChangePostMode={changePostMode}
          />
          <MainComposerBase
            accountId={tabs[currentTab].account.id.toString()}
            onChange={handleContentChange}
            postMode={currentPostMode ?? undefined}
            value={
              tabs[currentTab].posts[tabs[currentTab].postModeOnView]?.text ??
              ''
            }
          />
        </div>
        <div className={scss.previewContainer}>
          <Preview>
            {tabs[currentTab].posts[tabs[currentTab].postModeOnView]?.text}
          </Preview>
        </div>
      </div>
    </div>
  );
}

export default Tabber;
