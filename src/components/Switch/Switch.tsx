import classNames from 'classnames';

import scss from './Switch.module.scss';

import { ISwitch } from './Switch.types';

function Switch(props: ISwitch) {
  const handleCheck = (ev: React.ChangeEvent<HTMLInputElement>) => {
    props.setChecked(ev.target.checked);
  };

  const hasError = true;

  const inputClasses = classNames(scss.input, {
    [scss.error]: hasError,
  });

  return (
    <input
      className={inputClasses}
      checked={props.checked}
      onChange={handleCheck}
      type="checkbox"
    />
  );
}

export default Switch;
