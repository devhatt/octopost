import classNames from 'classnames';

import scss from '~components/Button/Button.module.scss';

import { ITextButtonProps, ICircleButtonProps } from './Button.types';

function Button(props: ITextButtonProps | ICircleButtonProps) {
  const RenderTextButton = (props: ITextButtonProps) => {
    const classes: string = classNames(
      props.className,
      scss.textButton,
      scss[`${props.color ? props.color : 'primary'}`],
      scss[`${props.variant ? props.variant : 'text'}`],
      scss[`${props.disabled ? 'disabled' : ''}`],
      scss[`${props.disableElevation ? 'disableElevation' : ''}`]
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
      scss[`${props.color ? props.color : 'primary'}`],
      scss[`${props.variant ? props.variant : 'text'}`],
      scss[`${props.disabled ? 'disabled' : ''}`]
    );

    return (
      <button
        type={props.type ? props.type : 'button'}
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
