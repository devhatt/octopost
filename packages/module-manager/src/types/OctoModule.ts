import type { PostMode } from './PostModes';
import type { Service } from './Service';

export interface OctoModule {
  icon: string;
  id: string;
  name: string;
  postModes: PostMode[];
  services: Service;
}
