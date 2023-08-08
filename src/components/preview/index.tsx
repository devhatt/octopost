interface IPreview {
  previewText: string;
}

export const Preview: React.FC<IPreview> = ({ previewText }) => {
  return <div>{previewText}</div>;
};
