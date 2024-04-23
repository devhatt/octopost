import { ReactNode, useEffect, useState } from 'react';

import { useModulesStore } from '~stores/useModulesStore';
import isEmpty from '~utils/isEmpty/isEmpty';

import ActionBar from '~components/ActionBar/ActionBar';
import ComposerEditor from '~components/ComposerEditor/ComposerEditor';
import MainComposer from '~components/ContentEditor/ContentEditor';
import FeedbackError from '~components/FeedbackError/FeedbackError';
import FirstComment from '~components/FirstComment/FirstComment';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

import scss from './home.module.scss';

function Home(): ReactNode {
  const { getAllAccounts, modules } = useModulesStore();
  const [isOpen, setIsOpen] = useState(true);
  const [inputText, setInputText] = useState('');

  const editor = <ComposerEditor onChange={setInputText} value={inputText} />;

  useEffect(() => {
    if (isEmpty(modules)) getAllAccounts();
  }, [getAllAccounts, modules]);

  return (
    <>
      <Header />
      <div className={scss.mainContainer}>
        <div className={scss.gridContainer}>
          <div className={scss.gridSwitches}>
            <Sidebar />
          </div>
          <div className={scss.gridInput}>
            <MainComposer
              editor={editor}
              isOpen={isOpen}
              onToggle={() => setIsOpen(!isOpen)}
              title="Main Content"
            />
            <FirstComment />
            <FeedbackError />
          </div>
        </div>
        <ActionBar />
      </div>
    </>
  );
}

export default Home;
