import React, { MouseEventHandler, PropsWithChildren } from 'react';

export type TModalProps = PropsWithChildren<{
  isOpen: boolean;
  onClickOutside?: MouseEventHandler<HTMLDivElement>;
  className?: string;
  header?: string | React.ReactNode;
}>;
