import { ReactNode } from 'react';

import scss from './SubmitButton.module.scss';

function SubmitButton(): ReactNode {
  const isDisabled = false;

  return (
    <div className={scss.buttonWrapper}>
      <button
        className={scss.submitButtonPostLater}
        disabled={isDisabled}
        type="button"
      >
        Post Later
      </button>
      <button
        className={scss.submitButtonPostNow}
        disabled={isDisabled}
        type="button"
      >
        Post Now
      </button>
    </div>
  );
}

export default SubmitButton;
