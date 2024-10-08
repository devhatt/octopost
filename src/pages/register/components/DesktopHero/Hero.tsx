import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '~components/Button/Button';

import scss from './Hero.module.scss';

import Octo from './images/octo.svg?react';

function Hero(): ReactNode {
  const navigate = useNavigate();

  return (
    <div className={scss.desktopHeroWrapper}>
      <section className={scss.hero}>
        <h1 className={scss.title}>Welcome back</h1>
        <h2 className={scss.description}>
          To keep connected to yourself please login with your personal info
        </h2>
        <Button
          className={scss.signInButton}
          color="secondary"
          onClick={() => navigate('/login')}
        >
          Sign in
        </Button>
      </section>
      <div className={scss.octoWrapper} data-testId="octopost-icon">
        <Octo className={scss.desktopOcto} />
      </div>
    </div>
  );
}

export default Hero;
