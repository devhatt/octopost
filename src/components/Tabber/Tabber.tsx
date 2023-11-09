import PreviewContainer from '~components/ComponentPreview/PreviewContainer';
import Preview from '~components/Preview/Preview';

import RenderNetwork from './components/TabberCompose/RenderNetwork';

import scss from './Tabber.module.scss';

import { ITabberProps } from './Tabber.types';

function Tabber(props: ITabberProps) {
  return (
    <div className={scss.social}>
      <div className={scss.tabberContainer}>
        <RenderNetwork socialList={props.socialList} />
      </div>
      <div className={scss.flexSelect}>
        <div className={scss.contentContainer}>Content Imaginário</div>
        <PreviewContainer>
          <Preview>Preview Imaginário</Preview>
        </PreviewContainer>
      </div>
    </div>
  );
}

export default Tabber;
