import { HTMLProps, ReactElement } from 'react';

type HtmlInputProps = Omit<HTMLProps<HTMLInputElement>, 'onChange'>;

export type TInputProps = HtmlInputProps & {
  error?: boolean;
  rightIcon?: ReactElement;
  supportText?: string;
};
