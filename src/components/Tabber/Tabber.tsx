import { ITabberProps } from './type';

import scss from './Tabber.module.scss';

function Tabber(props: ITabberProps) {
  const { socialList, children } = props;

  const renderNetwork = socialList.map((socialItem) => (
    <div className={scss.button} key={socialItem.id}>
      {socialItem.id}
    </div>
  ));

  return (
    <div className={scss.social}>
      {renderNetwork} {children}
    </div>
  );
}

export default Tabber;
