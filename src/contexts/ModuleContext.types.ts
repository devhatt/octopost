
import { ReactElement } from 'react';

import { OctoModule } from '@octopost/module-manager';

export type IModuleInterface = {
  components: ReactElement[];
}

export type IModuleContext = {
  modules: OctoModule[];
  modulesURL: string[];
}
