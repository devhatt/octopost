import { IPostMode } from 'modules/types';

import { ITab, TPostModeId } from '../Tabber.types';

export interface IPostModesProps {
  currentPostModeId: TPostModeId;
  currentTab: ITab;
  onChangePostMode: (postMode: IPostMode, postModeId: TPostModeId) => void;
}
