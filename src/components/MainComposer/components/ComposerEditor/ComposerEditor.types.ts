import { ChangeEvent, PropsWithChildren } from 'react';

import { PostMode } from '~services/api/social-media/social-media.types';

export type TInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => void;

export type ComposerEditorProps = PropsWithChildren<{
  accountId?: string;
  onChange?: TInputChange;
  onError?: (error: ErrorMapText) => void;
  postMode?: PostMode;
  value?: string;
}>;

export type ErrorText = {
  accountId: string | undefined;
  message: string;
  postModeId: string | undefined;
};

export type ErrorMapText = Record<string, ErrorText[]>;

export type HigherLimitSocial = {
  limit: number;
  socialMediaId: string;
};
