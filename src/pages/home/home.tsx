import ComposerEditor from '~components/ComposerEditor/ComposerEditor';
import ManyMediaInputs from '~components/ManyInputMedias/ManyInputs';

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
            <ManyMediaInputs />
          </div>

          <div className={scss.gridTabs} />
        </div>
      </div>
    </>
  );
};

export default Home;
