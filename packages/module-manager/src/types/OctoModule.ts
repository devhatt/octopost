import type { ReactElement } from 'react';

import type { PostMode } from './PostModes';
import type { Service } from './Service';

export interface OctoModule {
  icon: ReactElement;
  name: string;
  postModes: PostMode[];
  services: Service;
}
