import { IPluginMetadata } from '../../../electron/utils/readPackageJson/readPackageJson.types';

export interface IFetchModuleResponse {
  script: IPluginMetadata[];
}
