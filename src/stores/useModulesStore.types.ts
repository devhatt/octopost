import { ITab } from '~components/Tabber/Tabber.types';

interface Module {
  name: string;
}

export interface ModulesState {
  addModule: (module: Module) => void;
  modules: (ITab | Module)[];
}
