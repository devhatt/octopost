import { ComponentType, FC, ReactNode } from 'react';

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

export type TImageFormats = 'gif' | 'jpeg' | 'jpg' | 'png' | 'webp';
export type TVideoFormats = 'avi' | 'mov' | 'mp4' | 'webm';
export type TMediaFormats = TImageFormats | TVideoFormats;

export interface ITextValidator {
  text: {
    maxLength: number;
  };
}

export interface IMediaValidator {
  media: {
    allowedFormats: TMediaFormats[];
    ar: TAspectRatio[];

    maxFileSize: number;
    mediaQtyLimit: number;
  };
}

export type TValidators =
  IMediaValidator | IMediaValidator & ITextValidator | ITextValidator;

export interface IWidget {
  component: ComponentType<{ onChange: () => TGenericObject }>;
  icon: JSX.Element;
  name: string;
}

export interface IPreviewComponent {
  customData?: TGenericObject;
  medias?: File[];
  text: string;
}

export interface IPostMode {
  name: string;
  previewComponent: FC<IPreviewComponent>;
  validators: TValidators;
  widgets: IWidget[];
}

export interface IOctoModule {
  icon: ReactNode;
  name: string;
  postModes: IPostMode[];
  services: IService;
}
