import { ComponentPropsWithRef } from 'react';

type CheckboxBaseProps = Omit<ComponentPropsWithRef<'input'>, 'onChange'>;

export type CheckboxProps = CheckboxBaseProps & {
  checked: boolean;
  children: string;
  onChange?: (checked: boolean) => void;
};
