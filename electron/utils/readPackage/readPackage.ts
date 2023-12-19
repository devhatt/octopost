import fs from 'node:fs/promises';

import { IPluginMetadata } from './readPackage.types';

/**
 * get **all** content inside the `package.json` on specified path
 * @param {string} moduleDir path to find the `package.json`
 * @returns the content inside `package.json`
 */
async function readPackage(moduleDir: string): Promise<IPluginMetadata> {
  const parsedPackage = JSON.parse(
    await fs.readFile(`${moduleDir}/package.json`, 'utf8')
  );

  if (!parsedPackage) {
    throw new Error('conteúdo dentro do package.json não-encontrado');
  }

  return parsedPackage as IPluginMetadata;
}

export default readPackage;
