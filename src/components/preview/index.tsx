interface IPreview {
  previewText: string;
}

export const Preview = ({ previewText }: IPreview) => {
  return <div>{previewText}</div>;
};
