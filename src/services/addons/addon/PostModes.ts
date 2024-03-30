import type { Validators } from './Validators';
import type { Widget } from './Widget';

export type PostMode = {
  name: string;
  previewComponent: string;
  validators: Validators;
  widgets: Widget[];
};
