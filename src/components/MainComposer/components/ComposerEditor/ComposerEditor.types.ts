import { ChangeEvent, PropsWithChildren } from 'react';

import {
  PostMode,
  SocialMedia,
} from '~services/api/social-media/social-media.types';

export type TInputChange = (newText: string) => void;
export type TInputPostChange = (
  event: ChangeEvent<HTMLTextAreaElement>
) => void;

export type ComposerEditorProps = PropsWithChildren<{
  accountId?: string;
  maxCharacters?: number;
  onChange?: TInputChange;
  onChangePost?: TInputPostChange;
  onError?: (error: ErrorMapText) => void;
  postModeId?: PostMode['id'];
  socialMediaId?: SocialMedia['id'];
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
