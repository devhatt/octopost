import scss from './iconFont.module.scss';

import { IIconProps } from './iconFont.types';

const icons: Record<IIconProps['icon'], string> = {
  at: scss.iAt,
  emote: scss.iEmote,
  hashtag: scss.iHashtag,
  link: scss.iLink,
  pin: scss.iPin,
  gpt: scss.iGpt,
  canva: scss.iCanva,
};

const sizes = {
  small: scss.small,
  large: scss.large,
};

const colors = {
  active: scss.active,
  disabled: scss.disabled,
  error: scss.error,
};

const Icon: React.FC<IIconProps> = ({ icon, color, size, className }) => {
  const IconIcons = icon ? icons[icon] : '';
  const iconColors = color ? colors[color] : '';
  const IconSizes = size ? sizes[size] : '';

  return (
    <span className={`${IconIcons} ${IconSizes} ${iconColors} ${className}`} />
  );
};

export default Icon;
