import { TInputComponent } from '~components/CustomInput/CustomInput.types';

export type ISearchClueProps = {
  clearInput?: TInputComponent['clearInput'];
  label: string;
  value: string;
};
