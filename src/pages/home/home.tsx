import FeedbackError from '~components/FeedbackError/FeedbackError';
import FirstComment from '~components/FirstComment/FirstComment';
import MainComposer from '~components/MainComposer/MainComposer';
import SavBar from '~components/SavBar/SavBar';

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
