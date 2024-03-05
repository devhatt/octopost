import { ReactNode } from 'react';

import Button from '~components/Button/Button';

import scss from './ActionBar.module.scss';

function ActionBar(): ReactNode {
  return (
    <div className={scss.actionBarWrapper}>
      <Button className={scss.actionBarButton}>Save as draft</Button>
      <div className={scss.actionButtonsContainer}>
        <Button className={scss.postNowButton}>Post Now</Button>
        <Button className={scss.postLaterButton}>Post Later</Button>
      </div>
    </div>
  );
}

export default ActionBar;
