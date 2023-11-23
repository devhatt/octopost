import scss from './icon.module.scss';

import { IIconProps } from './icon.types';

export const icons: Record<IIconProps['icon'], string> = {
  at: scss.iAt,
  emote: scss.iEmote,
  hashtag: scss.iHashtag,
  link: scss.iLink,
  pin: scss.iPin,
  gpt: scss.iGpt,
  canva: scss.iCanva,
};

export const sizes = {
  small: scss.small,
  large: scss.large,
};

export const colors = {
  active: scss.active,
  disabled: scss.disabled,
  error: scss.error,
};
