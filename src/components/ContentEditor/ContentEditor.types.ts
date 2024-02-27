import { ReactNode } from 'react';

export interface TContentEditorProps {
  editor?: ReactNode;
  isOpen: boolean;
  onToggle?: (opened: boolean) => void;
  title: string;
}
