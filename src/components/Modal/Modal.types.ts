import { MouseEventHandler, PropsWithChildren, ReactNode } from 'react';

export type TModalProps = PropsWithChildren<{
  className?: string;
  footer: ReactNode;
  isOpen: boolean;
  onClickOutside?: MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
  title: string;
}>;
