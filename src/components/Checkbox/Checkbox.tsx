import { ChangeEventHandler } from 'react';

import classNames from 'classnames';

import styles from './Checkbox.module.scss';

import { TCheckboxProps } from './Checkbox.types';

function Checkbox(props: TCheckboxProps) {
  const handleChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { checked },
  }) => props.onChange(checked);

  return (
    <label className={classNames(styles.container, props.className)}>
      <input
        type="checkbox"
        onChange={handleChange}
        className={styles.input}
        checked={props.checked}
      />
      <span className={styles.text}>{props.children}</span>
    </label>
  );
}

export default Checkbox;
