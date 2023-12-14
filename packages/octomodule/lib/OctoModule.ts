import React from 'react';

export type GenericObject<T = never> = {
  [key: string]: T extends never ? never : T;
};

export interface PublishResponse {}

export interface Service {
  publish: (
    text: string,
    image: File[],
    customOpts: GenericObject
  ) => Promise<PublishResponse>;
}

export type AspectRatio = `${number}:${number}`;

export type ImageFormats = 'png' | 'jpg' | 'jpeg' | 'webp' | 'gif';
export type VideoFormats = 'mp4' | 'mov' | 'avi' | 'webm';
export type MediaFormats = ImageFormats | VideoFormats;

export interface TextValidator {
  text: {
    maxLength: number;
  };
}

export interface MediaValidator {
  media: {
    maxFileSize: number;
    mediaQtyLimit: number;

    ar: AspectRatio[];
    allowedFormats: MediaFormats[];
  };
}

export type Validators =
  | (MediaValidator & TextValidator)
  | MediaValidator
  | TextValidator;

export interface Widget {
  name: string;
  icon: JSX.Element;
  component: React.ComponentType<{ onChange: () => GenericObject }>;
}

export interface PostMode {
  name: string;
  validators: Validators;
  widgets: Widget[];
  previewComponent: React.ComponentType<{
    text: string;
    medias: File[];
    customData: GenericObject;
  }>;
}

export interface OctoModule {
  name: string;
  icon: JSX.Element;
  postModes: PostMode[];
  services: Service;
}
