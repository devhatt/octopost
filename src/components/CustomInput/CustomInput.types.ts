import { ComponentPropsWithoutRef, ForwardedRef } from 'react';

export type TInputProps = Omit<
  ComponentPropsWithoutRef<'input'>,
  'onChange'
> & {
  error?: boolean;
  errorMessage?: string;
  onChange?: (value: string) => void;
};

export type TInputComponent = {
  clearInput: () => void;
};

export type TInputComponentRef = ForwardedRef<TInputComponent>;
