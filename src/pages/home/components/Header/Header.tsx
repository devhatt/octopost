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
            <a href="https://www.tiktok.com/@devhatt_">
              <img
                alt="tiktok icon"
                className={scss.navItemImage}
                src={tiktokIcon}
              />
            </a>
          </li>

          <li className={scss.navItem}>
            <a href="https://twitter.com/DevHatt">
              <img
                alt="twitter icon"
                className={scss.navItemImage}
                src={twitterIcon}
              />
            </a>
          </li>
          <li className={scss.navItem}>
            <a href="https://www.instagram.com/devhatt_">
              <img
                alt="instagram icon"
                className={scss.navItemImage}
                src={instagramIcon}
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
