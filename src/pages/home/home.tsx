import InputMaster from '~components/InputMaster/InputMaster';

import scss from './home.module.scss';

const Home = () => {
  return (
    <div className={scss.mainContainer}>
      <div className={scss.gridContainer}>
        <div className={scss.gridSwitches} />
        <div className={scss.gridInput}>
          <InputMaster />
        </div>
        <div className={scss.gridTabs} />
      </div>
    </div>
  );
};

export default Home;
