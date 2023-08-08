import scss from './Swith.module.scss';

interface ISwitch {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Switch: React.FC<ISwitch> = ({ checked, setChecked }) => {
  const handleCheck = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(ev.target.checked);
  };

  return (
    <input
      className={scss.input}
      checked={checked}
      onChange={handleCheck}
      type="checkbox"
    />
  );
};
