import { forwardRef } from 'react';

import classNames from 'classnames';

import styles from './Checkbox.module.scss';

import { ifProp } from '../../utils/ifProp';
import { TCheckboxProps } from './Checkbox.types';

const Checkbox = forwardRef<HTMLInputElement, TCheckboxProps>(function Checkbox(
  {
    children,
    labelProps,
    className,
    multine = true,
    variant = 'normal',
    ...props
  },
  ref
) {
  return (
    <label
      {...labelProps}
      className={classNames(
        ifProp(variant, (variant) => styles[`container--${variant}`]),
        styles.container,
        labelProps?.className
      )}
    >
      <input
        type="checkbox"
        ref={ref}
        className={classNames(styles.input, className)}
        {...props}
      />
      <span
        className={classNames(styles.text, !multine && styles.textNotMultiline)}
      >
        {children}
      </span>
    </label>
  );
});

export default Checkbox;
