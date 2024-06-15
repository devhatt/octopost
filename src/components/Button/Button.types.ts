import { HTMLAttributes, ReactElement } from 'react';

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  color?: 'primary' | 'secondary';
  disabled?: boolean;
  type?: 'button' | 'reset' | 'submit';
  variant?: 'container' | 'outlined' | 'text';
};

export type TextButtonProps = ButtonProps & {
  disableElevation?: boolean;
};

export type CircleButtonProps = ButtonProps & {
  circle: boolean;
  icon: ReactElement;
};
