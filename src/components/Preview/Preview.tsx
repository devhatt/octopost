import { ReactNode } from 'react';

import scss from './Preview.module.scss';

import { IPreviewProps } from './Preview.types';

function Preview(props: IPreviewProps): ReactNode {
  return <div className={scss.container}>{props.children}</div>;
}

export default Preview;
