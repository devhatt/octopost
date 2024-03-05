import { ReactNode } from 'react';

import Button from '~components/Button/Button';

import scss from './SavBar.module.scss';

function ActionBar(): ReactNode {
  return (
    <div className={scss.actionBarWrapper}>
      <Button> Save as draft</Button>
    </div>
  );
}

export default ActionBar;
