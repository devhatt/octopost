import { IPreview } from './Preview.types';

function Preview(props: IPreview) {
  return <div>{props.previewText}</div>;
}

export default Preview;
