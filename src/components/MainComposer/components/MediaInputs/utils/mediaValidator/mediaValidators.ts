import { ImageValidator } from './imageValidator/imageValidator';
import { VideoValidator } from './videoValidator/videoValidator';

import { FileValidator } from './interfaces/fileValidator.types';

export class MediaValidators implements FileValidator {
  private readonly media: ImageValidator | VideoValidator;

  constructor(file: File) {
    this.media = file.type.includes('video')
      ? new VideoValidator(file)
      : new ImageValidator(file);
  }

  public size = (limitSize: number): boolean => this.media.size(limitSize);

  public resolution = async (
    limitWidth: number,
    limitHeight: number
  ): Promise<boolean> => this.media.resolution(limitWidth, limitHeight);

  public aspectRatio = async (limitAspectRatio: string): Promise<boolean> =>
    this.media.aspectRatio(limitAspectRatio);

  public duration = async (
    limitDuration: number
  ): Promise<boolean | undefined> => {
    if (this.media instanceof VideoValidator) {
      return this.media.duration(limitDuration);
    }
    return true;
  };
}
