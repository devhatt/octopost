import { ReactNode } from 'react';

import { home, social_medias } from '~constants/social-medias';

import scss from './Header.module.scss';

import InstagramIcon from './images/instagram.svg?react';
import OctopostLogo from './images/octopost.svg?react';
import TikTokIcon from './images/tiktok.svg?react';
import TwitterIcon from './images/twitter.svg?react';

function Header(): ReactNode {
  return (
    <header className={scss.header}>
      <nav className={scss.nav}>
        <a aria-label="octopost logo" href={home}>
          <OctopostLogo />
        </a>
        <ul className={scss.list}>
          <li className={scss.item}>
            <a aria-label="tiktok icon" href={social_medias.tiktok}>
              <TikTokIcon />
            </a>
          </li>
          <li className={scss.item}>
            <a aria-label="twitter icon" href={social_medias.twitter}>
              <TwitterIcon />
            </a>
          </li>
          <li className={scss.item}>
            <a aria-label="instagram icon" href={social_medias.instagram}>
              <InstagramIcon />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
