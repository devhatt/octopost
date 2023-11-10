import { ComponentPropsWithRef, ComponentPropsWithoutRef } from 'react';

type TLabelProps = Omit<ComponentPropsWithoutRef<'label'>, 'for'>;

export type TFirstCommentProps = ComponentPropsWithRef<'input'> & {
  labelProps?: TLabelProps;
  children: string;
  multine?: boolean;
};
