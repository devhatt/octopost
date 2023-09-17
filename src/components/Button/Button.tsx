import classNames from 'classnames';

import scss from '~components/Button/Button.module.scss';

import { ITextButtonProps, ICircleButtonProps } from './Button.types';

function Button(props: ITextButtonProps | ICircleButtonProps) {
  const RenderTextButton = () => {
    const {
      disableElevation,
      className,
      children,
      disabled,
      onClick,
      variant,
      color,
      type,
    } = props as ITextButtonProps;

    const classes: string = classNames(
      className,
      scss.textButton,
      scss[`${color ? color : 'primary'}`],
      scss[`${variant ? variant : 'text'}`],
      scss[`${disabled ? 'disabled' : ''}`],
      scss[`${disableElevation ? 'disableElevation' : ''}`]
    );

    return (
      <button
        type={type ? type : 'button'}
        className={classes}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };

  const RenderCircleButton = () => {
    const { className, disabled, variant, color, type, onClick, icon } =
      props as ICircleButtonProps;

    const classes: string = classNames(
      className,
      scss.circleButton,
      scss[`${color ? color : 'primary'}`],
      scss[`${variant ? variant : 'text'}`],
      scss[`${disabled ? 'disabled' : ''}`]
    );

    return (
      <button
        type={type ? type : 'button'}
        className={classes}
        disabled={disabled}
        onClick={onClick}
      >
        {icon}
      </button>
    );
  };

  return 'circle' in props ? RenderCircleButton() : RenderTextButton();
}

export default Button;
