import { IPluginMetadata } from '../../../electron/utils/readPackageJson/readPackageJson.types';

export type IFetchModuleResponse = {
  script: IPluginMetadata[];
}
