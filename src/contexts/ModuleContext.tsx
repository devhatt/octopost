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

import { OctoModule, manager } from '@octopost/module-manager';

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
    const unsubscribe = manager.subscribe('loaded-module', () => {
      setModules(manager.loadModules() as any);
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
