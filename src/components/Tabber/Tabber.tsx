import RenderNetwork from './components/TabberCompose/RenderNetwork';

import scss from './Tabber.module.scss';

import { ITabberProps } from './Tabber.types';

function Tabber(props: ITabberProps) {
  return (
    <div className={scss.social}>
      <RenderNetwork socialList={props.socialList} />
    </div>
  );
}

export default Tabber;
