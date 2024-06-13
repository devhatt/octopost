import { getAspectRatio } from '../utils/getAspectRatio';

import { FileValidator } from '../interfaces/fileValidator.types';
import { VideoData } from './videoData.type';

export class VideoValidator implements FileValidator {
  private readonly video: File;

  constructor(file: File) {
    this.video = file;
  }

  public size = (limitSize: number): boolean => this.video.size <= limitSize;

  public resolution = async (
    limitWidth: number,
    limitHeight: number
  ): Promise<boolean> => {
    const { height, width } = await this.getData();

    return width <= limitWidth && height <= limitHeight;
  };

  public aspectRatio = async (limitAspectRatio: string): Promise<boolean> => {
    const aspectRatio = getAspectRatio(limitAspectRatio);
    const { height, width } = await this.getData();

    const imageAspectRatio = width / height;

    return imageAspectRatio <= aspectRatio;
  };

  public duration = async (limitDuration: number): Promise<boolean> => {
    const { duration } = await this.getData();

    return duration <= limitDuration;
  };

  public getData = async (): Promise<VideoData> =>
    new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        const video = document.createElement('video');
        video.addEventListener('loadeddata', () =>
          resolve({
            duration: video.duration,
            height: video.videoHeight,
            width: video.videoWidth,
          })
        );
        video.src = reader.result as string;
      });

      reader.readAsDataURL(this.video);
    });
}
