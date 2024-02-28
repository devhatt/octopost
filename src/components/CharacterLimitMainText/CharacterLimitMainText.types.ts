import { ReactNode } from 'react';

export interface ICharacterLimitMainTextProps {
  module: IModuleProps[];
}

export interface IModuleProps {
  id: string;
  maxLength: number;
  svg: ReactNode;
  value: string;
}
