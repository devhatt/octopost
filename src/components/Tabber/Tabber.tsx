import { network } from './TabberNetworks';

import scss from './Tabber.module.scss';

function Tabber() {
  return (
    <div className={scss.social}>
      {network.map((networkItem) => (
        <div className={scss.button} key={networkItem.id}>
          {networkItem.id}
        </div>
      ))}
    </div>
  );
}

export default Tabber;
