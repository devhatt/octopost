import classNames from 'classnames';

import { colors, icons, sizes } from './data';

import { IIconProps } from './icon.types';

const Icon: React.FC<IIconProps> = ({ icon, color, size, className }) => {
  const iconIcons = icon ? icons[icon] : '';
  const iconColors = color ? colors[color] : '';
  const iconSizes = size ? sizes[size] : '';

  const iconClasses = classNames(iconIcons, iconSizes, iconColors, className);

  return <span data-testid="icon-element" className={iconClasses} />;
};

export default Icon;
