import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import scss from './Hero.module.scss';

import Octo from './images/octo.svg?react';
import OctopostLogo from './images/octopost.svg?react';

function Hero(): ReactNode {
  const navigate = useNavigate();

  return (
    <main className={scss.main}>
      <header className={scss.header}>
        <a aria-label="octopost logo" className={scss.logo} href="/">
          <OctopostLogo />
        </a>
        <button className={scss.signin} onClick={() => navigate('/create')}>
          Sign in
        </button>
      </header>
      <div className={scss.hero}>
        <p className={scss.title}>New here?</p>
        <p className={scss.description}>
          Welcome to Octopost. Enter your personal
          <br />
          details and start your journey with us
        </p>
      </div>
      <div className={scss.octo} data-testId="octopost-icon">
        <Octo />
      </div>
    </main>
  );
}

export default Hero;
