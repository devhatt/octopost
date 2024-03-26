import { useState } from 'react';

import { fetchModules } from '~services/axios/modules';

import { IPluginMetadata } from '../../../electron/utils/readPackageJson/readPackageJson.types';
import { IFetchModuleResponse } from './fetchModules.types';

export function useFetchModules() {
  const [modulesURL, setModulesURL] = useState<string[]>([]);

  const fetchModulesMetadata = async (): Promise<IPluginMetadata[] | undefined> => {
    try {
      const { data: modulesMetadata } =
        await fetchModules.get<IFetchModuleResponse>('/metadata');

      return modulesMetadata.script;
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchInitialModules(modulesMetadata: IPluginMetadata[]) {
    try {
      const fetchModuleScript = async (module: IPluginMetadata) => {
        const modulesRequest = await fetchModules.post(
          '/sourcePath',
          { sourcePath: module.sourcePath },
          {
            headers: { 'Content-Type': 'application/json' },
            responseType: 'blob',
          }
        );

        return await modulesRequest.data;
      };

      const modules = await Promise.all(modulesMetadata.map(fetchModuleScript));

      const modulesUrl = modules.map((module) => URL.createObjectURL(module));

      setModulesURL(modulesUrl);
    } catch (error) {
       
      console.error(error);
    }
  }

  return {
    fetchInitialModules,
    fetchModulesMetadata,
    modulesURL,
  };
};
