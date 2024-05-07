import { ReactNode } from 'react';

export type TContentEditorProps = {
  editor?: ReactNode;
  isOpen: boolean;
  onToggle?: (opened: boolean) => void;
  title: string;
};
