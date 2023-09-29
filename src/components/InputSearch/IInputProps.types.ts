export interface IInputProps {
  name?: string;
  type?: string;
  value: string;
  required?: boolean;
  className?: string;
  placeholder: string;
  readonly?: boolean;
  errors?: boolean;
  errorMessage?: string;
  onFocus?: () => void;
  handleClear: () => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
