export type TCheckboxChangeHandler = (checked: boolean) => void;

export interface TCheckboxProps {
  checked: boolean;
  children: string;
  className?: string;
  onChange: TCheckboxChangeHandler;
}
