import { createContext, useContext } from 'react';

export interface AddonContextProps {
  modules: any[];
}

export const AddonContext = createContext<AddonContextProps | null>(null);

export function useAddonContext() {
  return useContext(AddonContext) as AddonContextProps;
}
