import SubmitButton from '~components/SubmitButton/SubmitButton';

import scss from './SaveBar.module.scss';

function SaveBar() {
  return (
    <div className={scss.savBarWrapper}>
      <a href="/">+ Save as draft</a>
      <SubmitButton />
    </div>
  );
}

export default SaveBar;
