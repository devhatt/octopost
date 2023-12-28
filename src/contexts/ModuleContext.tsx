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
    const controller = new AbortController();

    async function fetchInitialModules() {
      const { data: moduleDatas } = await fetchModules.get<IPluginMetadata[]>(
        '/metadata',
        {
          signal: controller.signal,
        }
      );
      moduleDatas;
      const modules = await Promise.all(
        moduleDatas.map(async (module) => {
          return (
            await fetch('http://localhost:3000/sourcePath', {
              body: JSON.stringify({ sourcePath: module.sourcePath }),
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
            })
          ).blob();
        })
      );
      setModulesURL(
        modules.map((module) => {
          return URL.createObjectURL(module);
        })
      );
    }

    fetchInitialModules();

    return () => {
      controller.abort();
    };
  }, []);

  // eslint-disable-next-line no-console
  useEffect(() => console.log(modules), [modules]);

  return (
    <ModuleContext.Provider value={{ modules, modulesURL }}>
      {children}
    </ModuleContext.Provider>
  );
}
