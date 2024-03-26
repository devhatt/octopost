import { HTMLAttributes, ReactElement } from 'react';

export type IButtonProps = HTMLAttributes<HTMLButtonElement> & {
  color?: 'primary' | 'secondary';
  disabled?: boolean;
  type?: 'button' | 'reset' | 'submit';
  variant?: 'container' | 'outlined' | 'text';
}

export type ITextButtonProps = IButtonProps & {
  disableElevation?: boolean;
}

export type ICircleButtonProps = IButtonProps & {
  circle: boolean;
  icon: ReactElement;
}
