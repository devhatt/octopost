import classNames from 'classnames';

import scss from '~components/Button/Button.module.scss';

import { ITextButtonProps, ICircleButtonProps } from './Button.types';

function Button(props: ITextButtonProps | ICircleButtonProps) {
  const RenderTextButton = (props: ITextButtonProps) => {
    const classes: string = classNames(
      props.className,
      scss.textButton,
      scss[`${props.variant || 'text'}`],
      scss[`${props.color || 'primary'}`],
      scss[`${props.disabled ? 'disabled' : null}`],
      scss[`${props.disableElevation ? 'disableElevation' : null}`]
    );

    return (
      <button
        type={props.type ? props.type : 'button'}
        className={classes}
        disabled={props.disabled}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    );
  };

  const RenderCircleButton = (props: ICircleButtonProps) => {
    const classes: string = classNames(
      props.className,
      scss.circleButton,
      scss[`${props.variant || 'text'}`],
      scss[`${props.color || 'primary'}`],
      scss[`${props.disabled ? 'disabled' : null}`]
    );

    return (
      <button
        type={props.type || 'button'}
        className={classes}
        disabled={props.disabled}
        onClick={props.onClick}
      >
        {props.icon}
      </button>
    );
  };

  return 'circle' in props
    ? RenderCircleButton(props)
    : RenderTextButton(props);
}

export default Button;
