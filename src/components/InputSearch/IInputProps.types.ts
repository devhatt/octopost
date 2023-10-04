import { HTMLProps } from 'react';

export interface IInputProps extends HTMLProps<HTMLInputElement> {
  readonly: boolean;
  errors?: boolean;
  errorMessage?: string;
  handleClear: () => void;
}
