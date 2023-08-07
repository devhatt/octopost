import scss from './index.module.scss';

import CharacterCountdown from '../../components/CharacterCountDown';

const Home = () => {
  return (
    <div className={scss.Home}>
      <h1>Octopus</h1>
      <img className={scss.Logo} src="/logo.png" />

      <div>
        <CharacterCountdown maxLength={140} />
      </div>
    </div>
  );
};

export default Home;
