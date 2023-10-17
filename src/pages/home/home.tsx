import ComposerEditor from '~components/ComposerEditor/ComposerEditor';
import MainComposer from '~components/MainComposer/MainComposer';
import SaveBar from '~components/SaveBar/SaveBar';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

import scss from './home.module.scss';

const Home = () => {
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
          </div>
          <div className={scss.gridTabs} />
        </div>
        <SaveBar />
      </div>
    </>
  );
};

export default Home;
