export interface ICharacterLimitMainTextProps {
  value: string;
  socialList: ISocialItem[];
}
export interface ISocialItem {
  id: string;
  maxLength: number;
}
