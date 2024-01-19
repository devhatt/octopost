import { ReactNode } from 'react';

export type TMainComposerProps = {
  isOpen: boolean;
  title: string;
  onToggle?: (opened: boolean) => void;
  editor?: ReactNode;
};
