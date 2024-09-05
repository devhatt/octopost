import { IconsType } from '~components/Icon/Icon.types';

export type Post = {
  data: {
    text: string;
  };
  postModeId: PostMode['id'];
  socialMediaId: SocialMedia['id'];
};

export type SocialMedia = {
  icon: IconsType;
  id: string;
  name: string;
  postModes: PostMode[];
};

export type PostMode = {
  id: string;
  name: string;
  previewComponent: string;
  validators: Validators;
  widgets: Widget[];
};

export type Widget = {
  component: string;
  icon: string;
  name: string;
};

export type AspectRatio = `${number}:${number}`;
export type ImageFormats = 'gif' | 'jpeg' | 'jpg' | 'png' | 'webp';
export type VideoFormats = 'avi' | 'mov' | 'mp4' | 'webm';
export type MediaFormats = ImageFormats | VideoFormats;

export type TextValidator = {
  maxLength: number;
};

export type MediaValidator = {
  allowedFormats: MediaFormats[];
  ar: AspectRatio[];
  maxDuration: number;
  maxFileSize: number;
  maxHeight: number;
  maxWidth: number;
  mediaQtyLimit: number;
};

export type Validators = {
  media?: MediaValidator;
  text?: TextValidator;
};
