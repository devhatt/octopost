import { ReactNode } from 'react';

import Button from '~components/Button/Button';

import scss from './ActionBar.module.scss';

function ActionBar(): ReactNode {
  return (
    <div className={scss.actionBarWrapper}>
      <Button className={scss.postNowButton} variant="container">
        Post Now
      </Button>
    </div>
  );
}

export default ActionBar;
