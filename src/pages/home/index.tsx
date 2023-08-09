import scss from './index.module.scss';

import CharacterCountdown from '../../components/CharacterCountDown';
import Tabber from '../../components/Tabber';

const Home = () => {
  return (
    <div>
      <div className={scss.Home}>
        <h1>Octopus</h1>
        <img className={scss.Logo} src="/logo.png" />

        <div>
          <CharacterCountdown maxLength={140} />
        </div>
      </div>
      <Tabber></Tabber>
    </div>
  );
};

export default Home;
