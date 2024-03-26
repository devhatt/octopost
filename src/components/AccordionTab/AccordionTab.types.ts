import { PropsWithChildren } from 'react';

type TOnChangeOpen = (newIsOpen: boolean) => void;

export type TAccordionTabProps = PropsWithChildren<{
  className?: string;
  hideCloseButton?: boolean;
  isOpen?: boolean;
  onChangeOpen?: TOnChangeOpen;
  title?: string;
}>;
