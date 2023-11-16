import { ChangeEventHandler, forwardRef } from 'react';

import classNames from 'classnames';

import styles from './Checkbox.module.scss';

import { TCheckboxProps } from './Checkbox.types';

const Checkbox = forwardRef<HTMLInputElement, TCheckboxProps>(function Checkbox(
  { children, labelProps, className, onChange, style, ...props },
  ref
) {
  const handleChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { checked },
  }) => {
    if (onChange) onChange(checked);
  };

  return (
    <label
      {...labelProps}
      style={style}
      className={classNames(styles.container, className)}
    >
      <input
        type="checkbox"
        ref={ref}
        onChange={handleChange}
        className={classNames(styles.input)}
        {...props}
      />
      <span className={classNames(styles.text)}>{children}</span>
    </label>
  );
});

export default Checkbox;
