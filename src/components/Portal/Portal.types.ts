import { MouseEventHandler, PropsWithChildren } from 'react';

export type TPortalProps = PropsWithChildren<{
  isOpen: boolean;
  onClickOutside?: MouseEventHandler<HTMLDivElement>;
  className?: string;
}>;
