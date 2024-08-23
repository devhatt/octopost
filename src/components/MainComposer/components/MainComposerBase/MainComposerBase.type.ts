import { ChangeEvent } from 'react';

import { PostMode } from '~services/api/social-media/social-media.types';

export type MainComposerChildrens = {
  accountId?: string;
  addError?: MainComposerErrorEmiter;
  postMode?: PostMode;
  removeError?: (id: string) => void;
};

export type Error = {
  accountId: string | undefined;
  fileId?: string;
  message: string;
  postModeId: string | undefined;
};

export type MainComposerBaseProps = {
  accountId?: string;
  currentMaxLimit?: number;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onError?: (hasError: boolean) => void;
  postMode?: PostMode;
  value?: string;
};

export type MainComposerErrorEmiter = (key: string, error: Error) => void;
