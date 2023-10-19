import SubmitButton from '~components/SubmitButton/SubmitButton';

import scss from './SavBar.module.scss';

function SavBar() {
  return (
    <div className={scss.savBarWrapper}>
      <a href="/">+ Save as draft</a>
      <SubmitButton />
    </div>
  );
}

export default SavBar;
