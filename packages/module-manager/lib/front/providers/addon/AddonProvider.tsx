import { ReactNode } from 'react';
import { AddonContext } from './AddonContext';
import { useAddonInfoLoad } from '@hooks';
import { addonApi } from '@api';
import { AddonProviderProps } from './AddonProvider.types';

export function AddonProvider({
  children,
  serverURL,
}: AddonProviderProps): ReactNode {
  addonApi.defaults.baseURL = serverURL;

  const { info } = useAddonInfoLoad();

  return (
    <AddonContext.Provider value={{ info }}>{children}</AddonContext.Provider>
  );
}
