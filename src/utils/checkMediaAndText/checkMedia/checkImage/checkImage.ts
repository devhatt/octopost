import { getAspectRatio, getImageData } from '../utils/getMediaData';

export async function checkImageResolution(
  file: File,
  limitWidth: number,
  limitHeight: number
): Promise<boolean> {
  if (!file.type.includes('image')) throw new Error('File is not a image');
  const { height, width } = await getImageData(file);

  return width <= limitWidth && height <= limitHeight;
}

export async function checkImageAspectRatio(
  file: File,
  limitAspectRatio: string
): Promise<boolean> {
  if (!file.type.includes('image')) throw new Error('File is not a image');
  const aspectRatio = getAspectRatio(limitAspectRatio);
  const { height, width } = await getImageData(file);

  const imageAspectRatio = width / height;

  return imageAspectRatio <= aspectRatio;
}
