import { ChangeEventHandler } from 'react';

import classNames from 'classnames';

import styles from './Checkbox.module.scss';

import { TCheckboxProps } from './Checkbox.types';

function Checkbox({ children, className, onChange, ...props }: TCheckboxProps) {
  const handleChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { checked },
  }) => {
    if (onChange) onChange(checked);
  };

  return (
    <label className={classNames(styles.container, className)}>
      <input
        type="checkbox"
        onChange={handleChange}
        className={styles.input}
        {...props}
      />
      <span className={styles.text}>{children}</span>
    </label>
  );
}

export default Checkbox;
