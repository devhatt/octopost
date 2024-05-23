export type Image = {
  addEventListener: (event: string, cb: () => void) => void;
  src: string;
};

export type Video = {
  addEventListener: (event: string, cb: () => void) => void;
  duration: number;
  height: number;
  src: string;
  width: number;
};
