import { ReactNode } from 'react';

import scss from '~pages/home/components/Tabber/Tabs/Tabs.module.scss';

import { useHorizontalScroll } from '~hooks/useHorizontalScroll/useHorizontalScroll';
import { Account } from '~services/api/accounts/accounts.types';
import { SocialMedia } from '~services/api/social-media/social-media.types';
import { usePostStore } from '~stores/usePostStore/usePostStore';
import { useSocialMediaStore } from '~stores/useSocialMediaStore/useSocialMediaStore';

import Tab from './components/Tab';

import { Tab as TabType } from '../Tabber.types';
import { FoundAccount, TabsProps } from './Tabs.types';

function Tabs(props: TabsProps): ReactNode {
  const { accounts, socialMedias } = useSocialMediaStore();
  const { posts } = usePostStore();
  const {
    containerRef,
    firstGradient,
    handleMouseEnter,
    handleMouseLeave,
    lastGradient,
    scrollToElement,
  } = useHorizontalScroll();

  const handleTabClick = (tab: TabType, tabElement: HTMLElement): void => {
    props.onChangeTab(tab);
    scrollToElement(tabElement);
  };

  const foundAccount = (tab: TabType): FoundAccount =>
    Object.values(accounts.data)
      .flat()
      .find((acc) => acc?.id === posts[tab.postId].accountId);

  const getSocialMediaIcon = (
    account: Account
  ): SocialMedia['icon'] | undefined =>
    socialMedias.get(account.socialMediaId)?.icon;

  return (
    <div className={scss.tabsWrapper}>
      <span className={scss.firstGradient} ref={firstGradient} />
      <div
        className={scss.tabsContainer}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={containerRef}
      >
        {Object.entries(props.tabs).map(([, tab]) => {
          const account = foundAccount(tab);
          if (account?.userName) {
            return (
              <Tab
                id={tab.id}
                isActive={tab.id === props.currentTab.id}
                key={tab.id}
                onClickTab={(element: HTMLElement) =>
                  handleTabClick(tab, element)
                }
                socialMediaIcon={getSocialMediaIcon(account)}
                title={account.userName}
              />
            );
          }
        })}
      </div>
      <span className={scss.lastGradient} ref={lastGradient} />
    </div>
  );
}

export default Tabs;
