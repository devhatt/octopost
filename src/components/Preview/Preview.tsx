import { IPreview } from './Preview.types';

function Preview(props: IPreview) {
  return <p>{props.previewText}</p>;
}

export default Preview;
