import React from 'react';

import classNames from 'classnames';

import scss from './Switch.module.scss';

import { ISwitch } from './Switch.types';

function Switch(props: ISwitch): React.JSX.Element {
  const handleCheck = (ev: React.ChangeEvent<HTMLInputElement>): void => {
    props.setChecked(ev.target.checked);
  };

  const hasError = true;

  const inputClasses = classNames(scss.input, {
    [scss.error]: hasError,
  });

  return (
    <input
      checked={props.checked}
      className={inputClasses}
      onChange={handleCheck}
      type="checkbox"
    />
  );
}

export default Switch;
