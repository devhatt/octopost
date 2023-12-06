import { PropsWithChildren } from 'react';

type TOnChangeOpen = (newIsOpen: boolean) => void;

export type TAccordionTabProps = PropsWithChildren<{
  title?: string;
  className?: string;
  isOpen?: boolean;
  hideCloseButton?: boolean;
  onChangeOpen?: TOnChangeOpen;
}>;
