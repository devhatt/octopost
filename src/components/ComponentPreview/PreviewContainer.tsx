import scss from './PreviewContainer.module.scss';

import { IComponentPreviewProps } from './PreviewContainer.types';

const ComponentPreview = (props: IComponentPreviewProps) => {
  return (
    <section className={scss.container}>
      {/* Remover H1 quando inserir o componente view */}
      <h1>Elemento a ser renderizado</h1>
      {props.preview}
    </section>
  );
};

export default ComponentPreview;
