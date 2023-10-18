import { HTMLProps } from 'react';

export interface IInputProps extends HTMLProps<HTMLInputElement> {
  value?: string;
  required?: boolean;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  handleClear: () => void;
}
