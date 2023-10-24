import { TQuadrado } from '~components/InputSearch/InputSearch';

export interface ISearchClueProps {
  clearInput?: TQuadrado['clearInput'];
  value: string;
  label: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
