import { ReactNode } from 'react';

import isEmpty from 'lodash.isempty';

import { usePostStore } from '~stores/usePostStore/usePostStore';

import Button from '~components/Button/Button';
import Icon from '~components/Icon/Icon';

import scss from './ActionBar.module.scss';

function ActionBar(): ReactNode {
  const { posts } = usePostStore();

  return (
    <div className={scss.container}>
      <div className={scss.composeContainer}>
        <Icon className={scss.closeIcon} icon="close" size={14} />
        <p className={scss.composeLabel}>Compose</p>
      </div>
      <Button
        circle
        className={scss.navigationIconContainer}
        color="secondary"
        disabled={isEmpty(posts)}
        icon={<Icon className={scss.arrowIcon} icon="arrow-right" size={12} />}
      />
      <Button className={scss.submit} variant="container">
        Postar
      </Button>
    </div>
  );
}

export default ActionBar;
