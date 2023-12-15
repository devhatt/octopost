import { Manager } from '@lib/Manager';
export type {
  OctoModule,
  AspectRatio,
  GenericObject,
  ImageFormats,
  MediaFormats,
  MediaValidator,
  PostMode,
  PublishResponse,
  Service,
  TextValidator,
  Validators,
  VideoFormats,
  Widget,
} from '@lib/OctoModule';

export const manager = new Manager();

declare global {
  interface Window {
    $$manager: typeof manager;
  }
}

window.$$manager = manager;
