import React, { MouseEventHandler, PropsWithChildren } from 'react';

export type TModalProps = PropsWithChildren<{
  isOpen: boolean;
  onClickOutside?: MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
  className?: string;
  title: string;
  footer: React.ReactNode;
}>;
