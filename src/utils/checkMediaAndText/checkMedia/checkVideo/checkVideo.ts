import { getVideoData } from '../utils/getMediaData';

export async function checkVideoResolution(
  file: File,
  limitWidth: number,
  limitHeight: number
): Promise<boolean> {
  if (!file.type.includes('video')) throw new Error('File is not a video');
  const { height, width } = await getVideoData(file);

  return width <= limitWidth && height <= limitHeight;
}

export async function checkVideoDuration(
  file: File,
  limitDuration: number
): Promise<boolean> {
  if (!file.type.includes('video')) throw new Error('File is not a video');
  const { duration } = await getVideoData(file);

  return duration <= limitDuration;
}
