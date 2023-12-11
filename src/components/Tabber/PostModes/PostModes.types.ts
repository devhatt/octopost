import { IPostMode } from 'modules/types';

import { ITab, TPostModeId } from '../Tabber.types';

export interface IPostModesProps {
  onChangePostMode: (postMode: IPostMode, postModeId: TPostModeId) => void;
  currentPostModeId: TPostModeId;
  currentTab: ITab;
}
