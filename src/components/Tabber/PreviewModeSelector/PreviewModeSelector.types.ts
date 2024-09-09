import { ChangeEvent } from 'react';

import { IconsType } from '~components/Icon/Icon.types';

export type PreviewMode = {
  icon: IconsType;
  id: string;
  name: string;
};

export type PreviewModeProps = {
  item: PreviewMode;
  onSelect: (e: ChangeEvent<HTMLInputElement>) => string;
};

export type PreviewModeSelectorProps = {
  changeDevice: (e: ChangeEvent<HTMLInputElement>) => string;
  list: PreviewMode[];
};
