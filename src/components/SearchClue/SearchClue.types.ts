import { TInputComponent } from '~components/InputSearch/InputSearch.types';

export interface ISearchClueProps {
  clearInput?: TInputComponent['clearInput'];
  value: string;
  label: string;
}
