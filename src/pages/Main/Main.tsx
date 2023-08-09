import scss from './Main.module.scss';
export default function MainScreen() {
  return (
    <div className={scss.container}>
      <div className={scss.switches}>
        <p>switches</p>
      </div>
      <div className={scss.initText}>texto inicial</div>
      <div className={scss.tabs}>tabs</div>
    </div>
  );
}
