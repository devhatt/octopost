import { ReactNode } from 'react';

export type CharacterLimitMainTextProps = {
  module: ModuleProps[];
};

export type ModuleProps = {
  icon?: boolean;
  id: string;
  maxLength: number;
  svg: ReactNode;
  value: string;
};
