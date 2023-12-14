/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  PropsWithChildren,
  ReactElement,
  createContext,
  useEffect,
  useState,
} from 'react';

import { OctoModule, moduleRegister } from '@octopost/octomodule';

export interface ModuleInterface {
  components: ReactElement[];
}

export interface ModuleContext {
  modules: OctoModule[];
}

export const ModuleContext = createContext<ModuleContext | null>(null);

export default function ModuleProvider({ children }: PropsWithChildren) {
  const [modules, setModules] = useState<OctoModule[]>([]);

  useEffect(() => {
    const unsubscribe = moduleRegister.subscribe('loaded-module', () => {
      // eslint-disable-next-line no-console
      setModules(moduleRegister.loadModules() as any);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => console.log(modules), [modules]);

  return (
    <ModuleContext.Provider value={{ modules }}>
      {children}
    </ModuleContext.Provider>
  );
}
