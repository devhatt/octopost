import scss from './PreviewContainer.module.scss';

import { IPreviewContainerProps } from './PreviewContainer.types';

const PreviewContainer = (props: IPreviewContainerProps) => {
  return <section className={scss.container}>{props.children}</section>;
};

export default PreviewContainer;
