import { ModuleRegister } from '@lib/ModuleRegister';
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

export const moduleRegister = new ModuleRegister();

declare global {
  interface Window {
    moduleRegister: typeof moduleRegister;
  }
}

window.moduleRegister = moduleRegister;
