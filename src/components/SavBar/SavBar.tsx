import React from 'react';

import Button from '~components/Button/Button';
import SubmitButton from '~components/SubmitButton/SubmitButton';

import scss from './SavBar.module.scss';

function SavBar(): React.JSX.Element {
  return (
    <div className={scss.savBarWrapper}>
      <Button> Save as draft</Button>
      <SubmitButton />
    </div>
  );
}

export default SavBar;
