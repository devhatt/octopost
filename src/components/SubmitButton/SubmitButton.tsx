import { ReactNode } from 'react';

import scss from './SubmitButton.module.scss';

function SubmitButton(): ReactNode {
  return (
    <div className={scss.buttonWrapper}>
      <button className={scss.submitButtonPostNow} type="button">
        Post Now
      </button>
      <button className={scss.submitButtonPostLater} type="button">
        Post Later
      </button>
    </div>
  );
}

export default SubmitButton;
