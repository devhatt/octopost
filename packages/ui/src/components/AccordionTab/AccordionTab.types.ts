import { ComponentPropsWithoutRef, ReactNode } from 'react';

type AccordionTabOpenChangeHandler = (isOpen: boolean) => void;

export type AccordionTabProps = ComponentPropsWithoutRef<'div'> & {
  children?: ReactNode;
  hideCloseButton?: boolean;
  isOpen?: boolean;
  onOpenChange?: AccordionTabOpenChangeHandler;
  title?: string;
};
