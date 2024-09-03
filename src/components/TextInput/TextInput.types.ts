import { HTMLProps } from 'react';

import { IconsType } from '~components/Icon/Icon.types';

type HtmlInputProps = Omit<HTMLProps<HTMLInputElement>, 'onChange'>;

export type TInputProps = HtmlInputProps & {
  error?: boolean;
  handleRightIconClick?: () => void;
  rightIcon?: IconsType;
  supportText?: string;
};
