import { ITabberProps } from './type';

import scss from './Tabber.module.scss';

function Tabber(props: ITabberProps) {
  const { networkList } = props;

  const renderNetwork = () => {
    return networkList.map((networkItem) => (
      <div className={scss.button} key={networkItem.id}>
        {networkItem.id}
      </div>
    ));
  };

  return <div className={scss.social}>{renderNetwork()}</div>;
}

export default Tabber;
