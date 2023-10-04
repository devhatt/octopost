import { HTMLProps } from 'react';

export interface IInputProps extends HTMLProps<HTMLInputElement> {
  errors?: boolean;
  errorMessage?: string;
  handleClear: () => void;
}
