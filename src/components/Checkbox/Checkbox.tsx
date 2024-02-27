import { ChangeEvent, forwardRef } from 'react';

import classNames from 'classnames';

import styles from './Checkbox.module.scss';

import { CheckboxProps } from './Checkbox.types';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ children, ...props }, ref) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
      if (props.onChange) props.onChange(event.target.checked);
    };

    return (
      <label className={classNames(styles.container, props.className)}>
        <input
          {...props}
          checked={props.checked}
          className={styles.input}
          onChange={handleChange}
          ref={ref}
          type="checkbox"
        />
        <span className={styles.text}>{children}</span>
      </label>
    );
  }
);
