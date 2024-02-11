import { ComponentPropsWithoutRef, ReactNode } from 'react';

type BaseHTMLProps = Omit<ComponentPropsWithoutRef<'div'>, 'content'>;

export type AccordionProps = BaseHTMLProps & {
  className?: string;
  content: ReactNode;
  duration?: number;
  header: ReactNode;
  isOpen: boolean;
};
