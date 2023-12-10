import { IPostMode } from 'modules/types';

import { ITab, TPostModeId } from '../Tabber.types';

export interface IPostModesProps {
  handleCurrentPostMode: (postMode: IPostMode, postModeId: TPostModeId) => void;
  currentPostModeId: TPostModeId;
  currentTab: ITab;
}
