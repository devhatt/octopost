import ComposerEditor from '~components/ComposerEditor/ComposerEditor';
import InputImage from '~components/InputImage/InputImage';

import scss from './home.module.scss';

const Home = () => {
  return (
    <div className={scss.mainContainer}>
      <div className={scss.gridContainer}>
        <div className={scss.gridSwitches} />
        <div className={scss.gridInput}>
          <ComposerEditor />
          <div className={scss.imageInput}>
            <InputImage />
          </div>
        </div>

        <div className={scss.gridTabs} />
      </div>
    </div>
  );
};

export default Home;
