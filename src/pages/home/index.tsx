import scss from './index.module.scss';

const Home = () => {
  return (
    <div className={scss.Home}>
      <h1>Octopus</h1>

      <img className={scss.Logo} src="/logo.png" />
    </div>
  );
};

export default Home;
