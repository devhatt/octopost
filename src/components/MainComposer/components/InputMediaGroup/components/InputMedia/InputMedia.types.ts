export type Media = {
  file: File;
  id: string;
};

export type InputMediaProps = {
  files?: File;
  onChange: (media: Media[]) => void;
};

export type IInputMediaTestWrapper = {
  onChange: (media: string) => void;
};
