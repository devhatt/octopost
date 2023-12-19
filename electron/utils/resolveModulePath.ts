import path from 'path';

import readPackage from './readPackage/readPackage';

/**
 * function to return the content inside the `main` line inside the `package.json`
 * @param {string} moduleDir  - path to find the package.json without the word `package.json`
 */
async function resolveModulePath(moduleDir: string): Promise<string> {
  const parsedPackage = await readPackage(moduleDir);

  const mainContent = parsedPackage.main;

  return path.join(moduleDir, mainContent);
}

export default resolveModulePath;
