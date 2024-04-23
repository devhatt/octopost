import { Account } from '~services/api/accounts/accounts.types';
import { GenericObject } from '~types/object';

type Module = {
  name: string;
};

export type ModulesState = {
  accounts: GenericObject<Account[]>;
  addAccount: (addonId: string) => void;
  addModule: (module: Module) => void;
  getAllAccounts: () => void;
  modules: string[];
};
