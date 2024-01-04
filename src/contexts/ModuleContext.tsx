import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { OctoModule, manager } from '@octopost/module-manager';

import { EMethod } from '~enums/fetchMethods';
import { fetchModules } from '~services/axios/modules';

import { IPluginMetadata } from '../../electron/utils/readPackageJson/readPackageJson.types';
import { IModuleContext } from './ModuleContext.types';

export const ModuleContext = createContext({} as IModuleContext);

export const useModule = () => useContext(ModuleContext);

export default function ModuleProvider({ children }: PropsWithChildren) {
  const [modules, setModules] = useState<OctoModule[]>([]);
  const [modulesURL, setModulesURL] = useState<string[]>([]);

  useEffect(() => {
    const unsubscribe = manager.subscribe('loaded-module', () => {
      setModules(manager.loadModules());
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    async function fetchInitialModules() {
      try {
        const { data: moduleDatas } =
          await fetchModules.get<IPluginMetadata[]>('/metadata');

        manager.emit('fetch-modules', moduleDatas);

        const bodyBuilder = (sourcePath: Record<string, string>) => {
          const body = {
            body: JSON.stringify(sourcePath),
            method: EMethod.POST,
            headers: {
              'Content-Type': 'application/json',
            },
          };
          return body;
        };

        const fetchModuleScript = async (module: IPluginMetadata) => {
          const modulesRequest = await fetch(
            'http://localhost:3000/sourcePath',
            bodyBuilder({ sourcePath: module.sourcePath })
          );

          return modulesRequest.blob();
        };

        const modules = await Promise.all(moduleDatas.map(fetchModuleScript));

        const modulesUrl = modules.map((module, index) => {
          if (index === modules.length - 1) {
            manager.emit('finish-load', index);
          }
          return URL.createObjectURL(module);
        });

        setModulesURL(modulesUrl);
      } catch (error) {
        console.error(error);
      }
    }

    fetchInitialModules();

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
