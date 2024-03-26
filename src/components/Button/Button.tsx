import { ReactNode } from 'react';

import classNames from 'classnames';

import scss from '~components/Button/Button.module.scss';

import { ICircleButtonProps, ITextButtonProps } from './Button.types';

function Button(props: ICircleButtonProps | ITextButtonProps): ReactNode {
  function RenderTextButton(props: ITextButtonProps): ReactNode {
    const classes: string = classNames(
      props.className,
      scss.textButton,
      scss[`${props.variant ?? 'text'}`],
      scss[`${props.color ?? 'primary'}`],
      scss[`${props.disabled ? 'disabled' : null}`],
      scss[`${props.disableElevation ? 'disableElevation' : null}`]
    );

    return (
      <button
        className={classes}
        disabled={props.disabled}
        onClick={props.onClick}
        type={props.type ?? 'button'}
      >
        {props.children}
      </button>
    );
  }

  function RenderCircleButton(props: ICircleButtonProps): ReactNode {
    const classes: string = classNames(
      props.className,
      scss.circleButton,
      scss[`${props.variant || 'text'}`],
      scss[`${props.color || 'primary'}`],
      scss[`${props.disabled ? 'disabled' : null}`]
    );

    return (
      <button
        className={classes}
        disabled={props.disabled}
        onClick={props.onClick}
        type={props.type || 'button'}
      >
        {props.icon}
      </button>
    );
  }

  return 'circle' in props
    ? RenderCircleButton(props)
    : RenderTextButton(props);
}

export default Button;
