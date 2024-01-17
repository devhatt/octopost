import { ReactNode } from 'react';

export type TMainComposerProps = {
  isOpen: boolean;
  title: string;
  onChangeOpen?: () => void;
  editor: ReactNode;
};
