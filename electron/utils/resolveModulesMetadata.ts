import fs from 'node:fs/promises';
import path from 'node:path';

import readPackage from './readPackage/readPackage';
import resolveModulePath from './resolveModulePath';

import { IPluginMetadata } from './readPackage/readPackage.types';

async function resolveModulesMetadata(pluginsPath: string) {
  const plugins = await fs.readdir(pluginsPath);

  const metadatas = await Promise.all(
    plugins.map(async (plugin) => {
      const metadataPath = path.join(pluginsPath, plugin);

      const getMetadata = await readPackage(metadataPath);

      const metadata: IPluginMetadata = {
        name: getMetadata.name,
        main: await resolveModulePath(metadataPath),
        version: getMetadata.version,
        author: getMetadata.author,
        repository: getMetadata.repository,
      };

      return metadata;
    })
  );

  return metadatas;
}

export default resolveModulesMetadata;
