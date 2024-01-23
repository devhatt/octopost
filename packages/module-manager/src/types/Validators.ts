export type AspectRatio = `${number}:${number}`;

export type ImageFormats = 'gif' | 'jpeg' | 'jpg' | 'png' | 'webp';
export type VideoFormats = 'avi' | 'mov' | 'mp4' | 'webm';
export type MediaFormats = ImageFormats | VideoFormats;

export interface TextValidator {
  text: {
    maxLength: number;
  };
}

export interface MediaValidator {
  media: {
    allowedFormats: MediaFormats[];
    ar: AspectRatio[];

    maxFileSize: number;
    mediaQtyLimit: number;
  };
}

export type Validators =
  | MediaValidator
  | (MediaValidator & TextValidator)
  | TextValidator;
