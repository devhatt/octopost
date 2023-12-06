import { IPostMode } from 'modules/types';

export interface IPostModesProps {
  handleCurrentPostMode: (index: number) => void;
  currentPostMode: number;
  postModes: IPostMode[];
}
