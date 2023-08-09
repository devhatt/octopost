import scss from './Swith.module.scss';

interface ISwitch {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

function Switch(props: ISwitch) {
  const handleCheck = (ev: React.ChangeEvent<HTMLInputElement>) => {
    props.setChecked(ev.target.checked);
  };

  return (
    <input
      className={scss.input}
      checked={props.checked}
      onChange={handleCheck}
      type="checkbox"
    />
  );
}

export default Switch;
