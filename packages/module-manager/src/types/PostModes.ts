import React from 'react';
import type { GenericObject } from '../utils/primitives';
import type { Validators } from './Validators';
import type { Widget } from './Widget';

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
