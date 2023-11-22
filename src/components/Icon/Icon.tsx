import classNames from 'classnames';

import scss from './icon.module.scss';

import { IIconProps } from './icon.types';

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

  const iconClasses = classNames(IconIcons, IconSizes, iconColors, className);

  return <span data-testid="icon-element" className={iconClasses} />;
};

export default Icon;
