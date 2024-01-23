import classNames from 'classnames';

import { colors, icons, sizes } from './data';

import scss from './icon.module.scss';

import { IIconProps } from './icon.types';

const Icon: React.FC<IIconProps> = ({ className, color, icon, size }) => {
  const iconIcons = icon ? icons[icon] : '';
  const iconColors = color ? colors[color] : '';
  const iconSizes = size ? sizes[size] : '';

  const iconClasses = classNames(
    scss.icon,
    iconIcons,
    iconSizes,
    iconColors,
    className
  );

  return <span className={iconClasses} data-testid="icon-element" />;
};

export default Icon;
