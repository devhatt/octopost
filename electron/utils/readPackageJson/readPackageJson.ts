import fs from 'node:fs/promises';

import { IPackageJson } from './readPackageJson.types';

/**
 * get **all** content inside the `package.json` on specified path
 * @param {string} moduleDir path to find the `package.json`
 * @returns the content inside `package.json`
 */
async function readPackageJson(moduleDir: string): Promise<IPackageJson> {
  const file = await fs.readFile(`${moduleDir}/package.json`, 'utf-8');

  // TODO [2024-04-1]: create a function to check if package.json is well formatted.

  const parsedPackage = JSON.parse(file) as unknown as IPackageJson | undefined;

  if (!parsedPackage) {
    throw new Error('conteúdo dentro do package.json não-encontrado');
  }

  return parsedPackage;
}

export default readPackageJson;
