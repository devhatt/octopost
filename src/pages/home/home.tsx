import { useSearchParams } from 'react-router-dom';

import MainComposer from '~components/MainComposer/MainComposer';
import MediaInputs from '~components/MediaInputs/MediaInput';
import Portal from '~components/Portal/Portal';
import SavBar from '~components/SavBar/SavBar';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

import scss from './home.module.scss';

const Home = () => {
  const [URLSearchParams, setURLSearchParams] = useSearchParams();

  const handleCloseModal = () => {
    setURLSearchParams({});
  };

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
            <Portal
              isOpen={URLSearchParams.get('isModalOpen') !== null}
              onClickOutside={handleCloseModal}
            ></Portal>
          </div>
          <div className={scss.gridTabs} />
        </div>
        <SavBar />
      </div>
    </>
  );
};

export default Home;
