import { ReactNode, useEffect, useState } from 'react';

import ActionBar from '~pages/home/components/ActionBar/ActionBar';

import { useSocialMediaStore } from '~stores/useSocialMediaStore';
import isEmpty from '~utils/isEmpty/isEmpty';

import ComposerEditor from '~components/ComposerEditor/ComposerEditor';
import MainComposer from '~components/ContentEditor/ContentEditor';
import FeedbackError from '~components/FeedbackError/FeedbackError';
import Tabber from '~components/Tabber/Tabber';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

import scss from './home.module.scss';

function Home(): ReactNode {
  const { accounts, getAllAccounts } = useSocialMediaStore();
  const [isOpen, setIsOpen] = useState(true);
  const [inputText, setInputText] = useState('');

  const editor = <ComposerEditor onChange={setInputText} value={inputText} />;

  useEffect(() => {
    if (isEmpty(accounts)) getAllAccounts();
  }, [accounts, getAllAccounts]);

  return (
    <>
      <Header />
      <main className={scss.content}>
        <aside className={scss.aside}>
          <Sidebar />
        </aside>
        <div className={scss.aditor}>
          <MainComposer
            editor={editor}
            isOpen={isOpen}
            onToggle={() => setIsOpen(!isOpen)}
            title="Main Content"
          />
          {!isEmpty(accounts) && <Tabber />}
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
