import path from 'path';

import { getPackageJson } from './getPackageJson';

/**
 * function to return the content inside the `main` line inside the `package.json`
 * @param {string} dir  - path to find the package.json without the word `package.json`
 * @returns the path to main script on `package.json`
 */
export function getAddonPath(dir: string): string {
  const packageJson = getPackageJson(dir);

  const main = packageJson.main;

  return path.join(dir, main);
}
