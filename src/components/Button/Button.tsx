import classNames from 'classnames';

import scss from '~components/Button/Button.module.scss';

import { ICircleButtonProps, ITextButtonProps } from './Button.types';

function Button(props: ICircleButtonProps | ITextButtonProps) {
  const type = props.type ?? 'button';
  function renderTextButton(props: ITextButtonProps) {
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
        className={classes}
        disabled={props.disabled}
        onClick={props.onClick}
        // eslint-disable-next-line react/button-has-type
        type={type}
      >
        {props.children}
      </button>
    );
  }

  function renderCircleButton(props: ICircleButtonProps) {
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
        // eslint-disable-next-line react/button-has-type
        type={props.type || 'button'}
      >
        {props.icon}
      </button>
    );
  }

  return 'circle' in props
    ? renderCircleButton(props)
    : renderTextButton(props);
}

export default Button;
