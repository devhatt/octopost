import { ReactNode, MouseEventHandler, PropsWithChildren } from 'react';

export type TModalProps = PropsWithChildren<{
  isOpen: boolean;
  onClickOutside?: MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
  className?: string;
  title: string;
  footer: ReactNode;
}>;
