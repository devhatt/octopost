export type LoadImage = {
  addEventListener: (event: string, cb: () => void) => void;
  src: string;
};

export type LoadVideo = {
  addEventListener: (event: string, cb: () => void) => void;
  duration: number;
  height: number;
  src: string;
  width: number;
};
