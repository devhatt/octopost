import FirstComment from '~components/FirstComment/FirstComment';
import MainComposer from '~components/MainComposer/MainComposer';
import MediaInputs from '~components/MediaInputs/MediaInput';
import SavBar from '~components/SavBar/SavBar';
import Tabber from '~components/Tabber/Tabber';

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
            <MainComposer />
            <MediaInputs />
            <Tabber />
            <FirstComment />
          </div>
          <div className={scss.gridTabs} />
        </div>
        <SavBar />
      </div>
    </>
  );
};

export default Home;
