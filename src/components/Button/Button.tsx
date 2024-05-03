import { ReactNode } from 'react';

import classNames from 'classnames';

import scss from '~components/Button/Button.module.scss';

import { ICircleButtonProps, ITextButtonProps } from './Button.types';

function Button(props: ICircleButtonProps | ITextButtonProps): ReactNode {
  function RenderTextButton(textButtonProps: ITextButtonProps): ReactNode {
    const classes: string = classNames(
      textButtonProps.className,
      scss.textButton,
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

  function RenderCircleButton(
    circleButtonprops: ICircleButtonProps
  ): ReactNode {
    const classes: string = classNames(
      circleButtonprops.className,
      scss.circleButton,
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
