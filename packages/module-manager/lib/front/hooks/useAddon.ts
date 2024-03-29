import { useContext } from 'react';
import { AddonContext } from '../providers/addon/AddonContext';
import { AddonContextProps } from '../providers/addon/AddonProvider.types';

export function useAddon() {
  return useContext(AddonContext);
}
