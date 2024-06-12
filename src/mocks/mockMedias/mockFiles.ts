const sizeFile = 10_000;

export const mockFileImage = new File(
  [new ArrayBuffer(sizeFile)],
  'mockfile.jpg',
  {
    type: 'image/jpeg',
  }
);

export const mockFileVideo = new File(
  [new ArrayBuffer(sizeFile)],
  'mockfile.mp4',
  {
    type: 'video/mp4',
  }
);
