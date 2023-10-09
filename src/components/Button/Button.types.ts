import { ReactElement } from 'react';

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: 'text' | 'container' | 'outlined';
  type?: 'button' | 'submit' | 'reset';
  color?: 'primary' | 'secondary';
  disabled?: boolean;
}

export interface ITextButtonProps extends IButtonProps {
  disableElevation?: boolean;
}

export interface ICircleButtonProps extends IButtonProps {
  icon: ReactElement;
  circle: boolean;
}
