import CharacterCountdown from '../components/CharacterCountDown/CharacterCountDown';

import scss from './home.module.scss';

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
