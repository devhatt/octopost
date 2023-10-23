import { HTMLProps } from 'react';

export interface IInputProps extends HTMLProps<HTMLInputElement> {
  error?: boolean;
  errorMessage?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
