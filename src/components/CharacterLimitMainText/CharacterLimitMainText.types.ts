import { ReactNode } from 'react';

export type ICharacterLimitMainTextProps = {
  module: IModuleProps[];
};

export type IModuleProps = {
  id: string;
  maxLength: number;
  svg: ReactNode;
  value: string;
};
