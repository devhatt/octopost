import { ImageValidator } from './imageValidator/imageValidator';
import { FileValidator } from './interfaces/fileValidator';
import { VideoValidator } from './videoValidator/videoValidator';

export class MediaValidator implements FileValidator {
  public media: ImageValidator | VideoValidator;

  constructor(file: File) {
    this.media = file.type.includes('video')
      ? new VideoValidator(file)
      : new ImageValidator(file);
  }

  public checkSize = (limitSize: number): boolean =>
    this.media.checkSize(limitSize);

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
  };
}
