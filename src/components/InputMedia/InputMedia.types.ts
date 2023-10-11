export interface IMedia {
  file: File;
  id: string;
}

export interface IInputMediaProps {
  files?: File;
  onChange: (media: IMedia[]) => void;
}

export interface IInputMediaTestWrapper {
  onChange: (media: string) => void;
}
