import scss from './index.module.scss';

import CharacterCountdown from '../../components/CharacterCountDown';
import InputImage from '../../components/InputImage';

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
      <InputImage />
    </div>
  );
};
export default Home;
