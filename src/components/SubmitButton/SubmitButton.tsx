import { ReactNode } from 'react';

import scss from './SubmitButton.module.scss';

function SubmitButton(): ReactNode {
  return (
    <div className={scss.buttonWrapper}>
      <button className={scss.submitButtonPostLater} type="button">
        Post Later
      </button>
      <button className={scss.submitButtonPostNow} type="button">
        Post Now
      </button>
    </div>
  );
}
// fazer instancia para o ladle ser capaz de pegar a propriedade disabled do componente
export default SubmitButton;
