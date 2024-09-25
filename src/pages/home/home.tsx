import { ReactNode } from 'react';

import isEmpty from 'lodash.isempty';

import { useSocialMediaStore } from '~stores/useSocialMediaStore/useSocialMediaStore';

import FeedbackError from '~components/FeedbackError/FeedbackError';
import MainComposer from '~components/MainComposer/MainComposer';

import ActionBar from './components/ActionBar/ActionBar';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Tabber from './components/Tabber/Tabber';

import scss from './home.module.scss';

function Home(): ReactNode {
  const { accounts } = useSocialMediaStore();

  return (
    <>
      <div className={scss.header}>
        <Header />
      </div>
      <main className={scss.content}>
        <aside className={scss.aside}>
          <Sidebar />
        </aside>
        <div className={scss.editor}>
          <MainComposer />
          {!isEmpty(accounts.data) && <Tabber />}
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
