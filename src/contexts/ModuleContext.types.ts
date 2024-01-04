import { OctoModule } from '@octopost/module-manager';

export interface IModuleInterface {
  components: React.ReactElement[];
}

export interface IModuleContext {
  modules: OctoModule[];
  modulesURL: string[];
}
