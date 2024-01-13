export type TCheckboxChangeHandler = (checked: boolean) => void;

export type TCheckboxProps = {
  className?: string;
  children: string;
  onChange: TCheckboxChangeHandler;
  checked: boolean;
};
