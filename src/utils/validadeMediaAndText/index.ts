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
  limitWidth: number,
  limitHeight: number
): Promise<boolean> {
  if (!file.type.includes('image')) throw new Error('File is not a image');

  const { height, width } = await getImageDimensionsFromFile(file);

  return width <= limitWidth && height <= limitHeight;
}

export async function validateImageAspectRatio(
  file: File,
  limitAspectRatio: number
): Promise<boolean> {
  if (!file.type.includes('image')) throw new Error('File is not a image');

  const { height, width } = await getImageDimensionsFromFile(file);

  const imageAspectRatio = width / height;

  return imageAspectRatio <= limitAspectRatio;
}

export async function validateVideoResolution(
  file: File,
  limitWidth: number,
  limitHeight: number
): Promise<boolean> {
  if (!file.type.includes('video')) throw new Error('File is not a video');

  const { height, width } = await getVideoDimensionsAndDurationFromFile(file);

  return width <= limitWidth && height <= limitHeight;
}

export async function validateVideoDuration(
  file: File,
  limitDuration: number
): Promise<boolean> {
  if (!file.type.includes('video')) throw new Error('File is not a video');

  const { duration } = await getVideoDimensionsAndDurationFromFile(file);

  return duration <= limitDuration;
}
