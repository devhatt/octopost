import { ReactNode } from 'react';

import scss from './Header.module.scss';

import instagramIcon from './assets/instagram.svg';
import octopostLogo from './assets/octopostLogo.svg';
import tiktokIcon from './assets/tiktok.svg';
import twitterIcon from './assets/twitter.svg';

function Header(): ReactNode {
  return (
    <header className={scss.header}>
      <nav className={scss.nav}>
        <img alt="octopost logo" src={octopostLogo} />
        <ul className={scss.navList}>
          <li className={scss.navItem}>
            <img
              alt="tiktok icon"
              className={scss.navItemImage}
              src={tiktokIcon}
            />
          </li>
          <li className={scss.navItem}>
            <img
              alt="twitter icon"
              className={scss.navItemImage}
              src={twitterIcon}
            />
          </li>
          <li className={scss.navItem}>
            <img
              alt="instagram icon"
              className={scss.navItemImage}
              src={instagramIcon}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
