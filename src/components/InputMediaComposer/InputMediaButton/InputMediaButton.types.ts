export interface IMedia {
  file: File;
  id: string;
}

export interface IInputMediaButtonProps {
  files?: File;
  onChange: (media: IMedia[]) => void;
}

export interface IInputMediaButtonTestWrapper {
  onChange: (media: string) => void;
}
