import scss from './PreviewContainer.module.scss';

import { IComponentPreviewProps } from './PreviewContainer.types';

const PreviewContainer = (props: IComponentPreviewProps) => {
  return <section className={scss.container}>{props.preview}</section>;
};

export default PreviewContainer;
