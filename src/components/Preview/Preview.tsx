import { ReactNode } from 'react';

import scss from './Preview.module.scss';

import { IPreviewContainerProps } from './Preview.types';

function Preview(props: IPreviewContainerProps): ReactNode {
  return <div className={scss.container}>{props.children}</div>;
}

export default Preview;
