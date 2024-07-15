import { ChangeEvent } from 'react';

import { PostMode } from '~services/api/social-media/social-media.types';

export type Error = {
  accountId: string | undefined;
  fileId?: string;
  message: string;
  postModeId: string | undefined;
};

export type MainComposerBaseProps = {
  accountId?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onError?: (hasError: boolean) => void;
  postMode?: PostMode;
  value?: string;
};

export type MainComposerErrorEmiter = (key: string, error: Error) => void;
