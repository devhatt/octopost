import { ReactNode } from 'react';

import {
  instagramLink,
  octopostLink,
  tiktokLink,
  twitterLink,
} from './links/links';

import InstagramIcon from './components/InstagramIcon';
import OctopostLogo from './components/OctopostLogo';
import TikTokIcon from './components/TikTokIcon';
import TwitterIcon from './components/TwitterIcon';

import scss from './Header.module.scss';

function Header(): ReactNode {
  return (
    <header className={scss.header}>
      <nav className={scss.nav}>
        <OctopostLogo alt="octopost logo" link={octopostLink} />
        <ul className={scss.navList}>
          <li className={scss.navItem}>
            <TikTokIcon
              alt="tiktok icon"
              className={scss.navItemImage}
              link={tiktokLink}
            />
          </li>
          <li className={scss.navItem}>
            <TwitterIcon
              alt="twitter icon"
              className={scss.navItemImage}
              link={twitterLink}
            />
          </li>
          <li className={scss.navItem}>
            <InstagramIcon
              alt="instagram icon"
              className={scss.navItemImage}
              link={instagramLink}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
