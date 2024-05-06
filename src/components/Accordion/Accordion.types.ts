import { ReactNode } from 'react';

export type TAccordionProps = {
  className?: string;
  content: ReactNode;
  duration?: number;
  header: ReactNode;
  isOpen: boolean;
};
