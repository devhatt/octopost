import { HTMLProps, ReactElement } from 'react';

type HtmlInputProps = Omit<HTMLProps<HTMLInputElement>, 'onChange'>;

export type TInputProps = HtmlInputProps & {
  error?: boolean;
  RightIcon?: ReactElement;
  supportText?: string;
};
