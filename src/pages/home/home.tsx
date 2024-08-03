import { ReactNode, useState } from 'react';

import Tabber from '~pages/home/components/Tabber/Tabber';

import { usePostStore } from '~stores/usePostStore/usePostStore';
import { StoreAccount } from '~stores/useSocialMediaStore/useSocialMediaStore.types';

import FeedbackError from '~components/FeedbackError/FeedbackError';
import MainComposer from '~components/MainComposer/MainComposer';

import ActionBar from './components/ActionBar/ActionBar';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

import scss from './home.module.scss';

import { PostAccounts } from './home.types';

function Home(): ReactNode {
  const [postAccounts, setPostAccounts] = useState<PostAccounts>(new Map());

  const hasPosts = postAccounts.size > 0;

  const enableOnTabber = (account: StoreAccount): void => {
    const updatedPostAccounts = new Map(postAccounts);

    updatedPostAccounts.set(account.id, {
      accountId: account.id,
      socialMediaId: account.socialMediaId,
      userName: account.userName,
    });

    setPostAccounts(updatedPostAccounts);
  };

  const disableOnTabber = (accountId: StoreAccount['id']): void => {
    postAccounts.delete(accountId);
    setPostAccounts(new Map(postAccounts));
  };

  return (
    <>
      <Header />
      <main className={scss.content}>
        <aside className={scss.aside}>
          <Sidebar
            onDisableAccount={disableOnTabber}
            onEnableAccount={enableOnTabber}
          />
        </aside>
        <div className={scss.aditor}>
          <MainComposer />
          <Tabber />
          <FeedbackError />
        </div>
        <div className={scss.actions}>
          <ActionBar />
        </div>
      </main>
    </>
  );
}

export default Home;
