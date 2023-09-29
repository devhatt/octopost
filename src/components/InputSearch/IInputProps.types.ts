export interface IInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  handleClear: boolean;
  value: string;
  required?: boolean;
  onFocus?: () => void;
  className?: string;
  name: string;
  placeholder: string;
  readonly?: boolean;
  type: string;
  errors?: boolean;
  errorMessage?: string;
}
