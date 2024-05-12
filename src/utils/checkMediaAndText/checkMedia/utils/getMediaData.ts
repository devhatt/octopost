import { ImageData, VideoData } from './getMediaData.type';

export async function getImageData(file: File): Promise<ImageData> {
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

export async function getVideoData(file: File): Promise<VideoData> {
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

export function getAspectRatio(aspectRatio: string): number {
  const dimensions = aspectRatio.split(/:|x/);
  const widthAspectRatio = Number(dimensions[0]);
  const heightAspectRatio = Number(dimensions[1]);

  return widthAspectRatio / heightAspectRatio;
}
