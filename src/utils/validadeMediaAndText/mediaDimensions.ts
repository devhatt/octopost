import { TImageDimensions, TVideoDimensions } from './mediaDimensions.types';

export async function getImageDimensionsFromFile(
  file: File
): Promise<TImageDimensions> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener('load', (e) => {
      const img = new Image();

      img.src = e.target?.result as string;

      img.addEventListener('load', () => {
        resolve({
          height: img.naturalHeight,
          width: img.naturalWidth,
        });
      });
    });
    reader.readAsDataURL(file);
  });
}

export async function getVideoDimensionsAndDurationFromFile(
  file: File
): Promise<TVideoDimensions> {
  return new Promise((resolve) => {
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

    reader.readAsDataURL(file);
  });
}
