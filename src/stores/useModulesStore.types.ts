import { ITab } from '~components/Tabber/Tabber.types';

type Module = {
  name: string;
};

export type ModulesState = {
  addModule: (module: Module) => void;
  modules: (ITab | Module)[];
};
