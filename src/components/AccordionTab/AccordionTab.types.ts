import { PropsWithChildren, ReactNode } from 'react';

type TOnChangeOpen = (newIsOpen: boolean) => void;

type TRenderHeader = (props: {
  className?: string;
  children: ReactNode;
}) => ReactNode;

export type TAccordionTabProps = PropsWithChildren<{
  title?: string;
  isOpen?: boolean;
  className?: string;
  onChangeOpen?: TOnChangeOpen;
  hideCloseButton?: boolean;
  renderHeader?: TRenderHeader;
}>;
