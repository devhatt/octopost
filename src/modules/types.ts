import React from 'react';

import { EHttpStatusCode } from '~enums/httpStatusCodes';
import { TGenericObject } from '~types/object';

export interface IPublishResponse {
  status: EHttpStatusCode;
}

export interface IService {
  publish: (
    text: string,
    image: File[],
    customOpts: TGenericObject
  ) => Promise<IPublishResponse>;
}

export type TAspectRatio = `${number}:${number}`;

export type TImageFormats = 'png' | 'jpg' | 'jpeg' | 'webp' | 'gif';
export type TVideoFormats = 'mp4' | 'mov' | 'avi' | 'webm';
export type TMediaFormats = TImageFormats | TVideoFormats;

export interface ITextValidator {
  text: {
    maxLength: number;
  };
}

export interface IMediaValidator {
  media: {
    maxFileSize: number;
    mediaQtyLimit: number;

    ar: TAspectRatio[];
    allowedFormats: TMediaFormats[];
  };
}

export type TValidators =
  | (IMediaValidator & ITextValidator)
  | IMediaValidator
  | ITextValidator;

export interface IWidget {
  name: string;
  icon: JSX.Element;
  component: React.ComponentType<{ onChange: () => TGenericObject }>;
}

export interface IPostMode {
  name: string;
  validators: TValidators;
  widgets: IWidget[];
  previewComponent: React.ComponentType<{
    text: string;
    medias: File[];
    customData: TGenericObject;
  }>;
}

export interface IOctoModule {
  name: string;
  icon: JSX.Element;
  postModes: IPostMode[];
  services: IService;
}
