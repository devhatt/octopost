import { PropsWithChildren } from 'react';

export type TInputChange = (newText: string) => void;

export type TComposerEditorProps = PropsWithChildren<{
  onChange?: TInputChange;
  value?: string;
}>;
