import { ChangeEvent } from 'react';

import { PostMode } from '~services/api/social-media/social-media.types';
import { DataPost } from '~stores/usePost/usePost.types';

import { ErrorMapText } from '../ComposerEditor/ComposerEditor.types';
import { ErrorMediaInput } from '../InputMediaGroup/InputMediaGroup.type';

export type MainComposerBaseProps = {
  accountId?: string;
  currentMaxLimit?: number;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onErrorMedia?: (error: ErrorMediaInput) => void;
  onErrorText?: (error: ErrorMapText) => void;
  postId?: DataPost['id'];
  postModeId?: PostMode['id'];
  value?: string;
};
