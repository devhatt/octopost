import { ReactNode } from 'react';

export type TAccordionProps = {
  className?: string;
  duration?: number;
  isOpen: boolean;
  content: ReactNode;
  header: ReactNode;
};
