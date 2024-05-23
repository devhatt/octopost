export type FileValidator = {
  aspectRatio: (limitAspectRatio: string) => Promise<boolean>;
  checkSize: (limitSize: number) => boolean;
  resolution: (limitWidth: number, limitHeight: number) => Promise<boolean>;
};
