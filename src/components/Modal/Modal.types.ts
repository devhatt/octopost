import { MouseEventHandler, PropsWithChildren } from 'react';

export type TModalProps = PropsWithChildren<{
  isOpen: boolean;
  onClickOutside?: MouseEventHandler<HTMLDivElement>;
  className?: string;
}>;
