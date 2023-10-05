export interface ICharacterLimitMainTextProps {
  module: IModuleProps[];
}

export interface IModuleProps {
  id: string;
  maxLength: number;
  svg: React.ReactNode;
  value: string;
}
