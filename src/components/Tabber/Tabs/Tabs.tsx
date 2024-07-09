import { ReactNode } from 'react';

import classNames from 'classnames';

import { useHorizontalScroll } from '~hooks/useHorizontalScroll/useHorizontalScroll';
import { Account } from '~services/api/accounts/accounts.types';
import { useSocialMediaStore } from '~stores/useSocialMediaStore/useSocialMediaStore';

import scss from '~components/Tabber/Tabs/Tabs.module.scss';

import { Tab, TabId } from '../Tabber.types';
import { TabsProps } from './Tabs.types';

function Tabs(props: TabsProps): ReactNode {
  const { socialMedias } = useSocialMediaStore();
  const {
    containerRef,
    firstGradient,
    handleMouseEnter,
    handleMouseLeave,
    lastGradient,
    scrollToElement,
  } = useHorizontalScroll();

  const tabClasses = (id: TabId): string =>
    classNames(scss.tab, id === props.currentTab.id && scss.active);

  const renderSocialMediaIcon = (account: Account): ReactNode =>
    socialMedias.get(account.socialMediaId)?.icon;

  const handleTabClick = (
    tab: Tab,
    tabId: TabId,
    tabElement: HTMLElement
  ): void => {
    props.onChangeTab(tab, tabId);
    scrollToElement(tabElement);
  };

  const renderTabs = (tabId: TabId, tab: Tab): ReactNode => (
    <div
      className={tabClasses(tabId)}
      key={tabId}
      onClick={(e) => handleTabClick(tab, tabId, e.currentTarget)}
    >
      {renderSocialMediaIcon(tab.account as Account)}
      <span className={scss.tabTitle}>{tab.account.userName}</span>
    </div>
  );

  return (
    <>
      <span className={scss.firstGradient} ref={firstGradient} />
      <div
        className={scss.tabsContainer}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={containerRef}
      >
        {Object.entries(props.tabs).map(([tabId, tab]) =>
          renderTabs(tabId as TabId, tab)
        )}
      </div>
      <span className={scss.lastGradient} ref={lastGradient} />
    </>
  );
}

export default Tabs;
