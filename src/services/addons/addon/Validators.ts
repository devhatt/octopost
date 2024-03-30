export type AspectRatio = `${number}:${number}`;

export type ImageFormats = 'gif' | 'jpeg' | 'jpg' | 'png' | 'webp';
export type VideoFormats = 'avi' | 'mov' | 'mp4' | 'webm';
export type MediaFormats = ImageFormats | VideoFormats;

export type TextValidator = {
  text: {
    maxLength: number;
  };
};

export type MediaValidator = {
  media: {
    allowedFormats: MediaFormats[];
    ar: AspectRatio[];

    maxFileSize: number;
    mediaQtyLimit: number;
  };
};

export type Validators =
  | MediaValidator
  | TextValidator
  | (MediaValidator & TextValidator);
