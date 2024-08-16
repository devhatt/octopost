import { IconsType } from '~components/Icon/Icon.types';

export type PreviewMode = {
  icon: IconsType;
  id: string;
  name: string;
};

export type PreviewModeProps = {
  item: PreviewMode;
};

export type PreviewModeSelectorProps = {
  list: PreviewMode[];
};
