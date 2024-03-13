import { ReactNode } from 'react';

export type CharacterLimitMainTextProps = {
  module: ModuleProps[];
};

export type ModuleProps = {
  id: string;
  maxLength: number;
  svg: ReactNode;
  value: string;
};
