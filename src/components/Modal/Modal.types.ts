import { MouseEventHandler, PropsWithChildren } from 'react';

export type TModalProps = PropsWithChildren<{
  className?: string;
  isOpen: boolean;
  onClickOutside?: MouseEventHandler<HTMLDivElement>;
}>;
