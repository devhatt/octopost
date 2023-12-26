import classNames from 'classnames';

import { colors, icons, sizes } from './data';

import scss from './icon.module.scss';

import { IIconProps } from './icon.types';

function Icon(props: IIconProps) {
  const iconIcons = props.icon ? icons[props.icon] : '';
  const iconColors = props.color ? colors[props.color] : '';
  // eslint-disable-next-line unicorn/explicit-length-check
  const iconSizes = props.size ? sizes[props.size] : '';

  const iconClasses = classNames(
    scss.icon,
    iconIcons,
    iconSizes,
    iconColors,
    props.className
  );

  return <span className={iconClasses} data-testid="icon-element" />;
}

export default Icon;
