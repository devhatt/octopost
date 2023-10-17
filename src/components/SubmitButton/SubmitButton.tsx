import scss from './SubmitButton.module.scss';

function SubmitButton() {
  return (
    <div className={scss.ButtonBox}>
      <button className={scss.submitButtonPostNow}>Post Now</button>
      <button className={scss.submitButtonPostLater}>Post Later</button>
    </div>
  );
}

export default SubmitButton;
