import { IPreview } from './Preview.types';

function Preview(props: IPreview) {
  return <div>{props.children}</div>;
}

export default Preview;
