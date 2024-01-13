import { HTMLProps } from 'react';
import { ForwardedRef } from 'react';

export type TInputProps = HTMLProps<HTMLInputElement> & {
  error?: boolean;
  errorMessage?: string;
  onChange: (value: string) => void;
};

export type TInputComponent = {
  clearInput: () => void;
};

export type TInputComponentRef = ForwardedRef<TInputComponent>;
