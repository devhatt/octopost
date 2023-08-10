import scss from './App.module.scss';

import './styles/base.scss';

function App() {
  return (
    <div className={scss.mainContainer}>
      <div className={scss.gridContainer}>
        <div className={scss.gridSwitches} />
        <div className={scss.gridInput} />
        <div className={scss.gridTabs} />
      </div>
    </div>
  );
}

export default App;
