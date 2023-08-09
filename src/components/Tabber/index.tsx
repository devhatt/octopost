import React from 'react';

import scss from './tabber.module.scss';

const Tabber: React.FC = () => {
  return (
    <div className={scss.social}>
      <button className={scss.button}>rede social 1</button>
      <button className={scss.button}>rede social 2</button>
      <button className={scss.button}>rede social 3</button>
      <button className={scss.button}>rede social 4</button>
      <button className={scss.button}>rede social 5</button>
      <button className={scss.button}>rede social 6</button>
    </div>
  );
};

export default Tabber;
