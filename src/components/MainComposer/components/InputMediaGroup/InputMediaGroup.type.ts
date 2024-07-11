import { PostMode } from '~services/api/social-media/social-media.types';

import { MainComposerErrorEmiter } from '../MainComposerBase/MainComposerBase.type';

export type MediaInput = {
  accountId?: string;
  addError?: MainComposerErrorEmiter;
  postMode?: PostMode;
  removeError?: (id: string | undefined) => void;
};

export enum MEDIA_ERRORS {
  MAX_AR_EXCEED = 1,
  MAX_DURATION_EXCEED = 2,
  MAX_RESOLUTION_EXCEED = 3,
  MAX_SIZE_EXCEED = 4,
}

export type MediaErrorMap = Record<MEDIA_ERRORS | number, string>;
