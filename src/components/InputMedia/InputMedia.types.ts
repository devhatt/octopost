export type IMedia = {
  file: File;
  id: string;
}

export type IInputMediaProps = {
  files?: File;
  onChange: (media: IMedia[]) => void;
}

export type IInputMediaTestWrapper = {
  onChange: (media: string) => void;
}
