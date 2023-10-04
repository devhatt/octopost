export interface ICharacterLimitMainTextProps {
  module: IModuleProps[];
}

export interface IModuleProps {
  id: string;
  maxLength: number;
  svg: React.ReactNode; // Altere o tipo para React.ReactNode
  value: string;
}
