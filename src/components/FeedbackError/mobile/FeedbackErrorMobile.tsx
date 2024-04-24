import { ReactNode } from 'react';

import { Icon } from '~components/Icon/Icon';

import scss from './FeedbackErrorMobile.module.scss';

import { TFeedbackErrorMobileProps } from './FeedbackErrorMobile.type';

function FeedbackErrorMobile({ error }: TFeedbackErrorMobileProps): ReactNode {
  return (
    <div className={scss.errorContainer}>
      <Icon className={scss.alertIcon} icon="alert" size={20} />
      <div className={scss.errorMessageContainer}>
        <p className={scss.errorMessage}>{error.message}</p>
      </div>
    </div>
  );
}

export default FeedbackErrorMobile;
