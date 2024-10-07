import { ChangeEvent } from 'react';

import {
  PostMode,
  SocialMedia,
} from '~services/api/social-media/social-media.types';

export type MainComposerChildrens = {
  accountId?: string;
  addError?: MainComposerErrorEmiter;
  postModeId?: PostMode['id'];
  removeError?: (id: string) => void;
  socialMediaId?: SocialMedia['id'];
};

export type Error = {
  accountId: string;
  fileId?: string;
  message: string;
  postModeId: string;
};

export type MainComposerBaseProps = {
  accountId?: string;
  maxCharacters?: number;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onError?: (hasError: boolean) => void;
  postModeId?: PostMode['id'];
  socialMediaId?: SocialMedia['id'];
  value?: string;
};

export type MainComposerErrorEmiter = (key: string, error: Error) => void;

export type PostModeInputMediaGroupProps = {
  accountId?: string;
  addError: (id: string, error: Error) => void;
  errorRemover: (id: string) => void;
  postModeId?: PostMode['id'];
  socialMediaId?: SocialMedia['id'];
};
