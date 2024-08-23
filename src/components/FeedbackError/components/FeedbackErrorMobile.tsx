import { ReactNode } from 'react';

import isEmpty from 'lodash.isempty';

import { useError } from '~stores/useErrorStore/useErrorStore';

import Icon from '~components/Icon/Icon';

import scss from './FeedbackErrorMobile.module.scss';

function FeedbackErrorMobile(): ReactNode {
  const { errors } = useError();

  const renderErrorMobile = (): ReactNode => (
    <button className={scss.errorContainer} type="button">
      <Icon className={scss.alertIcon} icon="alert" size={20} />
      <div className={scss.errorMessageContainer}>
        <p className={scss.errorMessage}>
          Algumas publicações estão com erros, corrija-os para prosseguir.
          Clique aqui para mais detalhes.
        </p>
      </div>
    </button>
  );

  return !isEmpty(errors) && renderErrorMobile();
}

export default FeedbackErrorMobile;
