export type FileValidator = {
  aspectRatio: (limitAspectRatio: string) => Promise<boolean>;
  resolution: (limitWidth: number, limitHeight: number) => Promise<boolean>;
  size: (limitSize: number) => boolean;
};
