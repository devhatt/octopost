import { ReactNode } from 'react';

import { useSocialMediaStore } from '~stores/useSocialMediaStore/useSocialMediaStore';
import isEmpty from '~utils/isEmpty/isEmpty';

import FeedbackError from '~components/FeedbackError/FeedbackError';
import MainComposer from '~components/MainComposer/MainComposer';
import Tabber from '~components/Tabber/Tabber';

import ActionBar from './components/ActionBar/ActionBar';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

import scss from './home.module.scss';

function Home(): ReactNode {
  const { accounts } = useSocialMediaStore();

 

  return (
    <>
      <Header />
      <main className={scss.content}>
        <aside className={scss.aside}>
          <Sidebar />
        </aside>
        <div className={scss.aditor}>
          <MainComposer />
          {accounts.data && !isEmpty(accounts.data) && <Tabber />}
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