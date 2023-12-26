import scss from './icon.module.scss';

import { IIconProps } from './icon.types';

export const icons: Record<IIconProps['icon'], string> = {
  at: scss.iAt,
  canva: scss.iCanva,
  emote: scss.iEmote,
  error: scss.iError,
  gpt: scss.iGpt,
  hashtag: scss.iHashtag,
  link: scss.iLink,
  pin: scss.iPin,
};

export const sizes = {
  large: scss.large,
  small: scss.small,
};

export const colors = {
  active: scss.active,
  disabled: scss.disabled,
  error: scss.error,
};
