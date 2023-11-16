import { ComponentPropsWithoutRef, ReactNode } from 'react';

export type TAccordionProps = ComponentPropsWithoutRef<'div'> & {
  duration?: number;
  isOpen: boolean;
  renderContent: () => ReactNode;
  renderHeader: () => ReactNode;
};
