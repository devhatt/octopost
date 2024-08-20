import { PostMode, SocialMedia } from '~services/api/social-media/social-media.types';

export type MediaInput = {
  accountId?: string;
  onError?: (error: ErrorMediaInput) => void;
  postModeId?: PostMode['id'];
  socialMediaId?: SocialMedia['id']
};

export type ErrorMediaInput = {
  accountId: string | undefined;
  message: string;
  postModeId: string | undefined;
};
