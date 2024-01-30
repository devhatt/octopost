import { PropsWithChildren } from 'react';

export type TInputChange = (newText: string) => void;

export type TComposerEditorProps = PropsWithChildren<{
  inputText: string;
  onTextChange?: TInputChange;
  test?: string;
}>;
