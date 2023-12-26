import { ReactNode } from 'react';

export interface TAccordionProps {
  className?: string;
  content: ReactNode;
  duration?: number;
  header: ReactNode;
  isOpen: boolean;
}
