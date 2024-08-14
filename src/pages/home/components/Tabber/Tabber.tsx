/* eslint-disable unicorn/no-array-for-each */
/* eslint-disable @typescript-eslint/no-unnecessary-condition -- to avoid lint error that will be remove soon on a changhe of how the data will be dealed */
import { ReactNode, useEffect, useState } from 'react';

<<<<<<< Updated upstream
import scss from '~pages/home/components/Tabber/Tabber.module.scss';

import { PostMode } from '~services/api/social-media/social-media.types';
import { AccountPost, useAccountStore } from '~stores/useAccountStore';
import { useSocialMediaStore } from '~stores/useSocialMediaStore/useSocialMediaStore';
=======
>>>>>>> Stashed changes

import isEmpty from 'lodash.isempty';
import { nanoid } from 'nanoid';

import { usePostStore } from '~stores/usePost/usePost';
import { DataPost, PostModes as PostModesType } from '~stores/usePost/usePost.types';

import MainComposerBase from '~components/MainComposer/components/MainComposerBase/MainComposerBase';
import Preview from '~components/Preview/Preview';

import PostModes from './PostModes/PostModes';
import Tabs from './Tabs/Tabs';

<<<<<<< Updated upstream
import { Tab, TabId, Tabs as TabsType } from './Tabber.types';
=======
import scss from './Tabber.module.scss';

import { Tabs as TabsType } from './Tabber.types';
>>>>>>> Stashed changes


<<<<<<< Updated upstream
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
  const { accounts } = useAccountStore();
  const { socialMedias } = useSocialMediaStore();
  const { mainContent } = useAccountStore();
=======
const getFirstPostMode = (postModes: PostModesType):  DataPost['id'] => Object.keys(postModes)[0]
>>>>>>> Stashed changes

function Tabber(): ReactNode {
  const { posts } = usePostStore();
  const [tabs, setTabs] = useState<TabsType>({});
  const [currentTab, setCurrentTab] = useState('')

  useEffect(() => {
<<<<<<< Updated upstream
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
              tab.posts[postMode.id] = { text: mainContent || '' };
            }
            tab.posts[postMode.id].text = mainContent || '';
          }
        }
      }

      setTabs(newTabs);
    } else {
      setTabs({});
      setCurrentTab('' as unknown as TabId);
    }
  }, [accounts, socialMedias, mainContent]);


  const getFirstPostModeId = (): PostMode['id'] | undefined => {
    const [, socialMediaId] = currentTab.split('-');
    const socialMedia = socialMedias.get(socialMediaId)
    return socialMedia?.postModes[0].id
  }

  const firstPostModeId = getFirstPostModeId();

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
    const postId = tab.postModeId;

    if (tab.posts[postId]) {
      tab.posts[postId].text = e.target.value;
=======
    if (!isEmpty(posts) && isEmpty(tabs)) {
      const [ post ] = Object.values(posts)
      const id = nanoid();

      setCurrentTab(id);
      setTabs({[id]: {
        postId: post.id, 
        postsModeId: getFirstPostMode(post.postModes)
      }})
>>>>>>> Stashed changes
    }
  }, [posts])

<<<<<<< Updated upstream
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

  const onChangePostMode = (postModeId: PostMode['id']): void => {
    const tab = { ...tabs[currentTab] };
    tab.postModeId = postModeId;

    setTabs({
      ...tabs,
      [currentTab]: tab,
    });

    console.log(tabs);
  };
=======
  function changeCurrentTab(): void {
    
  }

  function changePostMode(): void {
  }

  function handleContentChange(): void {
  }
>>>>>>> Stashed changes

  if (!currentTab || !tabs[currentTab]) {
    return <div>No tabs available</div>;
  }

  const returnFirstPostModeId = () => {
    console.log(tabs[currentTab], "tabs")
    if (tabs[currentTab].postModeId) {
      return tabs[currentTab].postModeId
    }

    const [, socialMediaId] = currentTab.split('-');
    const socialMedia = socialMedias.get(socialMediaId)
    return socialMedia?.postModes[0].id
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
<<<<<<< Updated upstream
            accountSocialMediaId={tabs[currentTab].account.socialMediaId}
            changePostModeId={(postModeId) => onChangePostMode(postModeId)}
            postModeId={returnFirstPostModeId()}
          />
          <MainComposerBase
            accountId={tabs[currentTab].account.id.toString()}
            currentMaxLimit={currentPostModeMaxLimit ?? undefined}
            onChange={handleContentChange}
            postMode={tabs[currentTab].postModeId ?? firstPostModeId}
            value={
              tabs[currentTab].posts[tabs[currentTab].postModeId]?.text ??
              ''
            }
=======
            currentPostModeId={tabs[currentTab].postsModeId}
            currentTab={tabs[currentTab].account}
            onChangePostMode={changePostMode}
          />
          <MainComposerBase
            accountId={tabs[currentTab].postId}
            onChange={handleContentChange}
            postMode={tabs[currentTab].postsModeId}
            value={''}
>>>>>>> Stashed changes
          />
        </div>
        <div className={scss.previewContainer}>
          <Preview>
<<<<<<< Updated upstream
            {tabs[currentTab].posts[tabs[currentTab].postModeId]?.text}
=======
            {''}
>>>>>>> Stashed changes
          </Preview>
        </div>
      </div>
    </div>
    
  );
}

export default Tabber;
