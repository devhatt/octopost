import PreviewContainer from '~components/ComponentPreview/PreviewContainer';
import MainComposer from '~components/MainComposer/MainComposer';
import MediaInputs from '~components/MediaInputs/MediaInput';
import Preview from '~components/Preview/Preview';
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
            <MediaInputs />
          </div>

          <div className={scss.gridTabs} />
          <div className={scss.flexSelect}>
            <div className={scss.contentContainer}></div>
            <PreviewContainer
              preview={<Preview children="Preview Imaginário" />}
            />
          </div>
        </div>
        <SavBar />
      </div>
    </>
  );
};

export default Home;
