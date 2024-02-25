import { ReactNode, useState } from 'react';

import { useModule } from '~contexts/ModuleContext';

import ComposerEditor from '~components/ComposerEditor/ComposerEditor';
import MainComposer from '~components/ContentEditor/ContentEditor';
import FeedbackError from '~components/FeedbackError/FeedbackError';
import FirstComment from '~components/FirstComment/FirstComment';
import SavBar from '~components/SavBar/SavBar';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

import scss from './home.module.scss';

function Home(): ReactNode {
  const [isOpen, setIsOpen] = useState(true);
  const [inputText, setInputText] = useState('');
  const { modules } = useModule();

  const editor = (
    <ComposerEditor inputText={inputText} onTextChange={setInputText} />
  );

  return (
    <>
      <Header />
      <div className={scss.mainContainer}>
        <div className={scss.gridContainer}>
          <div className={scss.gridSwitches}>
            <Sidebar />
            {modules.map((item) => JSON.stringify(item))}
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
        <div className={scss.gridSavBar}>
          <SavBar />
        </div>
      </div>
    </>
  );
}

export default Home;
