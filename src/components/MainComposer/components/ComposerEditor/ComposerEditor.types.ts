import { ChangeEvent, PropsWithChildren } from 'react';

import { PostMode } from '~services/api/social-media/social-media.types';

import { MainComposerErrorEmiter } from '../MainComposerBase/MainComposerBase.type';

export type InputChange = (event: ChangeEvent<HTMLTextAreaElement>) => void;

export type ComposerEditorProps = PropsWithChildren<{
  accountId?: string;
  addError?: MainComposerErrorEmiter;
  onChange?: InputChange;
  currentMaxLimit?: number;
  onError?: (error: ErrorMapText) => void
  postMode?: PostMode;
  removeError?: (id: string) => void;
  value?: string;
}>;

export type HigherLimitSocial = {
  limit: number;
  socialMediaId: string;
};

export enum TEXT_ERRORS {
  MAX_LENGTH_EXCEED = 1,
}

export type TextErrorMap = Record<TEXT_ERRORS, string>;
