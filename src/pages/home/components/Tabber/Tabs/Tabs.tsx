import { ReactNode} from 'react';

import scss from '~pages/home/components/Tabber/Tabs/Tabs.module.scss';
import classNames from 'classnames';

import { useHorizontalScroll } from '~hooks/useHorizontalScroll/useHorizontalScroll';
import { Account } from '~services/api/accounts/accounts.types';
import { usePostStore } from '~stores/usePost/usePost';
import { useSocialMediaStore } from '~stores/useSocialMediaStore/useSocialMediaStore';

import { Tab } from '../Tabber.types';
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

  const tabClasses = (id: string): string =>
    classNames(scss.tab, id === props.currentTab.id && scss.active);

  const renderSocialMediaIcon = (account: Account): ReactNode =>
    socialMedias.get(account.socialMediaId)?.icon;

  const handleTabClick = (
    tab: Tab,
    tabElement: HTMLElement
  ): void => {
    props.onChangeTab(tab);
    scrollToElement(tabElement);
  };
  
  const findAccount = (tab: Tab): FoundAccount => Object.values(accounts.data)
    .flat()
    .find((acc) => acc?.id === posts[tab.postId].accountId)

  const renderTabs = (tab: Tab): ReactNode => {
    const account = findAccount(tab)

    return (
      <div
        className={tabClasses(tab.id)}
        key={tab.id}
        onClick={(e) => handleTabClick(tab, e.currentTarget)}
      >
        {renderSocialMediaIcon(account as Account)}
        <span className={scss.tabTitle}>{account?.userName}</span>
      </div>
    );
  }

  return (
    <div className={scss.tabsWrapper}>
      <span className={scss.firstGradient} ref={firstGradient} />
      <div
        className={scss.tabsContainer}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={containerRef}
      >
        {Object.entries(props.tabs).map(([, tab]) =>
          renderTabs(tab)
        )}
      </div>
      <span className={scss.lastGradient} ref={lastGradient} />
    </div>
  );
}

export default Tabs;
