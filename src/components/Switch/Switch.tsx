import { ChangeEvent, forwardRef } from 'react';

import classNames from 'classnames';

import scss from './Switch.module.scss';

import { SwitchProps } from './Switch.types';

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ variant = 'default', invalid, ...props }, ref) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
      if (props.onChange && !invalid) props.onChange(event.target.checked);
    };

    const classes = classNames(scss.input, {
      [scss.error]: variant === 'error',
      [scss.invalid]: invalid,
    });

    return (
      <input
        checked={props.checked}
        className={classes}
        onChange={handleChange}
        ref={ref}
        type="checkbox"
      />
    );
  }
);
