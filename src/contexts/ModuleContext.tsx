import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { OctoModule, manager } from '@octopost/module-manager';

import { useFetchModules } from '~services/fetchModules/fetchModules';

import { IModuleContext } from './ModuleContext.types';

export const ModuleContext = createContext({} as IModuleContext);

export const useModule = () => useContext(ModuleContext);

export default function ModuleProvider({ children }: PropsWithChildren) {
  const [modules, setModules] = useState<OctoModule[]>([]);

  const { modulesURL, fetchModulesMetadata, fetchInitialModules } =
    useFetchModules();

  useEffect(() => {
    async function modulesFetch() {
      const modulesMetadata = await fetchModulesMetadata();

      if (!modulesMetadata) return;

      manager.emit('fetch-modules', modulesMetadata);
      await fetchInitialModules(modulesMetadata);
      manager.emit('finish-load', modulesURL);
    }

    modulesFetch();
    const unsubscribe = manager.subscribe('loaded-module', () => {
      setModules(manager.loadModules());
    });

    return () => unsubscribe();
  }, []);

  return (
    <ModuleContext.Provider value={{ modules, modulesURL }}>
      {children}
    </ModuleContext.Provider>
  );
}
