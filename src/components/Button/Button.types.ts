import { ReactElement } from 'react';

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary';
  disabled?: boolean;
  type?: 'button' | 'reset' | 'submit';
  variant?: 'container' | 'outlined' | 'text';
}

export interface ITextButtonProps extends IButtonProps {
  disableElevation?: boolean;
}

export interface ICircleButtonProps extends IButtonProps {
  circle: boolean;
  icon: ReactElement;
}
