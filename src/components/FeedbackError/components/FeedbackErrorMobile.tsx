import { ReactNode } from 'react';

import { useError } from '~stores/useError/useError';

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

  return Object.entries(errors).length > 0 && renderErrorMobile();
}

export default FeedbackErrorMobile;
