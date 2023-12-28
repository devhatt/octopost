import {
  PropsWithChildren,
  ReactElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { OctoModule, manager } from '@octopost/module-manager';

import { fetchModules } from '~services/axios/modules';

import { IPluginMetadata } from '../../electron/utils/readPackageJson/readPackageJson.types';

export interface IModuleInterface {
  components: ReactElement[];
}

export interface IModuleContext {
  modules: OctoModule[];
  modulesURL: string[];
}

export const ModuleContext = createContext({} as IModuleContext);

export const useModule = () => useContext(ModuleContext);

export default function ModuleProvider({ children }: PropsWithChildren) {
  const [modules, setModules] = useState<OctoModule[]>([]);
  const [modulesURL, setModulesURL] = useState<string[]>([]);

  useEffect(() => {
    const unsubscribe = manager.subscribe('loaded-module', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setModules(manager.loadModules() as any);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    async function fetchInitialModules() {
      try {
        const { data: moduleDatas } =
          await fetchModules.get<IPluginMetadata[]>('/metadata');

        manager.emit('fetch-modules', moduleDatas);

        const modules = await Promise.all(
          moduleDatas.map(async (module) => {
            const modulesRequest = await fetch(
              'http://localhost:3000/sourcePath',
              {
                body: JSON.stringify({ sourcePath: module.sourcePath }),
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
              }
            );
            return modulesRequest.blob();
          })
        );

        const modulesUrl = modules.map((module, index) => {
          if (index === modules.length - 1) {
            manager.emit('finish-load', index);
          }
          return URL.createObjectURL(module);
        });

        setModulesURL(modulesUrl);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    }

    fetchInitialModules();

    const unsubscribe = manager.subscribe('loaded-module', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setModules(manager.loadModules() as any);
    });

    return () => unsubscribe();
  }, []);

  return (
    <ModuleContext.Provider value={{ modules, modulesURL }}>
      {children}
    </ModuleContext.Provider>
  );
}
