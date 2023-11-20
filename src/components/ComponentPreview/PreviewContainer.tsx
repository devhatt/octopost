import scss from './PreviewContainer.module.scss';

import { IPreviewContainerProps } from './PreviewContainer.types';

const PreviewContainer = (props: IPreviewContainerProps) => {
  return <div className={scss.container}>{props.children}</div>;
};

export default PreviewContainer;
