import { useEffect } from 'react';

import { TwitterService } from 'modules/twitter/service/service';

import ComposerEditor from '~components/ComposerEditor/ComposerEditor';
import MainComposer from '~components/MainComposer/MainComposer';
import MediaInputs from '~components/MediaInputs/MediaInput';
import SavBar from '~components/SavBar/SavBar';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

import scss from './home.module.scss';

const Home = () => {
  const s = new TwitterService();
  useEffect(() => {
    s.publish('agora vai?');
  }, []);

  return (
    <>
      <Header />

      <div className={scss.mainContainer}>
        <div className={scss.gridContainer}>
          <div className={scss.gridSwitches}>
            <Sidebar />
          </div>
          <div className={scss.gridInput}>
            <ComposerEditor />
            <MainComposer />
            <MediaInputs />
          </div>

          <div className={scss.gridTabs} />
        </div>
        <SavBar />
      </div>
    </>
  );
};

export default Home;
