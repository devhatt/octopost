import { ReactNode } from 'react';

import classNames from 'classnames';

import scss from '~components/Button/Button.module.scss';

import { CircleButtonProps, TextButtonProps } from './Button.types';

function Button(props: CircleButtonProps | TextButtonProps): ReactNode {
  function RenderTextButton(textButtonProps: TextButtonProps): ReactNode {
    const classes: string = classNames(
      textButtonProps.className,
      scss.textButton,
      scss.button,
      scss[`${textButtonProps.variant ?? 'text'}`],
      scss[`${textButtonProps.color ?? 'primary'}`],
      scss[`${textButtonProps.disabled ? 'disabled' : null}`],
      scss[`${textButtonProps.disableElevation ? 'disableElevation' : null}`]
    );

    return (
      <button
        className={classes}
        disabled={textButtonProps.disabled}
        onClick={textButtonProps.onClick}
        type={textButtonProps.type ?? 'button'}
      >
        {textButtonProps.children}
      </button>
    );
  }

  function RenderCircleButton(circleButtonprops: CircleButtonProps): ReactNode {
    const classes: string = classNames(
      circleButtonprops.className,
      scss.circleButton,
      scss.button,
      scss[`${circleButtonprops.variant ?? 'text'}`],
      scss[`${circleButtonprops.color ?? 'primary'}`],
      scss[`${circleButtonprops.disabled ? 'disabled' : null}`]
    );

    return (
      <button
        className={classes}
        disabled={circleButtonprops.disabled}
        onClick={circleButtonprops.onClick}
        type={circleButtonprops.type ?? 'button'}
      >
        {circleButtonprops.icon}
      </button>
    );
  }

  return 'circle' in props
    ? RenderCircleButton(props)
    : RenderTextButton(props);
}

export default Button;
