/* eslint-disable @typescript-eslint/no-unnecessary-condition -- to avoid lint error that will be remove soon on a changhe of how the data will be dealed */
import { ChangeEvent, ReactNode, useEffect, useState } from 'react';

import scss from '~pages/home/components/Tabber/Tabber.module.scss';

import { PostMode } from '~services/api/social-media/social-media.types';
import { useAccountStore } from '~stores/useAccountStore/useAccountStore';
import { AccountPost } from '~stores/useAccountStore/useAccountStore.types';
import { useSocialMediaStore } from '~stores/useSocialMediaStore/useSocialMediaStore';

import { accountsToTabs } from './utils';

import MainComposerBase from '~components/MainComposer/components/MainComposerBase/MainComposerBase';
import Preview from '~components/Preview/Preview';

import PostModes from './PostModes/PostModes';
import Tabs from './Tabs/Tabs';

import { Tab, TabId, Tabs as TabsType } from './Tabber.types';

const makeId = (account: AccountPost): `${string}-${string}` =>
  `${account.id}-${account.socialMediaId}`;

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
  const { socialMedias } = useSocialMediaStore();
  const { accounts, mainContent } = useAccountStore();

  const [currentTab, setCurrentTab] = useState<TabId>(
    makeId(accounts[0] || {})
  );
  const [tabs, setTabs] = useState<TabsType>({});

  useEffect(() => {
    if (accounts.length > 0) {
      const newTabs = accountsToTabs(accounts, socialMedias);
      setTabs(newTabs);
      const initialTabId = makeId(accounts[0]);
      setCurrentTab(initialTabId);

      for (const tab of Object.values(newTabs)) {
        const currentSocialMediaPostModes = socialMedias.get(
          tab.id.split('-')[1]
        )?.postModes;

        if (currentSocialMediaPostModes) {
          for (const postMode of currentSocialMediaPostModes) {
            if (!tab.posts[postMode.id]) {
              tab.posts[postMode.id] = {
                text: mainContent.text ?? '',
              };
            }
            tab.posts[postMode.id].text = mainContent.text ?? '';
          }
        }
      }

      setTabs(newTabs);
    } else {
      setTabs({});
      setCurrentTab('' as unknown as TabId);
    }
  }, [accounts, socialMedias, mainContent.text]);

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

  const currentPostModeMaxLimit = getCurrentPostModeMaxLimit(
    currentPostMode?.validators
  );

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

  // const changePostMode = (postMode: PostMode): void => {
  //   if (!currentTab || !tabs[currentTab]) return;
  //   const tab = { ...tabs[currentTab] };
  //   tab.postModeOnView = postMode.id;

  //   if (!tab.posts[postMode.id]) {
  //     tab.posts[postMode.id] = { text: '' };
  //   }

  //   setTabs({
  //     ...tabs,
  //     [currentTab]: tab,
  //   });
  // };

  const onChangePostMode = (postModeId: PostMode['id']) => {
    console.log(postModeId);
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
            postModeId="aa"
            account={tabs[currentTab].account}
            changePostModeId={(postModeId) => onChangePostMode(postModeId)}
          />
          <div className={scss.mainComposerContainer}>
            <MainComposerBase
              accountId={tabs[currentTab].account.id.toString()}
              currentMaxLimit={currentPostModeMaxLimit ?? undefined}
              onChange={handleContentChange}
              postMode={currentPostMode ?? undefined}
              value={
                tabs[currentTab].posts[tabs[currentTab].postModeOnView]?.text ??
                ''
              }
            />
          </div>
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
