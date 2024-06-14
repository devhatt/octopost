import { ReactNode } from 'react';

import scss from './Preview.module.scss';

import { PreviewProps } from './Preview.types';

function Preview(props: PreviewProps): ReactNode {
  return <div className={scss.container}>{props.children}</div>;
}

export default Preview;
