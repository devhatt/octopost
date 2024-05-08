const _10_MB_FILE = 1;

export const mockFileImage = new File(
  [new ArrayBuffer(_10_MB_FILE)],
  'mockfile.jpg',
  {
    type: 'image/jpeg',
  }
);

export const mockFileVideo = new File(
  [new ArrayBuffer(_10_MB_FILE)],
  'mockfile.mp4',
  {
    type: 'video/mp4',
  }
);
