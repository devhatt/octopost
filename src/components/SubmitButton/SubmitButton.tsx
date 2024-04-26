import { ReactNode } from 'react';

import scss from './SubmitButton.module.scss';

function SubmitButton(): ReactNode {
  return (
    <div className={scss.buttonWrapper}>
      <button className={scss.buttonWrapperPrimary} type="button">
        Post Later
      </button>
      <button className={scss.buttonWrapperContainer} type="button">
        Post Now
      </button>
    </div>
  );
}

export default SubmitButton;
