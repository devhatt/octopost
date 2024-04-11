import type { Validators } from './Validators';
import type { Widget } from './Widget';

export interface PostMode {
  name: string;
  previewComponent: string;
  validators: Validators;
  widgets: Widget[];
}
