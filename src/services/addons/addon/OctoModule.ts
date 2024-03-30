import type { ReactElement } from 'react';

import type { PostMode } from './PostModes';
import type { Service } from './Service';

export type OctoModule = {
  icon: string;
  id: string;
  name: string;
  postModes: PostMode[];
};
