import { ComponentPropsWithRef, ComponentPropsWithoutRef } from 'react';

type TLabelProps = Omit<ComponentPropsWithoutRef<'label'>, 'for'>;

export type TCheckboxVariants = 'normal' | 'button';

export type TCheckboxProps = ComponentPropsWithRef<'input'> & {
  labelProps?: TLabelProps;
  children: string;
  multine?: boolean;
  variant?: TCheckboxVariants;
};
