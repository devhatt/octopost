import { OctoModule } from '~services/addons/addon/OctoModule';

type Module = {
  name: string;
};

export type ModulesState = {
  addAccount: (addonId: string) => void;
  addModule: (module: Module) => void;
  getAll: () => void;
  getAllAccountsFrom: (moduleId: string) => any;
  modules: OctoModule[];
};
