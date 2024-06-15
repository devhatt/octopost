import { ForwardedRef, HTMLProps } from 'react';

import { Icons } from '~components/Icon/Icon.types';

type HtmlInputProps = Omit<HTMLProps<HTMLInputElement>, 'onChange' | 'prefix'>;

export type AffixAction = () => void;

type Affix =
  | {
      action: AffixAction;
      icon: Icons;
    }
  | { icon: Icons };

export type InputProps = HtmlInputProps & {
  error?: boolean;
  errorMessage?: string;
  onChange?: (value: string) => void;
  prefix?: Affix;
  suffix?: Affix;
};

export type InputComponent = {
  clearInput: () => void;
};

export type InputComponentRef = ForwardedRef<InputComponent>;
