import fs from 'node:fs';

import { PackageJson } from '../models/packageJson';

/**
 * get **all** content inside the `package.json` on specified path
 * @param {string} dir path to find the `package.json`
 * @returns the content inside `package.json`
 */
export function getPackageJson(dir: string): PackageJson {
  const packageFile = fs.readFileSync(`${dir}/package.json`, 'utf8');

  const packageObj = JSON.parse(packageFile);

  if (typeof packageObj !== 'object') {
    throw new TypeError('conteúdo dentro do package.json não-encontrado');
  }

  return packageObj as PackageJson;
}
