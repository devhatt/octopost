import { getAspectRatio } from '../utils/getAspectRatio';

import { FileValidator } from '../interfaces/fileValidator.types';
import { ImageData } from './imageData.type';

export class ImageValidator implements FileValidator {
  private readonly image: File;

  constructor(file: File) {
    this.image = file;
  }

  public size = (limitSize: number): boolean => this.image.size <= limitSize;

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

  public getData = async (): Promise<ImageData> =>
    new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener('load', (e) => {
        const img = new Image();
        img.src = e.target?.result as string;

        img.addEventListener('load', () => {
          resolve({
            height: img.height,
            width: img.width,
          });
        });
      });
      reader.readAsDataURL(this.image);
    });
}
