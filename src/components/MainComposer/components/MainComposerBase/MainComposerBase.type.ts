import { ChangeEvent } from 'react';

import { PostMode, SocialMedia } from '~services/api/social-media/social-media.types';

import { ErrorMapText } from '../ComposerEditor/ComposerEditor.types';
import { ErrorMediaInput } from '../InputMediaGroup/InputMediaGroup.type';

export type MainComposerBaseProps = {
  accountId?: string;
  currentMaxLimit?: number;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onErrorMedia?: (error: ErrorMediaInput) => void;
  onErrorText?: (error: ErrorMapText) => void;
  postModeId?: PostMode['id'];
  socialMediaId?: SocialMedia['id']
  value?: string;
};
