import { ComponentPropsWithRef, ComponentPropsWithoutRef } from 'react';

type TLabelProps = Omit<ComponentPropsWithoutRef<'label'>, 'for'>;

export type TCheckboxChangeHandler = (checked: boolean) => void;

export type TCheckboxProps = Omit<
  ComponentPropsWithRef<'input'>,
  'onChange'
> & {
  children?: string;
  labelProps?: TLabelProps;
  onChange?: TCheckboxChangeHandler;
};
