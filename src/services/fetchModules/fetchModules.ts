import { useState } from 'react';

import { fetchModules } from '~services/axios/modules';

import { IPluginMetadata } from '../../../electron/utils/readPackageJson/readPackageJson.types';
import { IFetchModuleResponse } from './fetchModules.types';

export const useFetchModules = () => {
  const [modulesURL, setModulesURL] = useState<string[]>([]);

  async function fetchModulesMetadata() {
    try {
      const { data: modulesMetadata } =
        await fetchModules.get<IFetchModuleResponse>('/metadata');

      return modulesMetadata.script;
    } catch (err) {
      console.error(err);
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

      const modulesUrl = modules.map((module) => {
        return URL.createObjectURL(module);
      });

      setModulesURL(modulesUrl);
    } catch (error) {
      console.error(error);
    }
  }

  return {
    modulesURL,
    fetchInitialModules,
    fetchModulesMetadata,
  };
};
