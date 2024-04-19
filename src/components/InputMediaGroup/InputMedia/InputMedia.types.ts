export type TMedia = {
  file: File;
  id: string;
};

export type TInputMediaProps = {
  files?: File;
  onChange: (media: TMedia[]) => void;
};

export type TInputMediaTestWrapper = {
  onChange: (media: string) => void;
};
