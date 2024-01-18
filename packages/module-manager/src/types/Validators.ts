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
    allowedFormats: MediaFormats[];
    ar: AspectRatio[];

    maxFileSize: number;
    mediaQtyLimit: number;
  };
}

export type Validators =
  | (MediaValidator & TextValidator)
  | MediaValidator
  | TextValidator;
