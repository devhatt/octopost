import { AddonInfo } from '@models';
import { PropsWithChildren } from 'react';

export interface AddonContextProps {
  info: AddonInfo[];
}

export type AddonProviderProps = PropsWithChildren<{
  serverURL: string;
}>;
