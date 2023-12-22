import fs from 'node:fs/promises';
import path from 'node:path';

import readPackageJson from './readPackageJson/readPackageJson';
import resolveModulePath from './resolveModulePath';

import { IPluginMetadata } from './readPackageJson/readPackageJson.types';

/**
 * function to get all necessary metadata about the plugins installed
 * @param {string} PluginsFolder - path to folder where all plugins are installed
 * @returns metadata of all plugins installed
 */
async function resolveModulesMetadata(
  PluginsFolder: string
): Promise<IPluginMetadata[]> {
  const plugins = await fs.readdir(PluginsFolder);

  const metadatas = await Promise.all(
    plugins.map(async (plugin) => {
      const metadataPath = path.join(PluginsFolder, plugin);

      const getMetadata = await readPackageJson(metadataPath);

      const metadata: IPluginMetadata = {
        name: getMetadata.name,
        sourcePath: await resolveModulePath(metadataPath),
        version: getMetadata.version,
        author: getMetadata.author,
        repositoryURL: getMetadata.repository?.url,
      };

      return metadata;
    })
  );

  return metadatas;
}

export default resolveModulesMetadata;
