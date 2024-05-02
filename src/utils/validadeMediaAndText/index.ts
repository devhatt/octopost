import {
  getImageDimensionsFromFile,
  getVideoDimensionsAndDurationFromFile,
} from './mediaDimensions';

export function validateTextLength(text: string, limitLength: number): boolean {
  return text.length <= limitLength;
}

export function validateMediaSize(file: File, limitSize: number): boolean {
  return file.size <= limitSize;
}

export async function validateImageResolution(
  file: File,
  width: number,
  height: number
): Promise<boolean> {
  if (!file.type.includes('image')) throw new Error('File is not a image');

  const imageDimensions = await getImageDimensionsFromFile(file);

  return imageDimensions.width <= width && imageDimensions.height <= height;
}

export async function validateImageAspectRatio(
  file: File,
  limiteAspectRatio: number
): Promise<boolean> {
  if (!file.type.includes('image')) throw new Error('File is not a image');

  const { height, width } = await getImageDimensionsFromFile(file);

  const imageAspectRatio = width / height;

  return imageAspectRatio <= limiteAspectRatio;
}

export async function validateVideoResolution(
  file: File,
  width: number,
  height: number
): Promise<boolean> {
  if (!file.type.includes('video')) throw new Error('File is not a video');

  const videoDimensions = await getVideoDimensionsAndDurationFromFile(file);

  return videoDimensions.width <= width && videoDimensions.height <= height;
}

export async function validateVideoDuration(
  file: File,
  durationLimit: number
): Promise<boolean> {
  if (!file.type.includes('video')) throw new Error('File is not a video');

  const { duration } = await getVideoDimensionsAndDurationFromFile(file);

  return duration <= durationLimit;
}
