import { SVGProps } from 'react';

export interface IIconProps extends SVGProps<SVGSVGElement> {
  icon:
    | 'alert'
    | 'check'
    | 'close'
    | 'hamburguer'
    | 'left-arrow'
    | 'mag'
    | 'minus'
    | 'plus'
    | 'right-arrow'
    | 'small-circle-filled'
    | 'star-filled'
    | 'star';
  size?: number;
}
