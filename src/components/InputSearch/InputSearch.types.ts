import { ForwardedRef, HTMLProps } from 'react';

type HtmlInputProps = Omit<HTMLProps<HTMLInputElement>, 'onChange'>;

export type TInputProps = HtmlInputProps & {
  error?: boolean;
  errorMessage?: string;
  onChange?: (value: string) => void;
};

export type TInputComponent = {
  clearInput: () => void;
};

export type TInputComponentRef = ForwardedRef<TInputComponent>;
