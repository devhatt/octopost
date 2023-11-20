import FirstComment from '~components/FirstComment/FirstComment';
import Icon from '~components/Icon/IconFont';
import MainComposer from '~components/MainComposer/MainComposer';
import MediaInputs from '~components/MediaInputs/MediaInput';
import SavBar from '~components/SavBar/SavBar';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

import scss from './home.module.scss';

const Home = () => {
  return (
    <>
      <Header />

      <Icon icon="Gpt" size="large" color="active" />

      <div className={scss.mainContainer}>
        <div className={scss.gridContainer}>
          <div className={scss.gridSwitches}>
            <Sidebar />
          </div>
          <div className={scss.gridInput}>
            <MainComposer />
            <MediaInputs />
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
