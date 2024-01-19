import { useState } from 'react';

import ComposerEditor from '~components/ComposerEditor/ComposerEditor';
import FeedbackError from '~components/FeedbackError/FeedbackError';
import FirstComment from '~components/FirstComment/FirstComment';
import MainComposer from '~components/MainComposer/MainComposer';
import SavBar from '~components/SavBar/SavBar';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

import scss from './home.module.scss';

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [inputText, setInputText] = useState('');

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
              title="Main Content"
              isOpen={isOpen}
              onToggle={() => setIsOpen(!isOpen)}
              editor={editor}
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
};

export default Home;
