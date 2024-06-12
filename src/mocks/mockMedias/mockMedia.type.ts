export type Image = {
  addEventListener: (event: string, cb: () => void) => void;
  height: number;
  src: string;
  width: number;
};

export type Video = {
  addEventListener: (event: string, cb: () => void) => void;
  duration: number;
  src: string;
  videoHeight: number;
  videoWidth: number;
};
