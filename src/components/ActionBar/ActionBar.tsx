import { ReactNode } from 'react';

import Button from '~components/Button/Button';

import scss from './SavBar.module.scss';

function SavBar(): ReactNode {
  return (
    <div className={scss.savBarWrapper}>
      <Button> Save as draft</Button>
    </div>
  );
}

export default SavBar;
