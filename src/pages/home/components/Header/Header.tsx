import { ReactNode } from 'react';

import { SOCIAL_MEDIAS } from '~constants/social-medias';

import Icon from '~components/Icon/Icon';

import scss from './Header.module.scss';

import InstagramIcon from './images/instagram.svg?react';
import OctopostLogo from './images/octopost.svg?react';
import TikTokIcon from './images/tiktok.svg?react';
import TwitterIcon from './images/twitter.svg?react';

function Header(): ReactNode {
  return (
    <header className={scss.header}>
      <nav className={scss.nav}>
        <a aria-label="octopost logo" className={scss.link} href="/">
          <OctopostLogo />
        </a>
        <ul className={scss.list}>
          <li className={scss.item}>
            <a
              aria-label="tiktok icon"
              className={scss.link}
              href={SOCIAL_MEDIAS.TIKTOK}
            >
              <TikTokIcon />
            </a>
          </li>
          <li className={scss.item}>
            <a
              aria-label="twitter icon"
              className={scss.link}
              href={SOCIAL_MEDIAS.TWITTER}
            >
              <TwitterIcon />
            </a>
          </li>
          <li className={scss.item}>
            <a
              aria-label="instagram icon"
              className={scss.link}
              href={SOCIAL_MEDIAS.INSTAGRAM}
            >
              <InstagramIcon />
            </a>
          </li>
          <li>
            <button className={scss.hamburguerIcon}>
              {' '}
              <Icon
                className={scss.dropDownIcon}
                data-testid="dropdown-arrow"
                icon="hamburguer"
                size={24}
              />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
