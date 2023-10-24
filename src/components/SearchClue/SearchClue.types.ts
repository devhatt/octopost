import { TInputComponent } from '~components/InputSearch/InputSearch';

export interface ISearchClueProps {
  clearInput?: TInputComponent['clearInput'];
  value: string;
  label: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
