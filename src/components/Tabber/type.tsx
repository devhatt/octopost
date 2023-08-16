import { ReactNode } from 'react';

export interface ISocialItem {
  id: string;
}

export interface ITabberProps {
  socialList: ISocialItem[];
  children: ReactNode;
}
