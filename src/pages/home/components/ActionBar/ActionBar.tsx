import { ReactNode } from 'react';

import Button from '~components/Button/Button';
import Icon from '~components/Icon/Icon';

import scss from './ActionBar.module.scss';

function ActionBar(): ReactNode {
  return (
    <div className={scss.container}>
      <div className={scss.composeContainer}>
        <Icon className={scss.closeIcon} icon="close" size={14} />
        <p>Compose</p>
      </div>
      <div className={scss.navigationIconContainer}>
        <Icon className={scss.arrowIcon} icon="right-arrow" size={12} />
      </div>

      <Button className={scss.submit} variant="container">
        Postar
      </Button>
    </div>
  );
}

export default ActionBar;
