import { ChangeEvent } from 'react';

import { PostMode } from '~services/api/social-media/social-media.types';

export type TMainComposer = {
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  postMode?: PostMode;
  value?: string;
};
