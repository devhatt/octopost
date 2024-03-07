import fs from 'node:fs/promises';

import { IPackageJson } from './readPackageJson.types';

/**
 * get **all** content inside the `package.json` on specified path
 * @param {string} moduleDir path to find the `package.json`
 * @returns the content inside `package.json`
 */
async function readPackageJson(moduleDir: string): Promise<IPackageJson> {
  const parsedPackage = JSON.parse(
    await fs.readFile(`${moduleDir}/package.json`, 'utf8')
  );

  if (!parsedPackage) {
    throw new Error('conteúdo dentro do package.json não-encontrado');
  }

  return parsedPackage as IPackageJson;
}

export default readPackageJson;
