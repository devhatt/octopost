import { PropsWithChildren } from 'react';

type TOnChangeOpen = (newIsOpen: boolean) => void;

export type TAccordionTabProps = PropsWithChildren<{
  title?: string;
  isOpen?: boolean;
  className?: string;
  onChangeOpen?: TOnChangeOpen;
  hideCloseButton?: boolean;
}>;
