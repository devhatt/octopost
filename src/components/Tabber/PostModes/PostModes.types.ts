﻿import { PostMode } from '@octopost/module-manager';

import { ITab, TPostModeId } from '../Tabber.types';

export type IPostModesProps = {
  currentPostModeId: TPostModeId;
  currentTab: ITab;
  onChangePostMode: (postMode: PostMode, postModeId: TPostModeId) => void;
};
