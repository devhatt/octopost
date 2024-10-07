import { ReactNode } from 'react';

import scss from './DesktopHeader.module.scss';

import OctopostLogo from './images/octopost.svg?react';

function DesktopHeader(): ReactNode {
  return (
    <header className={scss.header}>
      <a aria-label="octopost logo" href="/">
        <OctopostLogo />
      </a>
    </header>
  );
}

export default DesktopHeader;
