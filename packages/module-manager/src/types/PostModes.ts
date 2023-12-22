import type { Validators } from './Validators';
import type { Widget } from './Widget';

import type { GenericObject } from '~/utils/primitives';

export interface PostMode {
  name: string;
  previewComponent: React.ComponentType<{
    customData: GenericObject;
    medias: File[];
    text: string;
  }>;
  validators: Validators;
  widgets: Widget[];
}
