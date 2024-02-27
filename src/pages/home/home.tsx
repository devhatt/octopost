import { ReactNode, useState } from 'react';

import { useModule } from '~contexts/ModuleContext';

import ActionBar from '~components/ActionBar/ActionBar';
import ComposerEditor from '~components/ComposerEditor/ComposerEditor';
import MainComposer from '~components/ContentEditor/ContentEditor';
import FeedbackError from '~components/FeedbackError/FeedbackError';
import FirstComment from '~components/FirstComment/FirstComment';
import SavBar from '~components/SavBar/SavBar';
import SocialMediaList from '~components/SocialMediaList/SocialMediaList';
import Tabber from '~components/Tabber/Tabber';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

import scss from './home.module.scss';

function Home(): ReactNode {
  const [isOpen, setIsOpen] = useState(true);
  const [inputText, setInputText] = useState('');
  const { modules } = useModule();

  const editor = <ComposerEditor onChange={setInputText} value={inputText} />;

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
          <Tabber />
        </div>
        <ActionBar />
      </div>
    </>
  );
}

export default Home;
