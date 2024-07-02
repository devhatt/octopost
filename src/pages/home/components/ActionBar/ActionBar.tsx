import { ReactNode } from 'react';

import Button from '~components/Button/Button';
import Icon from '~components/Icon/Icon';

import scss from './ActionBar.module.scss';

function ActionBar(): ReactNode {
  return (
    <div className={scss.container}>
      <div className={scss.composeContainer}>
        <Icon className={scss.closeIcon} icon="close" size={14} />
        <p className={scss.composeLabel}>Compose</p>
      </div>
      <button className={scss.navigationIconContainer}>
        <Icon className={scss.arrowIcon} icon="arrowRight" size={12} />
      </button>

      <Button className={scss.submit} variant="container">
        Postar
      </Button>
    </div>
  );
}

export default ActionBar;
