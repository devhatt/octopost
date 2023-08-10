import scss from './Tabber.module.scss';

function Tabber() {
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
}

export default Tabber;
