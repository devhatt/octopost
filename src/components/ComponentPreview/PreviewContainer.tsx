import scss from './PreviewContainer.module.scss';

import { IPreviewContainerProps } from './PreviewContainer.types';

const PreviewContainer = (props: IPreviewContainerProps) => {
  return <section className={scss.container}>{props.preview}</section>;
};

export default PreviewContainer;
