import { ReactNode } from 'react';

import { IPreview } from './Preview.types';

function Preview(props: IPreview): ReactNode {
  return <div>{props.children}</div>;
}

export default Preview;
