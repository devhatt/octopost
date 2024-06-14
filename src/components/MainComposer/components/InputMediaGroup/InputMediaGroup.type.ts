import { PostMode } from '~services/api/social-media/social-media.types';

export type MediaInput = {
  accountId?: string;
  onError?: (error: ErrorMediaInput) => void;
  postMode?: PostMode;
};

export type ErrorMediaInput = {
  accountId: string | undefined;
  message: string;
  postModeId: string | undefined;
};
