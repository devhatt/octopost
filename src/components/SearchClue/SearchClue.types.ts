import { TInputComponent } from '~components/InputSearch/InputSearch.types';

export interface ISearchClueProps {
  clearInput?: TInputComponent['clearInput'];
  label: string;
  value: string;
}
