import { createContext } from 'react';
import { AddonContextProps } from './AddonProvider.types';

export const AddonContext = createContext<AddonContextProps | null>(null);
